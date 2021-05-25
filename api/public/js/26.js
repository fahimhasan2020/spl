(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inc_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inc/Layout */ "./resources/js/Pages/inc/Layout.vue");
/* harmony import */ var _Mixins_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Mixins/Dashboard */ "./resources/js/Mixins/Dashboard.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Layout: _inc_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mixins: [_Mixins_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {//
    };
  },
  props: {
    nagad: String,
    binance: String,
    bkash: String
  },
  computed: {//
  },
  created: function created() {//
  },
  mounted: function mounted() {//
  },
  methods: {
    enableTrustedBrowser: function enableTrustedBrowser(data) {
      if (data === 'enable') {
        this.$inertia.post('/admins/enable/trusted/browser/enable');
      } else if (data === 'disable') {
        this.$inertia.post('/admins/enable/trusted/browser/disable');
      }
    },
    updateSiteSettings: function updateSiteSettings() {
      this.$inertia.post('/admins/update/payment/detail', {
        'nagad': this.nagad,
        'bkash': this.bkash,
        'binance': this.binance
      });
    },
    deactivate: function deactivate() {
      var _this = this;

      this.$confirm("If you deactivate account , other admins can not message you or view your profile. You can reactivate by login again", "Warning", "warning").then(function () {
        _this.$inertia.post('/admins/account/deactivate');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.acts[data-v-0cc10e51]{\n    background-color: #f2f6f6;\n    padding-bottom: 15px;\n    padding-top: 15px;\n    margin-bottom: 10px;\n    box-shadow: 2px 2px 2px 2px #eee;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-toast-notification/dist/theme-default.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-toast-notification/dist/theme-default.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{transition:opacity 150ms ease-out}.fade-enter,.fade-leave-to{opacity:0}.notices{position:fixed;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1052;pointer-events:none}.notices .toast{display:inline-flex;align-items:center;animation-duration:150ms;margin:.5em 0;box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:.25em;pointer-events:auto;opacity:.92;color:#fff;min-height:3em;cursor:pointer}.notices .toast .toast-text{margin:0;padding:.5em 1em;word-break:break-all}.notices .toast .toast-icon{display:none}.notices .toast-success{background-color:#28a745}.notices .toast-info{background-color:#17a2b8}.notices .toast-warning{background-color:#ffc107}.notices .toast-error{background-color:#dc3545}.notices .toast-default{background-color:#343a40}.notices .toast.is-top,.notices .toast.is-bottom{align-self:center}.notices .toast.is-top-right,.notices .toast.is-bottom-right{align-self:flex-end}.notices .toast.is-top-left,.notices .toast.is-bottom-left{align-self:flex-start}.notices.is-top{flex-direction:column}.notices.is-bottom{flex-direction:column-reverse}.notices.is-custom-parent{position:absolute}@media screen and (max-width: 768px){.notices{padding:0;position:fixed !important}}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=template&id=0cc10e51&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=template&id=0cc10e51&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("layout", { attrs: { title: "Admin | Account settings" } }, [
    _c("div", { staticClass: "content-page" }, [
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12" }, [
              _c("div", { staticClass: "page-title-box" }, [
                _c("h4", { staticClass: "page-title" }, [_vm._v("Dashboard")]),
                _vm._v(" "),
                _c("ol", { staticClass: "breadcrumb p-0 m-0" }, [
                  _c("li", { attrs: { CLASS: "active" } }, [
                    _vm._v(
                      "\n                                    Account settings\n                                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "text-center text-primary" }, [
                  _vm._v("Notification settings")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "checkbox checkbox-success" }, [
                      _c("input", {
                        attrs: { id: "notification-sound", type: "checkbox" }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "notification-sound" } }, [
                        _vm._v(
                          "\n                                           Notification sound\n                                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "checkbox checkbox-success" }, [
                      _c("input", {
                        attrs: { id: "mail-recieve", type: "checkbox" }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "mail-recieve" } }, [
                        _vm._v(
                          "\n                                            Opt out of receiving mail\n                                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "checkbox checkbox-success" }, [
                      _c("input", {
                        attrs: { id: "user-notification", type: "checkbox" }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "user-notification" } }, [
                        _vm._v(
                          "\n                                            User notifications\n                                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("button", { staticClass: "btn btn-block btn-primary" }, [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Save")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "text-center text-primary" }, [
                  _vm._v("Message settings")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "checkbox checkbox-success" }, [
                      _c("input", {
                        attrs: { id: "message-sound", type: "checkbox" }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "message-sound" } }, [
                        _vm._v(
                          "\n                                            Message sound\n                                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "checkbox checkbox-success" }, [
                      _c("input", {
                        attrs: { id: "mail-message", type: "checkbox" }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "mail-message" } }, [
                        _vm._v(
                          "\n                                            Opt out of receiving messages mail\n                                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "checkbox checkbox-success" }, [
                      _c("input", {
                        attrs: { id: "service-message", type: "checkbox" }
                      }),
                      _vm._v(" "),
                      _c("label", { attrs: { for: "service-message" } }, [
                        _vm._v(
                          "\n                                            Service message\n                                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("button", { staticClass: "btn btn-block btn-primary" }, [
                      _c("i", { staticClass: "fa fa-save" }),
                      _vm._v(" Save")
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "text-center text-primary" }, [
                  _vm._v("Account Settings")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-8" }, [
                        _vm._v("Delete my account")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("a", { attrs: { href: "javascript:void(0)" } }, [
                          _vm._v("Delete account")
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-12",
                      staticStyle: {
                        "border-bottom": "1px solid #ccc",
                        "padding-bottom": "15px",
                        "padding-top": "15px"
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-8" }, [
                          _vm._v("Deactivate my account")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            _c(
                              "inertia-link",
                              {
                                attrs: { href: "javascript:void(0)" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.deactivate($event)
                                  }
                                }
                              },
                              [_vm._v("Deactivate account")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-12",
                      staticStyle: {
                        "border-bottom": "1px solid #ccc",
                        "padding-bottom": "15px",
                        "padding-top": "15px"
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-8" }, [
                          _vm._v("Help & info")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("a", { attrs: { href: "javascript:void(0)" } }, [
                            _vm._v("Account Info")
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-12",
                      staticStyle: {
                        "border-bottom": "1px solid #ccc",
                        "padding-bottom": "15px",
                        "padding-top": "15px"
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-8" }, [
                          _vm._v("Support")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-4" }, [
                          _c("a", { attrs: { href: "javascript:void(0)" } }, [
                            _vm._v("Account support")
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-12",
                      staticStyle: {
                        "padding-bottom": "15px",
                        "padding-top": "15px"
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-8" }, [
                          _vm._v("Trusted browser")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-4" },
                          [
                            _vm.$page.auth.user.browser === "0"
                              ? _c(
                                  "inertia-link",
                                  {
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.enableTrustedBrowser(
                                          "enable"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Enable")]
                                )
                              : _c(
                                  "inertia-link",
                                  {
                                    attrs: { href: "javascript:void(0)" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.enableTrustedBrowser(
                                          "disable"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Disable")]
                                )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "card-box" }, [
                _c("h4", { staticClass: "text-center text-primary" }, [
                  _vm._v("Payment Settings")
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row acts" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("p", [_vm._v("Binance Account")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.binance,
                          expression: "binance"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Binance account" },
                      domProps: { value: _vm.binance },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.binance = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row acts" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("p", [_vm._v("Nagad Account")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.nagad,
                          expression: "nagad"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Nagad Account" },
                      domProps: { value: _vm.nagad },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.nagad = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row acts" }, [
                  _c("div", { staticClass: "col-md-12" }, [
                    _c("p", [_vm._v("Bkash Account")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.bkash,
                          expression: "bkash"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { placeholder: "Bkash Account" },
                      domProps: { value: _vm.bkash },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.bkash = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-block btn-primary",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.updateSiteSettings($event)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-save" }), _vm._v(" Save")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Profile/AccountSettings.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Profile/AccountSettings.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettings_vue_vue_type_template_id_0cc10e51_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettings.vue?vue&type=template&id=0cc10e51&scoped=true& */ "./resources/js/Pages/Profile/AccountSettings.vue?vue&type=template&id=0cc10e51&scoped=true&");
/* harmony import */ var _AccountSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettings.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Profile/AccountSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AccountSettings_vue_vue_type_style_index_0_id_0cc10e51_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css& */ "./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AccountSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettings_vue_vue_type_template_id_0cc10e51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSettings_vue_vue_type_template_id_0cc10e51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0cc10e51",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Profile/AccountSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Profile/AccountSettings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Profile/AccountSettings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_0cc10e51_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=style&index=0&id=0cc10e51&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_0cc10e51_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_0cc10e51_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_0cc10e51_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_0cc10e51_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_style_index_0_id_0cc10e51_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/Profile/AccountSettings.vue?vue&type=template&id=0cc10e51&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Profile/AccountSettings.vue?vue&type=template&id=0cc10e51&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_template_id_0cc10e51_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSettings.vue?vue&type=template&id=0cc10e51&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Profile/AccountSettings.vue?vue&type=template&id=0cc10e51&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_template_id_0cc10e51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettings_vue_vue_type_template_id_0cc10e51_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);