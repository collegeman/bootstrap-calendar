/*
 * bootstrap-calendar v0.1
 * Copyright (C) 2013 Fat Panda, LLC.
 * MIT Licensed.
 */
!function($, ns) {

  var $window = $(window), $body = $('body'), prototypes = {};

  window.console = window.console || { log: function() {}, error: function() {} };

  var prototypes[ns] = function($el, options) {
    this.$el = $el;
    this.init(options);
  };

  prototypes[ns].prototype = {

    init: function(options) {
      
    }

  };  

  $.fn[ns] = function(fn /*, ... */) {
    var args = Array.prototype.slice.apply(arguments);
    return this.each(function(i, el) {
      var $el = $(el), obj = $el.data(ns);
      if (!obj) {
        $el.data(ns, obj = new prototypes[ns]($el, typeof fn !== "string" ? fn : {}));
      }
      if (typeof fn === "string") {
        obj[fn].apply(obj, args.slice(1));
      }
    });
  };

  $('[data-ui="'+ns+'"]').each(function() {
    $(this)[ns]();
  });

  /*
  $.valHooks['textarea'] = {
    set: function(el, val) {
      var $el = $(el);
      if ($el.data(ns)) {
        $el.data(ns).val(val);
      } else {
        el.value = val;
      }
    },
    get: function(el) {
      var $el = $(el);
      if ($el.data(ns)) {
        return $el.data(ns).val();
      } else {
        return el.value;
      }
    }
  };
  */

}(jQuery, 'calendar');