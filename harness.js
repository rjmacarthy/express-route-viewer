var getRoutes = require('./index.js');
var app = require('express')();
app.get('/api/test', function(req, res) {
    res.send('Howdy');
});
exports.app = app;
exports.getRoutes = getRoutes;