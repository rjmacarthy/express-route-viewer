var app = require('express')();
var routeView = require('./index.js');

app.get('/api/me', function(req,res) {
  res.send('Thank you for trying');
});

routeView(app);

