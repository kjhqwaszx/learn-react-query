"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar getPosts = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n        var data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:5000/posts\")\n                    ];\n                case 1:\n                    data = _state.sent().data;\n                    console.log(\"### data\", data);\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function getPosts() {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(\"posts\", getPosts, {\n        staleTime: 5 * 1000,\n        refetchOnMount: true,\n        refetchOnWindowFocus: true\n    }), posts = ref.data, isLoading = ref.isLoading, isError = ref.isError, error = ref.error;\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error.message\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/parallelQueryPage\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            style: {\n                                marginRight: \"1rem\"\n                            },\n                            children: \" Parallel Queries Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/dependentQueryPage\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            style: {\n                                marginRight: \"1rem\"\n                            },\n                            children: \" Dependent Queries Page\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    margin: \"10px\"\n                },\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \" Loading ...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, this) : posts === null || posts === void 0 ? void 0 : posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"id: \",\n                                    post.id\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"title: \",\n                                    post.title\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"content: \",\n                                    post.content\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"createdAt: \",\n                                    post.createdAt\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\c\\\\Desktop\\\\Study\\\\React\\\\learn-react-query\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"fAibht0zUggMMI7vZWb0bgRtu+w=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUE4QztBQUNyQjtBQUNZO0FBQ047QUFDRjtBQUU3QixJQUFPSyxRQUFRO2VBQUcsK0ZBQVc7WUFDbkJDLElBQUk7Ozs7b0JBQUs7O3dCQUFNTCxnREFBUyxDQUFDLDZCQUE2QixDQUFDO3NCQUFBOztvQkFBekQsSUFBTSxHQUFLLGFBQThDLENBQXZESyxJQUFJLENBQW1EO29CQUMvREUsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFSCxJQUFJLENBQUM7b0JBRTdCOzt3QkFBT0EsSUFBSTtzQkFBQzs7O0lBQ2QsQ0FBQztvQkFMTUQsUUFBUTs7O0dBS2Q7QUFFYyxTQUFTSyxJQUFJLEdBQUc7OztJQUM3QixJQUFnRFIsR0FJOUMsR0FKOENBLHFEQUFRLENBQUMsT0FBTyxFQUFDRyxRQUFRLEVBQUM7UUFDeEVNLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSTtRQUNuQkMsY0FBYyxFQUFFLElBQUk7UUFDcEJDLG9CQUFvQixFQUFFLElBQUk7S0FDM0IsQ0FBQyxFQUpLUCxLQUFVLEdBQStCSixHQUk5QyxDQUpLSSxJQUFJLEVBQVFTLFNBQVMsR0FBb0JiLEdBSTlDLENBSmlCYSxTQUFTLEVBQUVDLE9BQU8sR0FBV2QsR0FJOUMsQ0FKNEJjLE9BQU8sRUFBRUMsS0FBSyxHQUFJZixHQUk5QyxDQUpxQ2UsS0FBSztJQU01QyxJQUFHRCxPQUFPLEVBQUM7UUFDVCxxQkFBTyw4REFBQ0UsS0FBRztzQkFBRUQsS0FBSyxDQUFDRSxPQUFPOzs7OztnQkFBTztJQUNuQyxDQUFDO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDQyxLQUFHO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUNDLE9BQU8sRUFBRSxNQUFNO2lCQUFDOztrQ0FDM0IsOERBQUNsQixrREFBSTt3QkFBQ21CLElBQUksRUFBQyxvQkFBb0I7a0NBQzdCLDRFQUFDQyxHQUFDOzRCQUFDSCxLQUFLLEVBQUU7Z0NBQUNJLFdBQVcsRUFBRSxNQUFNOzZCQUFDO3NDQUFFLHdCQUFzQjs7Ozs7Z0NBQUk7Ozs7OzRCQUN0RDtrQ0FDUCw4REFBQ3JCLGtEQUFJO3dCQUFDbUIsSUFBSSxFQUFDLHFCQUFxQjtrQ0FDOUIsNEVBQUNDLEdBQUM7NEJBQUNILEtBQUssRUFBRTtnQ0FBQ0ksV0FBVyxFQUFFLE1BQU07NkJBQUM7c0NBQUUseUJBQXVCOzs7OztnQ0FBSTs7Ozs7NEJBQ3ZEOzs7Ozs7b0JBQ0g7MEJBRU4sOERBQUNQLEtBQUc7Z0JBQUNHLEtBQUssRUFBRTtvQkFBQ0ssTUFBTSxFQUFFLE1BQU07aUJBQUM7MEJBQ3pCWCxTQUFTLGlCQUNSLDhEQUFDRyxLQUFHOzhCQUFDLGNBQVk7Ozs7O3dCQUFNLEdBRXZCSixLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRWEsR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ2QsOERBQUN6QiwyQ0FBUTs7MENBQ1AsOERBQUNlLEtBQUc7O29DQUFDLE1BQUk7b0NBQUNVLElBQUksQ0FBQ0MsRUFBRTs7Ozs7O3FDQUFPOzBDQUN4Qiw4REFBQ1gsS0FBRzs7b0NBQUMsU0FBTztvQ0FBQ1UsSUFBSSxDQUFDRSxLQUFLOzs7Ozs7cUNBQU87MENBQzlCLDhEQUFDWixLQUFHOztvQ0FBQyxXQUFTO29DQUFDVSxJQUFJLENBQUNHLE9BQU87Ozs7OztxQ0FBTzswQ0FDbEMsOERBQUNiLEtBQUc7O29DQUFDLGFBQVc7b0NBQUNVLElBQUksQ0FBQ0ksU0FBUzs7Ozs7O3FDQUFPOzt1QkFKekJKLElBQUksQ0FBQ0MsRUFBRTs7Ozs2QkFLWDtpQkFDWixDQUFDOzs7OztvQkFFQTs7b0JBQ0wsQ0FDSjtBQUNILENBQUM7R0F0Q3VCbkIsSUFBSTs7UUFDc0JSLGlEQUFROzs7QUFEbENRLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7RnJhZ21lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCAgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PntcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wb3N0c1wiKVxyXG4gIGNvbnNvbGUubG9nKCcjIyMgZGF0YScsIGRhdGEpXHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IHtkYXRhOnBvc3RzLCBpc0xvYWRpbmcsIGlzRXJyb3IsIGVycm9yfSA9IHVzZVF1ZXJ5KFwicG9zdHNcIixnZXRQb3N0cyx7XHJcbiAgICBzdGFsZVRpbWU6IDUgKiAxMDAwLFxyXG4gICAgcmVmZXRjaE9uTW91bnQ6IHRydWUsXHJcbiAgICByZWZldGNoT25XaW5kb3dGb2N1czogdHJ1ZVxyXG4gIH0pXHJcblxyXG4gIGlmKGlzRXJyb3Ipe1xyXG4gICAgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wYXJhbGxlbFF1ZXJ5UGFnZVwiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxcmVtXCJ9fT4gUGFyYWxsZWwgUXVlcmllcyBQYWdlPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2RlcGVuZGVudFF1ZXJ5UGFnZVwiPlxyXG4gICAgICAgICAgPGEgc3R5bGU9e3ttYXJnaW5SaWdodDogXCIxcmVtXCJ9fT4gRGVwZW5kZW50IFF1ZXJpZXMgUGFnZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogJzEwcHgnfX0+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxkaXY+IExvYWRpbmcgLi4uPC9kaXY+XHJcbiAgICAgICAgKTooXHJcbiAgICAgICAgICBwb3N0cz8ubWFwKChwb3N0KT0+KFxyXG4gICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtwb3N0LmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2PmlkOiB7cG9zdC5pZH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PnRpdGxlOiB7cG9zdC50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PmNvbnRlbnQ6IHtwb3N0LmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5jcmVhdGVkQXQ6IHtwb3N0LmNyZWF0ZWRBdH08L2Rpdj5cclxuICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsImF4aW9zIiwidXNlUXVlcnkiLCJGcmFnbWVudCIsIkxpbmsiLCJnZXRQb3N0cyIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiSG9tZSIsInN0YWxlVGltZSIsInJlZmV0Y2hPbk1vdW50IiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJwb3N0cyIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJlcnJvciIsImRpdiIsIm1lc3NhZ2UiLCJuYXYiLCJzdHlsZSIsImRpc3BsYXkiLCJocmVmIiwiYSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luIiwibWFwIiwicG9zdCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});