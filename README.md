# express-routes-viewer

Gather express routes in an express app, forked from [express-route-viewer](https://github.com/sleuthg/express-route-viewer).

## Basic Example

```
var getRoutes = require('express-routes-viewer');
getRoutes(app, function(routes) { // app is your express app object
    //routes
});
```

## Test

You need to install express locally to run tests.

```
npm install express
npm test
```

