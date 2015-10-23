/**
 * @arg app Express application object
 */

module.exports = function(app) {
  var stack = app._router.stack;
  printStack(stack,'');
};

function printStack(stack,prepend) {
  var something = false;
  for (var i=0; i<stack.length; i++) {
    //console.log(stack[i]);
    var S = stack[i];
    if (S.route) {
      printRoute(S.route,prepend);
      something = true;
    }
    if (S.method) {
      printMethod(S,prepend);
      something = true;
    }
  }
  if (something) console.log();
}

function printRoute(route,prepend) {
  if (route) {
    if (route.path) {
      console.log(prepend + route.path);
    }
    if (route.stack) {
      printStack(route.stack,prepend+'  -- ');
    }
  }
}

function printMethod(M,prepend) {
  var str = prepend + M.method + ' (' + M.name + ')';
  console.log(str);
}