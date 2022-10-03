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
exports.id = "pages/parallelQueryPage";
exports.ids = ["pages/parallelQueryPage"];
exports.modules = {

/***/ "./pages/parallelQueryPage/index.js":
/*!******************************************!*\
  !*** ./pages/parallelQueryPage/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst getPost = async (query)=>{\n    console.log(query);\n    const data = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`http://localhost:5000/posts/${query.queryKey[1]}`);\n    return data;\n};\nconst Index = ()=>{\n    // Parallel Query\n    // useQuery([\"post\",1], getPost)\n    // useQuery([\"post\",2], getPost)\n    // useQuery([\"post\",3], getPost)\n    //Dynamic Parallel Query\n    (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueries)([\n        {\n            queryKey: [\n                \"post\",\n                1\n            ],\n            queryFn: getPost\n        },\n        {\n            queryKey: [\n                \"post\",\n                2\n            ],\n            queryFn: getPost\n        },\n        {\n            queryKey: [\n                \"post\",\n                3\n            ],\n            queryFn: getPost\n        }, \n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Parallel Queries Page\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\parallelQueryPage\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYXJhbGxlbFF1ZXJ5UGFnZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNBO0FBQ3VCO0FBRWpELE1BQU1JLE9BQU8sR0FBRyxPQUFPQyxLQUFLLEdBQUs7SUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7SUFDbEIsTUFBTUcsSUFBSSxHQUFHLE1BQU1QLGdEQUFTLENBQUMsQ0FBQyw0QkFBNEIsRUFBRUksS0FBSyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLE9BQU9GLElBQUk7QUFDZixDQUFDO0FBQ0QsTUFBTUcsS0FBSyxHQUFHLElBQU07SUFHaEIsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBRWhDLHdCQUF3QjtJQUN4QlQsdURBQVUsQ0FBQztRQUNQO1lBQUNRLFFBQVEsRUFBRTtnQkFBQyxNQUFNO0FBQUMsaUJBQUM7YUFBQztZQUFFRSxPQUFPLEVBQUNSLE9BQU87U0FBQztRQUN2QztZQUFDTSxRQUFRLEVBQUU7Z0JBQUMsTUFBTTtBQUFDLGlCQUFDO2FBQUM7WUFBRUUsT0FBTyxFQUFDUixPQUFPO1NBQUM7UUFDdkM7WUFBQ00sUUFBUSxFQUFFO2dCQUFDLE1BQU07QUFBQyxpQkFBQzthQUFDO1lBQUVFLE9BQU8sRUFBQ1IsT0FBTztTQUFDO0tBQzFDLENBQUM7SUFFRixxQkFDSSw4REFBQ1MsS0FBRztrQkFBQyx1QkFFTDs7Ozs7aUJBQU0sQ0FDUjtBQUNOLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcXVlcnktcHJhY3RpY2UvLi9wYWdlcy9wYXJhbGxlbFF1ZXJ5UGFnZS9pbmRleC5qcz8zZGIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHt1c2VRdWVyaWVzLCB1c2VRdWVyeX0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcblxyXG5jb25zdCBnZXRQb3N0ID0gYXN5bmMgKHF1ZXJ5KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVyeSlcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wb3N0cy8ke3F1ZXJ5LnF1ZXJ5S2V5WzFdfWApXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgICAvLyBQYXJhbGxlbCBRdWVyeVxyXG4gICAgLy8gdXNlUXVlcnkoW1wicG9zdFwiLDFdLCBnZXRQb3N0KVxyXG4gICAgLy8gdXNlUXVlcnkoW1wicG9zdFwiLDJdLCBnZXRQb3N0KVxyXG4gICAgLy8gdXNlUXVlcnkoW1wicG9zdFwiLDNdLCBnZXRQb3N0KVxyXG5cclxuICAgIC8vRHluYW1pYyBQYXJhbGxlbCBRdWVyeVxyXG4gICAgdXNlUXVlcmllcyhbXHJcbiAgICAgICAge3F1ZXJ5S2V5OiBbXCJwb3N0XCIsMV0sIHF1ZXJ5Rm46Z2V0UG9zdH0sXHJcbiAgICAgICAge3F1ZXJ5S2V5OiBbXCJwb3N0XCIsMl0sIHF1ZXJ5Rm46Z2V0UG9zdH0sXHJcbiAgICAgICAge3F1ZXJ5S2V5OiBbXCJwb3N0XCIsM10sIHF1ZXJ5Rm46Z2V0UG9zdH0sXHJcbiAgICBdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgUGFyYWxsZWwgUXVlcmllcyBQYWdlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJ1c2VRdWVyaWVzIiwidXNlUXVlcnkiLCJnZXRQb3N0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImdldCIsInF1ZXJ5S2V5IiwiSW5kZXgiLCJxdWVyeUZuIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/parallelQueryPage/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/parallelQueryPage/index.js"));
module.exports = __webpack_exports__;

})();