(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ui/Datatable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ui/Datatable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  components: {},
  mixins: [],
  data: function data() {
    return {
      isLoading: false,
      bulkAction: '',
      customChildControl: 'display-none',
      customEditChildControl: 'display-none',
      customChildList: [],
      customEditChildList: [],
      perPage: 10,
      activePagination: '',
      totalResults: this.permissions.total,
      searchBox: '',
      currentPage: this.permissions.current_page,
      orderBy: 'Newest',
      from: this.permissions.from,
      to: this.permissions.to,
      previous_page_url: this.permissions.prev_page_url,
      next_page_url: this.permissions.next_page_url,
      last_page: this.permissions.last_page,
      checkedValues: [],
      multipleSelect: false,
      ptid: 1,
      permissionOutput: this.permissions,
      permissionForm: {
        name: '',
        type: '',
        custom: '',
        customs: []
      },
      permissionFormError: {
        name: '',
        type: '',
        custom: ''
      },
      permissionEditForm: {
        name: '',
        id: '',
        type: '',
        custom: '',
        customs: []
      },
      permissionEditFormError: {
        name: '',
        type: '',
        custom: ''
      }
    };
  },
  props: {
    roles: Object
  },
  computed: {//
  },
  created: function created() {//
  },
  mounted: function mounted() {//
  },
  methods: {
    addPermission: function addPermission() {
      var _this = this;

      if (this.permissionForm.name === '' || this.permissionForm.type === '') {
        if (this.permissionForm.name === '') {
          this.permissionFormError.name = 'Name field required';
        } else {
          this.permissionFormError.name = '';
        }

        if (this.permissionForm.type === '') {
          this.permissionFormError.type = 'Select a type';
        } else {
          this.permissionFormError.type = '';
        }
      } else {
        if (this.permissionForm.type === 'custom' && this.customChildList.length < 1) {
          return this.permissionFormError.custom = 'Add child permissions first';
        }

        if (this.permissionForm.type === 'custom' && this.customChildList.length > 0) {
          this.permissionForm.customs = this.customChildList;
        }

        this.permissionFormError.name = '';
        this.permissionFormError.type = '';
        this.permissionFormError.custom = '';
        this.$inertia.post('/admins/admin-permission', this.permissionForm).then(function () {
          _this.permissionForm.name = '';
          _this.permissionForm.type = '';
          _this.permissionForm.custom = '';
          _this.customChildControl = 'display-none';
          _this.customChildList = [];

          _this.dataTable();
        });
      }
    },
    deletePermission: function deletePermission(id) {
      var _this2 = this;

      this.$confirm("Are you sure to delete the permission?", "Warning", "warning").then(function () {
        _this2.$inertia["delete"]('/admins/admin-permission/' + id, {
          replace: false,
          preserveState: true,
          preserveScroll: true,
          only: []
        }).then(function () {
          _this2.dataTable();
        });
      });
    },
    permissionPopUp: function permissionPopUp(permission) {
      this.permissionEditForm.id = permission.id;
      this.permissionEditForm.name = permission.name;
      this.permissionEditForm.type = permission.type;

      if (this.permissionEditForm.type === 'custom') {
        this.customEditChildControl = '';
      } else {
        this.customEditChildControl = 'display-none';
      }

      if (permission.custom !== null) {
        console.log(permission);
        this.customEditChildList = permission.custom.split(", ");
      } else {
        this.customEditChildList = [];
      }
    },
    permissionEditSubmit: function permissionEditSubmit() {
      var _this3 = this;

      if (this.permissionEditForm.name === '' || this.permissionEditForm.type === '') {
        if (this.permissionEditForm.name === '') {
          this.permissionEditFormError.name = 'Name field required';
        } else {
          this.permissionEditFormError.name = '';
        }

        if (this.permissionEditForm.type === '') {
          this.permissionEditFormError.type = 'Select a type';
        } else {
          this.permissionEditFormError.type = '';
        }
      } else {
        if (this.permissionEditForm.type === 'custom' && this.customEditChildList.length < 1) {
          return this.permissionEditFormError.custom = 'Add child permissions first';
        }

        if (this.permissionEditForm.type === 'custom' && this.customEditChildList.length > 0) {
          this.permissionEditForm.customs = this.customEditChildList;
        }

        this.permissionEditFormError.name = '';
        this.permissionEditFormError.type = '';
        this.permissionEditFormError.custom = '';
        this.$inertia.put('/admins/admin-permission/' + this.permissionEditForm.id, this.permissionEditForm).then(function () {
          _this3.permissionEditForm.name = '';
          _this3.permissionEditForm.type = '';
          _this3.permissionEditForm.custom = '';
          _this3.customEditChildControl = 'display-none';
          _this3.customEditChildList = [];
          $("[data-dismiss=modal]").trigger({
            type: "click"
          });

          _this3.dataTable();
        });
      }
    },
    setValue: function setValue(value) {
      this.checkedValues.push(value.id);
    },
    checkDetail: function checkDetail() {
      if (this.multipleSelect) {
        this.checkedValues = [];
        this.permissionOutput.data.forEach(this.setValue);
      } else {
        this.checkedValues = [];
      }
    },
    checkDetails: function checkDetails() {
      this.multipleSelect = this.checkedValues.length === this.permissionOutput.data.length;
    },
    multipleDelete: function multipleDelete() {
      var _this4 = this;

      this.$confirm("Are you sure to delete the permissions?", "Warning", "warning").then(function () {
        if (_this4.checkedValues.length > 0) {
          _this4.$inertia["delete"]('/admins/admin-permission/multiple/' + _this4.checkedValues, {
            replace: false,
            preserveState: true,
            preserveScroll: false,
            only: []
          }).then(function () {
            _this4.multipleSelect = false;
            _this4.checkedValues = [];

            _this4.dataTable();
          });
        } else {
          _this4.$toast.open({
            message: 'No items selected',
            type: "error",
            position: "top-right",
            duration: 5000,
            dismissible: true
          });
        }
      });
    },
    allDelete: function allDelete() {
      var _this5 = this;

      this.$confirm("Are you sure to delete all permission?", "Warning", "warning").then(function () {
        _this5.$inertia.post('/admins/admin-permission/delete-all', {
          replace: false,
          preserveState: true,
          preserveScroll: true,
          only: []
        }).then(function () {
          _this5.dataTable();
        });
      });
    },
    permissionTypeTraker: function permissionTypeTraker() {
      if (this.permissionForm.type === 'custom') {
        this.customChildControl = '';
      } else {
        this.customChildControl = 'display-none';
      }
    },
    permissionEditTypeTraker: function permissionEditTypeTraker() {
      if (this.permissionEditForm.type === 'custom') {
        this.customEditChildControl = '';
      } else {
        this.customEditChildControl = 'display-none';
      }
    },
    customChildAppend: function customChildAppend() {
      if (this.permissionForm.custom === '') {
        this.permissionFormError.custom = 'Enter child permission name';
      } else {
        if (this.customChildList.includes(this.permissionForm.custom)) {
          this.permissionFormError.custom = 'You have added this already';
        } else {
          this.permissionFormError.custom = '';
          this.customChildList.push(this.permissionForm.custom);
          this.permissionForm.custom = '';
        }
      }
    },
    removeCustom: function removeCustom(index) {
      return this.customChildList.splice(index, 1);
    },
    customEditChildAppend: function customEditChildAppend() {
      if (this.permissionEditForm.custom === '') {
        this.permissionFormError.custom = 'Enter child permission name';
      } else {
        if (this.customEditChildList.includes(this.permissionEditForm.custom)) {
          this.permissionEditFormError.custom = 'You have added this already';
        } else {
          this.permissionEditFormError.custom = '';
          this.customEditChildList.push(this.permissionEditForm.custom);
          this.permissionEditForm.custom = '';
        }
      }
    },
    removeEditCustom: function removeEditCustom(index) {
      return this.customEditChildList.splice(index, 1);
    },
    trackBulkAction: function trackBulkAction() {
      if (this.bulkAction === 'print') {
        var url = '/admins/admin-permission/print/export';
        var win = window.open(url, '_blank');
        win.focus();
      } else if (this.bulkAction === 'pdf') {
        url = '/admins/admin-permission/pdf/export';
        win = window.open(url, '_blank');
        win.focus();
      } else if (this.bulkAction === 'refresh') {
        this.dataTable();
      } else if (this.bulkAction === 'excel') {
        url = '/admins/admin-permission/excel/export';
        win = window.open(url, '_blank');
        win.focus();
      } else if (this.bulkAction === 'csv') {
        url = '/admins/admin-permission/csv/export';
        win = window.open(url, '_blank');
        win.focus();
      } else if (this.bulkAction === 'delete-selected') {
        this.multipleDelete();
      } else if (this.bulkAction === 'delete-all') {
        this.allDelete();
      }
    },
    //datatable methods
    dataTable: function dataTable() {
      var _this6 = this;

      this.isLoading = true; //this.$loading(true);

      axios.get('/admins/admin-permission/', {
        params: {
          page: this.currentPage,
          perPage: this.perPage,
          search: this.searchBox,
          orderBy: this.orderBy
        }
      }).then(function (response) {
        _this6.permissionOutput = response.data;
        _this6.totalResults = response.data.total;
        _this6.from = response.data.from;
        _this6.to = response.data.to;
        _this6.currentPage = response.data.current_page;
        _this6.previous_page_url = response.data.prev_page_url;
        _this6.next_page_url = response.data.next_page_url;
        _this6.last_page = response.data.last_page;
        _this6.isLoading = false; // this.$loading(false);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    nextPage: function nextPage(page) {
      this.currentPage = page;
      this.dataTable();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ui/Datatable.vue?vue&type=template&id=7ac5f612&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/ui/Datatable.vue?vue&type=template&id=7ac5f612& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", [
      _c("div", { staticStyle: { float: "right", "margin-top": "10px" } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.searchBox,
              expression: "searchBox"
            }
          ],
          staticClass: "form-control",
          staticStyle: { width: "200px" },
          attrs: { type: "text", placeholder: "search" },
          domProps: { value: _vm.searchBox },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchBox = $event.target.value
              },
              _vm.dataTable
            ]
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "form-group",
          staticStyle: {
            float: "right",
            "margin-top": "10px",
            width: "250px",
            display: "flex"
          }
        },
        [
          _c(
            "label",
            {
              staticStyle: { "margin-top": "10px" },
              attrs: { for: "orderBy" }
            },
            [_vm._v("Order by")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.orderBy,
                  expression: "orderBy"
                }
              ],
              staticClass: "form-control",
              staticStyle: { width: "100px", "margin-left": "5px" },
              attrs: { name: "result-perpage", id: "orderBy" },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.orderBy = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.dataTable
                ]
              }
            },
            [
              _c("option", { attrs: { value: "Newest" } }, [_vm._v("Latest")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Oldest" } }, [_vm._v("Oldest")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Name" } }, [_vm._v("Name")])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "form-group",
          staticStyle: { float: "right", "margin-top": "10px", width: "200px" }
        },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.bulkAction,
                  expression: "bulkAction"
                }
              ],
              staticClass: "form-control",
              staticStyle: { width: "140px", "margin-left": "5px" },
              attrs: { name: "result-perpage", id: "bulkAction" },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.bulkAction = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.trackBulkAction
                ]
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Bulk Action")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "refresh" } }, [
                _vm._v("Refresh")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "print" } }, [_vm._v("Print")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "delete-selected" } }, [
                _vm._v("Delete selected")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "delete-all" } }, [
                _vm._v("Delete all")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "csv" } }, [_vm._v("Export csv")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "excel" } }, [
                _vm._v("Export excel")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "pdf" } }, [_vm._v("Export pdf")])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "form-group",
          staticStyle: {
            float: "left",
            "margin-top": "10px",
            width: "250px",
            display: "flex"
          }
        },
        [
          _c(
            "label",
            {
              staticStyle: { "margin-top": "10px" },
              attrs: { for: "per-page" }
            },
            [_vm._v("Per page")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.perPage,
                  expression: "perPage"
                }
              ],
              staticClass: "form-control",
              staticStyle: { width: "100px", "margin-left": "5px" },
              attrs: { name: "result-perpage", id: "per-page" },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.perPage = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.dataTable
                ]
              }
            },
            [
              _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20" } }, [_vm._v("20")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "30" } }, [_vm._v("30")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "40" } }, [_vm._v("40")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "50" } }, [_vm._v("50")])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm.isLoading
      ? _c(
          "div",
          {
            staticStyle: {
              height: "40px",
              width: "150px",
              background: "white",
              position: "absolute",
              top: "30%",
              left: "50%",
              "text-align": "center",
              "padding-top": "3px",
              "font-family": "monospace",
              "font-size": "18px",
              "box-shadow": "1px 1px 7px 2px #ccc"
            }
          },
          [_vm._v("Loading...")]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "table",
      { staticClass: "table table-bordered table-responsive table-dark" },
      [
        _c("thead", [
          _c("tr", [
            _c(
              "th",
              { staticStyle: { width: "30px" }, attrs: { scope: "col" } },
              [
                _c("div", { staticClass: "checkbox checkbox-primary" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.multipleSelect,
                        expression: "multipleSelect"
                      }
                    ],
                    attrs: { id: "checkbox00", type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.multipleSelect)
                        ? _vm._i(_vm.multipleSelect, null) > -1
                        : _vm.multipleSelect
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.multipleSelect,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.multipleSelect = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.multipleSelect = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.multipleSelect = $$c
                          }
                        },
                        _vm.checkDetail
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: "checkbox00" } })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "th",
              {
                staticStyle: { "vertical-align": "middle" },
                attrs: { scope: "col" }
              },
              [_vm._v("Name")]
            ),
            _vm._v(" "),
            _c(
              "th",
              {
                staticStyle: { width: "100px", "vertical-align": "middle" },
                attrs: { scope: "col" }
              },
              [_vm._v("Type")]
            ),
            _vm._v(" "),
            _c(
              "th",
              {
                staticStyle: { width: "55px", "vertical-align": "middle" },
                attrs: { scope: "col" }
              },
              [_vm._v("Action")]
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.permissionOutput.data, function(permission) {
            return _c("tr", { key: permission.id }, [
              _c("th", [
                _c("div", { staticClass: "checkbox checkbox-primary" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.checkedValues,
                        expression: "checkedValues"
                      }
                    ],
                    attrs: { id: permission.id, type: "checkbox" },
                    domProps: {
                      value: permission.id,
                      checked: Array.isArray(_vm.checkedValues)
                        ? _vm._i(_vm.checkedValues, permission.id) > -1
                        : _vm.checkedValues
                    },
                    on: {
                      change: [
                        function($event) {
                          var $$a = _vm.checkedValues,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = permission.id,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.checkedValues = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.checkedValues = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.checkedValues = $$c
                          }
                        },
                        _vm.checkDetails
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _c("label", { attrs: { for: permission.id } })
                ])
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                _vm._v(_vm._s(permission.name))
              ]),
              _vm._v(" "),
              _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                _vm._v(_vm._s(permission.type))
              ]),
              _vm._v(" "),
              _c(
                "td",
                { staticStyle: { "vertical-align": "middle" } },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass: "text-danger",
                      attrs: {
                        href: "#",
                        "data-toggle": "tooltip",
                        "data-placement": "top",
                        title: "Delete info"
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.deletePermission(permission.id)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-trash" })]
                  ),
                  _vm._v("\n                     "),
                  _c(
                    "a",
                    {
                      staticClass: "text-warning",
                      attrs: {
                        href: "#",
                        "data-toggle": "tooltip",
                        "data-placement": "top",
                        title: "Edit info"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-pencil",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#exampleModals"
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.permissionPopUp(permission)
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              )
            ])
          }),
          0
        )
      ]
    ),
    _vm._v(" "),
    _vm.permissionOutput.data.length < 1
      ? _c("div", { staticClass: "text-center" }, [
          _c("img", {
            attrs: {
              src: __webpack_require__(/*! ../../../../public/admin/assets/images/empty.png */ "./public/admin/assets/images/empty.png"),
              height: "150px",
              width: "150px",
              alt: "no content"
            }
          }),
          _vm._v(" "),
          _c("h4", [_vm._v("No content available")])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.permissionOutput.data.length > 0
      ? _c("span", { staticStyle: { "margin-top": "20px", float: "left" } }, [
          _vm._v(
            "From " + _vm._s(_vm.from) + " to " + _vm._s(_vm.to) + " showing: "
          ),
          _c("b", [_vm._v(_vm._s(_vm.totalResults) + " results")])
        ])
      : _vm._e(),
    _vm._v(" "),
    this.totalResults > 10
      ? _c(
          "nav",
          {
            staticClass: "text-right",
            attrs: { "aria-label": "Page navigation example" }
          },
          [
            _c("ul", { staticClass: "pagination justify-content-end" }, [
              _vm.currentPage > 5 && _vm.last_page > 10
                ? _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(1)
                          }
                        }
                      },
                      [_vm._v("First Page")]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.previous_page_url
                ? _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(_vm.currentPage - 1)
                          }
                        }
                      },
                      [_vm._v("Previous")]
                    )
                  ])
                : _c("li", { staticClass: "page-item disabled" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "javascript:void(0);" }
                      },
                      [_vm._v("Previous")]
                    )
                  ]),
              _vm._v(" "),
              _vm.last_page > 3 && _vm.currentPage <= _vm.last_page
                ? _c("li", { staticClass: "page-item active" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(_vm.currentPage)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.currentPage))]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.last_page > 3 && _vm.currentPage + 1 <= _vm.last_page
                ? _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(_vm.currentPage + 1)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.currentPage + 1))]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.last_page > 3 && _vm.currentPage + 2 <= _vm.last_page
                ? _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(_vm.currentPage + 2)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.currentPage + 2))]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.last_page > 3 && _vm.currentPage + 3 <= _vm.last_page
                ? _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(_vm.currentPage + 3)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.currentPage + 3))]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.last_page > 3 && _vm.currentPage + 4 <= _vm.last_page
                ? _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(_vm.currentPage + 4)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.currentPage + 4))]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.next_page_url
                ? _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(_vm.currentPage + 1)
                          }
                        }
                      },
                      [_vm._v("Next")]
                    )
                  ])
                : _c("li", { staticClass: "page-item disabled" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "javascript:void(0);" }
                      },
                      [_vm._v("Next")]
                    )
                  ]),
              _vm._v(" "),
              _vm.last_page > 10
                ? _c("li", { staticClass: "page-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.nextPage(_vm.last_page)
                          }
                        }
                      },
                      [_vm._v("Last Page")]
                    )
                  ])
                : _vm._e()
            ])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModals",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.permissionEditForm.name,
                          expression: "permissionEditForm.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.permissionEditForm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.permissionEditForm,
                            "name",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "text-danger text-center mt-2" },
                      [_vm._v(_vm._s(_vm.permissionEditFormError.name))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-6" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.permissionEditForm.type,
                            expression: "permissionEditForm.type"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { name: "type", id: "typeEdit" },
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.permissionEditForm,
                                "type",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            },
                            _vm.permissionEditTypeTraker
                          ]
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Select type")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "resource" } }, [
                          _vm._v("Resource")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "single" } }, [
                          _vm._v("Single")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "custom" } }, [
                          _vm._v("Custom")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "text-danger text-center mt-2" },
                      [_vm._v(_vm._s(_vm.permissionEditFormError.type))]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-md-12",
                      class: _vm.customEditChildControl
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "form-group",
                          staticStyle: { display: "flex", "margin-top": "5px" }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.permissionEditForm.custom,
                                expression: "permissionEditForm.custom"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "enter child permission name"
                            },
                            domProps: { value: _vm.permissionEditForm.custom },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.permissionEditForm,
                                  "custom",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: { click: _vm.customEditChildAppend }
                            },
                            [_vm._v("Add")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "text-danger text-center mt-2" },
                        [
                          _vm._v(
                            _vm._s(_vm.permissionEditFormError.custom) +
                              "\n                                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ol",
                        _vm._l(_vm.customEditChildList, function(cl, index) {
                          return _c("li", { key: index }, [
                            _c("i", {
                              staticClass: "fa fa-remove text-danger",
                              on: {
                                click: function($event) {
                                  return _vm.removeEditCustom(index)
                                }
                              }
                            }),
                            _vm._v(
                              " \n                                        " +
                                _vm._s(cl) +
                                "\n                                    "
                            )
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button", "data-dismiss": "modal" }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.permissionEditSubmit($event)
                      }
                    }
                  },
                  [_vm._v("Save")]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabels" } },
        [_vm._v("Edit Permission")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./public/admin/assets/images/empty.png":
/*!**********************************************!*\
  !*** ./public/admin/assets/images/empty.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/empty.png?9b37315e3cfb40183c0203603499ea48";

/***/ }),

/***/ "./resources/js/Pages/ui/Datatable.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/ui/Datatable.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Datatable_vue_vue_type_template_id_7ac5f612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datatable.vue?vue&type=template&id=7ac5f612& */ "./resources/js/Pages/ui/Datatable.vue?vue&type=template&id=7ac5f612&");
/* harmony import */ var _Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Datatable.vue?vue&type=script&lang=js& */ "./resources/js/Pages/ui/Datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Datatable_vue_vue_type_template_id_7ac5f612___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Datatable_vue_vue_type_template_id_7ac5f612___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/ui/Datatable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/ui/Datatable.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/ui/Datatable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ui/Datatable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/ui/Datatable.vue?vue&type=template&id=7ac5f612&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/ui/Datatable.vue?vue&type=template&id=7ac5f612& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_7ac5f612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Datatable.vue?vue&type=template&id=7ac5f612& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/ui/Datatable.vue?vue&type=template&id=7ac5f612&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_7ac5f612___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Datatable_vue_vue_type_template_id_7ac5f612___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);