/**
 * @arg app Express application object
 */

module.exports = function(app) {
  var stack = app._router.stack;
  printStack(stack,'');
};

function printStack(stack,prepend) {
  for (var i=0; i<stack.length; i++) {
    printRoute(stack[i].route,prepend);
    printMethod(stack[i].method,prepend);
  }
}

function printRoute(route,prepend) {
  if (route) {
    if (route.path) {
      console.log(prepend + route.path);
    }
    if (route.stack) {
      printStack(route.stack,prepend+'-- ');
    }
  }
}

function printMethod(method,prepend) {
  if (method) {
    console.log(prepend + method);
  }
}