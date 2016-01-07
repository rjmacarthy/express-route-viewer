var _ = require('lodash');

module.exports = function(app, cb) {
    var stack = app._router.stack;
    gatherRoutes(stack, cb);
};

function gatherRoutes(stack, cb) {
    var routes = _.map(stack, function(s) {
        if (s.route && s.route.path && s.route.methods) {
            return {
                path: s.route.path,
                methods: s.route.methods
            };
        }
    });
    cb(_.filter(routes));
}
