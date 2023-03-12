const express = require('express');
const path = require('path');
var cp = require('child_process');
const app = express();
const port = process.env.PORT || 3001;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
app.use(express.static(DIST_DIR));
app.post('/login', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/login.sh', [req.body.user, req.body.password])
    child.stdout.on('data', function(data) {
        if (data.trim().includes('1')){
            res.send(req.body.user);
        }
        else{
            res.send('');
        }
    });
    child.stderr.on('err', function(err){
        res.send(err);
    });
});
app.post('/get/value', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/get_value.sh', [req.body.class, req.body.parameter])
    child.stdout.on('data', function(data) {
        res.send(data);
    });
    child.stderr.on('err', function(err){
        res.send(err);
    });
});
app.post('/get/params', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/get_params.sh', [req.body.class])
    child.stdout.on('data', function(data) {
        res.send(data);
    });
    child.stderr.on('err', function(err){
        res.send(err);
    });
});
app.get('/get/classes', (req, res) => {
    var child = cp.spawn('../../scripts/get_tunable_classes.sh')
    child.stdout.on('data', function(data){
        res.send(data);
    });
    child.stderr.on('err', function(err){
        res.send(err);
    });
});
app.post('/set/runtime', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/set_runtime_param.sh', [req.body.class, req.body.parameter, req.body.value])
    child.stdout.on('data', function(data) {
        res.send(data);
    });
    child.stderr.on('err', function(err){
        res.send(err);
    });
});
app.post('/set/persistent', function requestHandler(req, res) {
    var child = cp.spawn('../../scripts/set_persistent_param.sh', [req.body.class, req.body.parameter, req.body.value])
    child.stdout.on('data', function(data) {
        res.send(data);
    });
    child.stderr.on('err', function(err){
        res.send(err);
    });
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE);
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
