Vue.directive('my-directive', {
  bind: function() {
    // do the preparation work on element binding
  }, 
  update: function() {
    // do something based on the updated value
  },
  unbind: function() {
    // do the clean up work
  }
});