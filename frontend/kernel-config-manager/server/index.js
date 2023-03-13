const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
var cp = require('child_process');
const app = express();
const port = process.env.PORT || 3001;
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));
app.post('/login', jsonParser,function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/login.sh', [req.body[0], req.body[1]])
    let out = '';
    child.stdout.on('data', function(data) {
        data = data.toString().trim();
        res.send(JSON.stringify(data));
    });
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        out = JSON.stringify(err);
        res.send(out);
    });
});
app.post('/get/value', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/get_value.sh', [req.body.class, req.body.parameter])
    let out = '';
    child.stdout.on('data', function(data) {
        data = data.toString().trim().split('\n');
        out = JSON.stringify(Object.assign({},data));
        res.send(out);
    });
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        out = JSON.stringify(err);
        res.send(out);
    });
});
app.post('/get/params', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/get_params.sh', [req.body.class])
    let out = '';
    child.stdout.on('data', function(data) {
        data = data.toString().trim().split('\n');
        out = JSON.stringify(Object.assign({},data));
        res.send(out);
    });
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        out = JSON.stringify(err);
        res.send(out);
    });
});
app.get('/get/classes', (req, res) => {
    var child = cp.spawn('../../scripts/get_tunable_classes.sh')
    let out = '';
    child.stdout.on('data', function(data){
        data = data.toString().trim().split('\n');
        out = JSON.stringify(Object.assign({},data));
        res.send(out);
    });
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        out = JSON.stringify(err);
        res.send(out);
    });
});
app.post('/set/runtime', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/set_runtime_param.sh', [req.body.class, req.body.parameter, req.body.value])
    let out = '';
    child.stdout.on('data', function(data) {
        data = data.toString().trim().split('\n');
        out = JSON.stringify(Object.assign({},data));
        res.send(out);
    });
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        out = JSON.stringify(err);
        res.send(out);
    });
});
app.post('/set/persistent', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/set_persistent_param.sh', [req.body.class, req.body.parameter, req.body.value])
    let out = '';
    child.stdout.on('data', function(data) {
        data = data.toString().trim().split('\n');
        out = JSON.stringify(Object.assign({},data));
        res.send(out);
    });
    child.stderr.on('err', function(err){
        err = err.toString().trim();
        out = JSON.stringify(err);
        res.send(out);
    });
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE);
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
