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

Vue.directive('square', function(el, binding) {
  el.innerHTML = Math.pow(binding.value, 2);
});

new Vue ({
  el: '#app',
  data: {
    item: 144
  }
});