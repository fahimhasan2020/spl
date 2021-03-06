(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/Mixins/Dashboard.js":
/*!******************************************!*\
  !*** ./resources/js/Mixins/Dashboard.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var $ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {//
    };
  },
  props: {//
  },
  computed: {//
  },
  created: function created() {//
  },
  mounted: function mounted() {
    !function ($) {
      "use strict";
      /**
       Portlet Widget
       */

      var Portlet = function Portlet() {
        this.$body = $("body"), this.$portletIdentifier = ".portlet", this.$portletCloser = '.portlet a[data-toggle="remove"]', this.$portletRefresher = '.portlet a[data-toggle="reload"]';
      }; //on init


      Portlet.prototype.init = function () {
        // Panel closest
        var $this = this;
        $(document).on("click", this.$portletCloser, function (ev) {
          ev.preventDefault();
          var $portlet = $(this).closest($this.$portletIdentifier);
          var $portlet_parent = $portlet.parent();
          $portlet.slideUp("slow", function () {
            $(this).remove();
          });

          if ($portlet_parent.children().length == 0) {
            $portlet_parent.slideUp("slow", function () {
              $(this).remove();
            });
          }
        }); // Panel Reload

        $(document).on("click", this.$portletRefresher, function (ev) {
          ev.preventDefault();
          var $portlet = $(this).closest($this.$portletIdentifier); // This is just a simulation, nothing is going to be reloaded

          $portlet.append('<div class="panel-disabled"><div class="portlet-loader"></div></div>');
          var $pd = $portlet.find('.panel-disabled');
          setTimeout(function () {
            $pd.fadeOut('fast', function () {
              $pd.remove();
            });
          }, 500 + 300 * (Math.random() * 5));
        });
      }, //
      $.Portlet = new Portlet(), $.Portlet.Constructor = Portlet;
    }(window.jQuery),
    /**
     * Components
     */
    function ($) {
      "use strict";

      var Components = function Components() {}; //initializing tooltip


      Components.prototype.initTooltipPlugin = function () {
        $.fn.tooltip && $('[data-toggle="tooltip"]').tooltip();
      }, //initializing popover
      Components.prototype.initPopoverPlugin = function () {
        $.fn.popover && $('[data-toggle="popover"]').popover();
      }, //initializing custom modal
      Components.prototype.initCustomModalPlugin = function () {
        $('[data-plugin="custommodal"]').on('click', function (e) {
          Custombox.open({
            target: $(this).attr("href"),
            effect: $(this).attr("data-animation"),
            overlaySpeed: $(this).attr("data-overlaySpeed"),
            overlayColor: $(this).attr("data-overlayColor")
          });
          e.preventDefault();
        });
      }, //initializing nicescroll
      Components.prototype.initNiceScrollPlugin = function () {
        //You can change the color of scroll bar here
        $.fn.niceScroll && $(".nicescroll").niceScroll({
          cursorcolor: '#98a6ad',
          cursorwidth: '6px',
          cursorborderradius: '5px'
        });
      }, //initializing Slimscroll
      Components.prototype.initSlimScrollPlugin = function () {
        //You can change the color of scroll bar here
        $.fn.slimScroll && $(".slimscroll-alt").slimScroll({
          position: 'right',
          size: "5px",
          color: '#98a6ad',
          wheelStep: 10
        });
      }, //range slider
      Components.prototype.initRangeSlider = function () {
        $.fn.slider && $('[data-plugin="range-slider"]').slider({});
      },
      /* -------------
       * Form related controls
       */
      //switch
      Components.prototype.initSwitchery = function () {
        $('[data-plugin="switchery"]').each(function (idx, obj) {
          new Switchery($(this)[0], $(this).data());
        });
      }, //multiselect
      Components.prototype.initMultiSelect = function () {
        if ($('[data-plugin="multiselect"]').length > 0) $('[data-plugin="multiselect"]').multiSelect($(this).data());
      },
      /* -------------
      * small charts related widgets
      */
      //peity charts
      Components.prototype.initPeityCharts = function () {
        $('[data-plugin="peity-pie"]').each(function (idx, obj) {
          var colors = $(this).attr('data-colors') ? $(this).attr('data-colors').split(",") : [];
          var width = $(this).attr('data-width') ? $(this).attr('data-width') : 20; //default is 20

          var height = $(this).attr('data-height') ? $(this).attr('data-height') : 20; //default is 20

          $(this).peity("pie", {
            fill: colors,
            width: width,
            height: height
          });
        }); //donut

        $('[data-plugin="peity-donut"]').each(function (idx, obj) {
          var colors = $(this).attr('data-colors') ? $(this).attr('data-colors').split(",") : [];
          var width = $(this).attr('data-width') ? $(this).attr('data-width') : 20; //default is 20

          var height = $(this).attr('data-height') ? $(this).attr('data-height') : 20; //default is 20

          $(this).peity("donut", {
            fill: colors,
            width: width,
            height: height
          });
        });
        $('[data-plugin="peity-donut-alt"]').each(function (idx, obj) {
          $(this).peity("donut");
        }); // line

        $('[data-plugin="peity-line"]').each(function (idx, obj) {
          $(this).peity("line", $(this).data());
        }); // bar

        $('[data-plugin="peity-bar"]').each(function (idx, obj) {
          var colors = $(this).attr('data-colors') ? $(this).attr('data-colors').split(",") : [];
          var width = $(this).attr('data-width') ? $(this).attr('data-width') : 20; //default is 20

          var height = $(this).attr('data-height') ? $(this).attr('data-height') : 20; //default is 20

          $(this).peity("bar", {
            fill: colors,
            width: width,
            height: height
          });
        });
      }, Components.prototype.initKnob = function () {
        $('[data-plugin="knob"]').each(function (idx, obj) {
          $(this).knob();
        });
      }, Components.prototype.initCircliful = function () {
        $('[data-plugin="circliful"]').each(function (idx, obj) {
          $(this).circliful();
        });
      }, Components.prototype.initCounterUp = function () {
        var delay = $(this).attr('data-delay') ? $(this).attr('data-delay') : 100; //default is 100

        var time = $(this).attr('data-time') ? $(this).attr('data-time') : 1200; //default is 1200

        $('[data-plugin="counterup"]').each(function (idx, obj) {
          $(this).counterUp({
            delay: 100,
            time: 1200
          });
        });
      }, //initilizing
      Components.prototype.init = function () {
        var $this = this;
        this.initTooltipPlugin(), this.initPopoverPlugin(), this.initNiceScrollPlugin(), this.initSlimScrollPlugin(), this.initCustomModalPlugin(), this.initRangeSlider(), this.initSwitchery(), this.initMultiSelect(), this.initPeityCharts(), this.initKnob(), this.initCircliful(), this.initCounterUp(), //creating portles
        $.Portlet.init();
      }, $.Components = new Components(), $.Components.Constructor = Components;
    }(window.jQuery), //initializing main application module
    function ($) {
      "use strict";

      $.Components.init();
    }(window.jQuery);
    !function ($) {
      "use strict";

      var Sidemenu = function Sidemenu() {
        this.$body = $("body"), this.$openLeftBtn = $(".open-left"), this.$menuItem = $("#sidebar-menu a");
      };

      Sidemenu.prototype.openLeftBar = function () {
        $("#wrapper").toggleClass("enlarged");
        $("#wrapper").addClass("forced");

        if ($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
          $("body").removeClass("fixed-left").addClass("fixed-left-void");
        } else if (!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
          $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }

        if ($("#wrapper").hasClass("enlarged")) {
          $(".left ul").removeAttr("style");
        } else {
          $(".subdrop").siblings("ul:first").show();
        }

        toggle_slimscroll(".slimscrollleft");
        $("body").trigger("resize");
      }, //menu item click
      Sidemenu.prototype.menuItemClick = function (e) {
        if (!$("#wrapper").hasClass("enlarged")) {
          if ($(this).parent().hasClass("has_sub")) {}

          if (!$(this).hasClass("subdrop")) {
            // hide any open menus and remove all other classes
            $("ul", $(this).parents("ul:first")).slideUp(350);
            $("a", $(this).parents("ul:first")).removeClass("subdrop");
            $("#sidebar-menu .pull-right i").removeClass("md-remove").addClass("md-add"); // open our new menu and add the open class

            $(this).next("ul").slideDown(350);
            $(this).addClass("subdrop");
            $(".pull-right i", $(this).parents(".has_sub:last")).removeClass("md-add").addClass("md-remove");
            $(".pull-right i", $(this).siblings("ul")).removeClass("md-remove").addClass("md-add");
          } else if ($(this).hasClass("subdrop")) {
            $(this).removeClass("subdrop");
            $(this).next("ul").slideUp(350);
            $(".pull-right i", $(this).parent()).removeClass("md-remove").addClass("md-add");
          }
        }
      }, //init sidemenu
      Sidemenu.prototype.init = function () {
        var $this = this;
        var ua = navigator.userAgent,
            event = ua.match(/iP/i) ? "touchstart" : "click"; //bind on click

        this.$openLeftBtn.on(event, function (e) {
          e.stopPropagation();
          $this.openLeftBar();
        }); // LEFT SIDE MAIN NAVIGATION

        $this.$menuItem.on(event, $this.menuItemClick); // NAVIGATION HIGHLIGHT & OPEN PARENT

        $("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
      }, //init Sidemenu
      $.Sidemenu = new Sidemenu(), $.Sidemenu.Constructor = Sidemenu;
    }(window.jQuery), function ($) {
      "use strict";

      var FullScreen = function FullScreen() {
        this.$body = $("body"), this.$fullscreenBtn = $("#btn-fullscreen");
      }; //turn on full screen
      // Thanks to http://davidwalsh.name/fullscreen


      FullScreen.prototype.launchFullscreen = function (element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen();
        }
      }, FullScreen.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }, //toggle screen
      FullScreen.prototype.toggle_fullscreen = function () {
        var $this = this;
        var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;

        if (fullscreenEnabled) {
          if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            $this.launchFullscreen(document.documentElement);
          } else {
            $this.exitFullscreen();
          }
        }
      }, //init sidemenu
      FullScreen.prototype.init = function () {
        var $this = this; //bind

        $this.$fullscreenBtn.on('click', function () {
          $this.toggle_fullscreen();
        });
      }, //init FullScreen
      $.FullScreen = new FullScreen(), $.FullScreen.Constructor = FullScreen;
    }(window.jQuery), //main app module
    function ($) {
      "use strict";

      var App = function App() {
        this.VERSION = "1.6.1", this.AUTHOR = "Coderthemes", this.SUPPORT = "coderthemes@gmail.com", this.pageScrollElement = "html, body", this.$body = $("body");
      }; //on doc load


      App.prototype.onDocReady = function (e) {
        FastClick.attach(document.body);
        resizefunc.push("initscrolls");
        resizefunc.push("changeptype");
        $('.animate-number').each(function () {
          $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-duration")));
        }); //RUN RESIZE ITEMS

        $(window).resize(debounce(resizeitems, 100));
        $("body").trigger("resize"); // right side-bar toggle

        $('.right-bar-toggle').on('click', function (e) {
          $('#wrapper').toggleClass('right-bar-enabled');
        });
      }, //initilizing
      App.prototype.init = function () {
        var $this = this; //document load initialization

        $(document).ready($this.onDocReady); //init side bar - left

        $.Sidemenu.init(); //init fullscreen

        $.FullScreen.init();
      }, $.App = new App(), $.App.Constructor = App;
    }(window.jQuery), //initializing main application module
    function ($) {
      "use strict";

      $.App.init();
    }(window.jQuery);
    /* ------------ some utility functions ----------------------- */
    //this full screen

    var toggle_fullscreen = function toggle_fullscreen() {};

    function executeFunctionByName(functionName, context
    /*, args */
    ) {
      var args = [].slice.call(arguments).splice(2);
      var namespaces = functionName.split(".");
      var func = namespaces.pop();

      for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
      }

      return context[func].apply(this, args);
    }

    var w, h, dw, dh;

    var changeptype = function changeptype() {
      w = $(window).width();
      h = $(window).height();
      dw = $(document).width();
      dh = $(document).height();

      if (jQuery.browser.mobile === true) {
        $("body").addClass("mobile").removeClass("fixed-left");
      }

      if (!$("#wrapper").hasClass("forced")) {
        if (w > 1024) {
          $("body").removeClass("smallscreen").addClass("widescreen");
          $("#wrapper").removeClass("enlarged");
        } else {
          $("body").removeClass("widescreen").addClass("smallscreen");
          $("#wrapper").addClass("enlarged");
          $(".left ul").removeAttr("style");
        }

        if ($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
          $("body").removeClass("fixed-left").addClass("fixed-left-void");
        } else if (!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
          $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }
      }

      toggle_slimscroll(".slimscrollleft");
    };

    var debounce = function debounce(func, wait, immediate) {
      var timeout, result;
      return function () {
        var context = this,
            args = arguments;

        var later = function later() {
          timeout = null;
          if (!immediate) result = func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(context, args);
        return result;
      };
    };

    function resizeitems() {
      if ($.isArray(resizefunc)) {
        for (i = 0; i < resizefunc.length; i++) {
          window[resizefunc[i]]();
        }
      }
    }

    function initscrolls() {
      if (jQuery.browser.mobile !== true) {
        //SLIM SCROLL
        $('.slimscroller').slimscroll({
          height: 'auto',
          size: "5px"
        });
        $('.slimscrollleft').slimScroll({
          height: 'auto',
          position: 'right',
          size: "5px",
          color: '#dcdcdc',
          wheelStep: 5
        });
      }
    }

    function toggle_slimscroll(item) {
      if ($("#wrapper").hasClass("enlarged")) {
        $(item).css("overflow", "inherit").parent().css("overflow", "inherit");
        $(item).siblings(".slimScrollBar").css("visibility", "hidden");
      } else {
        $(item).css("overflow", "hidden").parent().css("overflow", "hidden");
        $(item).siblings(".slimScrollBar").css("visibility", "visible");
      }
    } // === following js will activate the menu in left side bar based on url ====


    $(document).ready(function () {
      $("#sidebar-menu a").each(function () {
        var pageUrl = window.location.href.split(/[?#]/)[0];

        if (this.href == pageUrl) {
          $(this).addClass("active");
          $(this).parent().addClass("active"); // add active to li of the current link

          $(this).parent().parent().prev().addClass("active"); // add active class to an anchor

          $(this).parent().parent().prev().click(); // click the item to make it drop
        }
      });
    });
  },
  methods: {//
  }
});

/***/ })

}]);