webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/common/Breadcrumb.js":
/*!*****************************************!*\
  !*** ./components/common/Breadcrumb.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _constants_RouterUrls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/RouterUrls */ "./constants/RouterUrls.js");






var _jsxFileName = "C:\\Users\\Hyu Lee\\Desktop\\h-porfolio\\h-blog-ssr\\components\\common\\Breadcrumb.js";




var ROUTER_DATA = [{
  test: /a/
}];

var Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Breadcrumb, _React$Component);

  function Breadcrumb() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Breadcrumb);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Breadcrumb).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Breadcrumb, [{
    key: "getBreadCrumb",
    value: function getBreadCrumb(path) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Home';
      var tmp = [];
      var currentPath = path;

      while (currentPath !== '') {
        currentPath = _constants_RouterUrls__WEBPACK_IMPORTED_MODULE_9__["default"].find(function (item) {
          return item.path === currentPath;
        });

        if (currentPath) {
          tmp.unshift(currentPath.label);
          currentPath = currentPath.path.split('/').slice(0, -1).join('/');
        } else {
          break;
        }
      }

      tmp.unshift(prefix);
      return tmp;
    }
  }, {
    key: "render",
    value: function render() {
      var path = this.props.match && this.props.match.path;
      var bc = this.getBreadCrumb(path); // console.log(22222, this.props);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "breadcrumb-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, bc && bc.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_0___default.a.Item, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, item);
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pageHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pageTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, bc.pop())));
    }
  }]);

  return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ })

})
//# sourceMappingURL=contact.js.9c63246d96523ddd6b02.hot-update.js.map