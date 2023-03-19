const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
var cp = require('child_process');
const app = express();
const crypto = require('crypto');
const port = process.env.PORT || 3001;
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));
app.use(bodyParser.json());
app.post('/login', jsonParser,function requestHandler(req, res) {
    const data = fs.readFileSync('../../scripts/login.json','utf8');
    const storedHashes = JSON.parse(data);
    if (req.body['hash'] === storedHashes[req.body['user']]){
        res.send(JSON.stringify(req.body['user']));
    }
});
app.post('/register', jsonParser,function requestHandler(req, res) {
    let data = fs.readFileSync('../../scripts/login.json','utf8');
    let lines = data.split('\r\n');
    lines = data.slice(0, -1);
    lines = lines + ',\n' 
    lines = lines + '"'+req.body['user']+'": "'+req.body['hash']+'"\n'
    lines = lines + '}'
    fs.writeFileSync('../../scripts/login.json', lines);
    data = fs.readFileSync('../../scripts/login.json','utf8');
    const storedHashes = JSON.parse(data);
    if (req.body['hash'] === storedHashes[req.body['user']]){
        res.send(JSON.stringify(req.body['user']));
    }
});
app.get('/get/all', (req, res) => {
    var child = cp.spawn('../../scripts/get_all.sh')
    let out = {values : []};
    child.stdout.on('data', function(data){
        data = String(data).trim().split(/(?<=^\S+)\s/);
        out.values.push(JSON.stringify(Object.assign({data})));
    });
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        console.error(err);
        res.status(500).send(JSON.stringify(err));
    });
    child.on('close', (code) => {
        res.send(out);
    });
});
app.post('/set/runtime', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/set_runtime_param.sh', [req.body['parameter'], req.body['value']])
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        console.error(err);
        res.status(500).send(JSON.stringify(err));
    });
    child.on('close', (code) => {
        res.status(200).send();
    });
});
app.post('/set/persistent', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/set_persistent_param.sh', [req.body['parameter'], req.body['value']])
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        console.error(err);
        res.status(500).send(JSON.stringify(err));
    });
    child.on('close', (code) => {
        res.status(200).send();
    });
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE);
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
