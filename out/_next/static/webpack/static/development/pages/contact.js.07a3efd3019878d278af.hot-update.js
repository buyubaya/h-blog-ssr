webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/HOCs/withBreadcrumb.js":
/*!*******************************************!*\
  !*** ./components/HOCs/withBreadcrumb.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/Breadcrumb */ "./components/common/Breadcrumb.js");

var _jsxFileName = "C:\\Users\\Hyu Lee\\Desktop\\h-porfolio\\h-blog-ssr\\components\\HOCs\\withBreadcrumb.js";



var withBreadcrumb = function withBreadcrumb(containerClassName) {
  return function (Comp) {
    return function (props, context) {
      // Comp.getInitialProps = (ctx) => {
      //     console.log(11111, ctx);
      // } 
      console.log('CHECK', Comp);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: containerClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_common_Breadcrumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
        match: props.match,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comp, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      })));
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withBreadcrumb);

/***/ })

})
//# sourceMappingURL=contact.js.07a3efd3019878d278af.hot-update.js.map