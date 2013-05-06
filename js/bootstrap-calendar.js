/*
 * bootstrap-calendar v0.1
 * Copyright (C) 2013 Fat Panda, LLC.
 * MIT Licensed.
 */
!function($, B, ns) {

  'use strict';

  var $window = $(window), $body = $('body'), prototypes = {};

  window.console = window.console || { log: function() {}, error: function() {} };

  prototypes[ns] = function($el, options) {
    this.$el = $el;
    this.init(options);
  };

  var DateCollection = Backbone.Collection.extend({
        
  });

  var CalendarView = Backbone.View.extend({

    initialize: function() {
      this.collection = new DateCollection();
    },

    render: function() {
      return this;
    }

  });

  prototypes[ns].prototype = {

    init: function(options) {
      this.$el.hide();
      this.$el.after( this.$cal = $('<div class="bootstrap-calendar-coontainer"></div>') );
      for(var i = 0; i < 6; i++) {
        this.$cal.append('<div class="month-row"><table class="week"></table><table class="grid"></table></div>');
      }
      this.$view = new CalendarView({ el: this.$cal }).render();
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

}(jQuery, Backbone, 'calendar');