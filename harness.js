// Install express into this package to get tests to work.

var init = require('./index.js'),
    superagent = require('superagent'),
    _ = require('lodash'),
    app = require('express')(),
    RouteFinder;

app.get('/api/test', function(req, res) {
    res.json({
        success: true
    });
})

app.get('/api/wonka', function(req, res) {
    res.json({
        success: false
    });
})

app.post('/api/test', function(req, res) {
    res.json({
        success: false
    });
});

app.put('/api/test', function(req, res) {
    res.json({
        success: false
    });
});

app.delete('/api/test', function(req, res) {
    res.json({
        success: false
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

function RouteFinderInstance(routes) {
    var self = this;
    self.countObj = {};

    _.forEach(_.map(routes, function(route) {
        return _.first(_.keys(route.methods));
    }), function(route) {
        self.countObj[route] = _.filter(_.map(routes, function(route) {
            return _.first(_.keys(route.methods));
        }), function(rt) {
            return route === rt
        }).length
    });

    self.gatherCounts = function(cb) {
        cb({ counts: self.countObj, routes: routes })
    }

    self.call = function(routes, method, path, counts) {
        switch (method) {
            case 'get':
                superagent[method]('http://127.0.0.1:3000' + path)
                    .end(function(err, res) {
                        self.gather(path, res.body, method, counts);
                    });
        }
    }

    self.gather = function() {
        var args = _.toArray(arguments);
        debugger;
    }
};

init(app, function(routes) {
    RouteFinder = new RouteFinderInstance(routes);
    RouteFinder.gatherCounts(function(res) {
        _.forEach(res.routes, function(r) {
            RouteFinder.call(res.routes, _.first(_.keys(r.methods)), r.path, res.counts);
        })
    });
});

