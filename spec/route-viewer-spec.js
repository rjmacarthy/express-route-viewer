var getRoutes = require('../harness.js').getRoutes;
var app = require('../harness.js').app;

describe('routes test suite', function() {
    it('should be able to get routes', function() {
        getRoutes(app, function(routes) {
            expect(routes).toBeDefined();
            expect(routes).toEqual([{
                path: '/api/test',
                methods: {
                    get: true
                }
            }]);
        });
    });
});
