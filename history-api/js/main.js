window.onload = function() {
  'use strict';

  var el = document.getElementById('foo');
  var currentState = history.state;
  el.onclick = function(e) {
    alert(currentState);
  };

  // var stateObj = { foo: "bar" };
  // history.pushState(stateObj, "page 2", "bar.html");


}