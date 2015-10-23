# express-route-viewer
Displays the routes of an ExpressJS app in a nice human-readable format.

## Install
```
npm install express-route-viewer
```

## Example

```
routeViewer = require('express-route-viewer');
var app = express();
app.get('/api/test', function(req,res) { res.send('Howdy'); };
routeViewer(app);
```
