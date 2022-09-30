"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst getPosts = async ()=>{\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:5000/posts\");\n    console.log(\"### data\", data);\n    return data;\n};\nfunction Home() {\n    const { data: posts , isLoading , isError , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(\"posts\", getPosts);\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error.message\n        }, void 0, false, {\n            fileName: \"/Users/kimjaehan/Desktop/ContentCuration/React/learn-react-query/react-query-practice/pages/index.js\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \" Loading ...\"\n            }, void 0, false, {\n                fileName: \"/Users/kimjaehan/Desktop/ContentCuration/React/learn-react-query/react-query-practice/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this) : posts?.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"id: \",\n                                post.id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kimjaehan/Desktop/ContentCuration/React/learn-react-query/react-query-practice/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"title: \",\n                                post.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kimjaehan/Desktop/ContentCuration/React/learn-react-query/react-query-practice/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"content: \",\n                                post.content\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kimjaehan/Desktop/ContentCuration/React/learn-react-query/react-query-practice/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"createdAt: \",\n                                post.createdAt\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kimjaehan/Desktop/ContentCuration/React/learn-react-query/react-query-practice/pages/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, post.id, true, {\n                    fileName: \"/Users/kimjaehan/Desktop/ContentCuration/React/learn-react-query/react-query-practice/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/kimjaehan/Desktop/ContentCuration/React/learn-react-query/react-query-practice/pages/index.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QztBQUNyQjtBQUNZO0FBQ047QUFFL0IsTUFBT0ksUUFBUSxHQUFHLFVBQVc7SUFFM0IsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNSixnREFBUyxDQUFDLDZCQUE2QixDQUFDO0lBRS9ETSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUVILElBQUksQ0FBQztJQUU3QixPQUFPQSxJQUFJLENBQUM7QUFFZCxDQUFDO0FBRWMsU0FBU0ksSUFBSSxHQUFHO0lBQzdCLE1BQU0sRUFBQ0osSUFBSSxFQUFDSyxLQUFLLEdBQUVDLFNBQVMsR0FBRUMsT0FBTyxHQUFFQyxLQUFLLEdBQUMsR0FBR1gscURBQVEsQ0FBQyxPQUFPLEVBQUNFLFFBQVEsQ0FBQztJQUUxRSxJQUFHUSxPQUFPLEVBQUM7UUFDVCxxQkFBTyw4REFBQ0UsS0FBRztzQkFBRUQsS0FBSyxDQUFDRSxPQUFPOzs7OztnQkFBTztJQUNuQyxDQUFDO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUNELEtBQUc7c0JBQ0RILFNBQVMsaUJBQ1IsOERBQUNHLEtBQUc7MEJBQUMsY0FBWTs7Ozs7b0JBQU0sR0FFdkJKLEtBQUssRUFBRU0sR0FBRyxDQUFDLENBQUNDLElBQUksaUJBQ2QsOERBQUNkLDJDQUFROztzQ0FDUCw4REFBQ1csS0FBRzs7Z0NBQUMsTUFBSTtnQ0FBQ0csSUFBSSxDQUFDQyxFQUFFOzs7Ozs7Z0NBQU87c0NBQ3hCLDhEQUFDSixLQUFHOztnQ0FBQyxTQUFPO2dDQUFDRyxJQUFJLENBQUNFLEtBQUs7Ozs7OztnQ0FBTztzQ0FDOUIsOERBQUNMLEtBQUc7O2dDQUFDLFdBQVM7Z0NBQUNHLElBQUksQ0FBQ0csT0FBTzs7Ozs7O2dDQUFPO3NDQUNsQyw4REFBQ04sS0FBRzs7Z0NBQUMsYUFBVztnQ0FBQ0csSUFBSSxDQUFDSSxTQUFTOzs7Ozs7Z0NBQU87O21CQUp6QkosSUFBSSxDQUFDQyxFQUFFOzs7O3dCQUtYLENBQ1g7Ozs7O2dCQUVBO3FCQUNMLENBQ0o7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcXVlcnktcHJhY3RpY2UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7dXNlUXVlcnl9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHtGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0ICBnZXRQb3N0cyA9IGFzeW5jICgpID0+e1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Bvc3RzXCIpXG5cbiAgY29uc29sZS5sb2coJyMjIyBkYXRhJywgZGF0YSlcblxuICByZXR1cm4gZGF0YTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7ZGF0YTpwb3N0cywgaXNMb2FkaW5nLCBpc0Vycm9yLCBlcnJvcn0gPSB1c2VRdWVyeShcInBvc3RzXCIsZ2V0UG9zdHMpXG5cbiAgaWYoaXNFcnJvcil7XG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxkaXY+IExvYWRpbmcgLi4uPC9kaXY+XG4gICAgICAgICk6KFxuICAgICAgICAgIHBvc3RzPy5tYXAoKHBvc3QpPT4oXG4gICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgPGRpdj5pZDoge3Bvc3QuaWR9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+dGl0bGU6IHtwb3N0LnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PmNvbnRlbnQ6IHtwb3N0LmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+Y3JlYXRlZEF0OiB7cG9zdC5jcmVhdGVkQXR9PC9kaXY+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsImF4aW9zIiwidXNlUXVlcnkiLCJGcmFnbWVudCIsImdldFBvc3RzIiwiZGF0YSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwicG9zdHMiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwiZXJyb3IiLCJkaXYiLCJtZXNzYWdlIiwibWFwIiwicG9zdCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();