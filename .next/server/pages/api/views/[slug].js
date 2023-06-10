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
exports.id = "pages/api/views/[slug]";
exports.ids = ["pages/api/views/[slug]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\n//\n// Learn more:\n// https://pris.ly/d/help/next-js-best-practices\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLEVBQUU7QUFDRixjQUFjO0FBQ2QsZ0RBQWdEO0FBRWhELElBQUlDLE1BQU07QUFFVixJQUFJQyxLQUFxQyxFQUFFLEVBRTFDLE1BQU07SUFDTCxJQUFJLENBQUNDLE1BQU0sQ0FBQ0YsTUFBTSxFQUFFO1FBQ2xCRSxNQUFNLENBQUNGLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0tBQ25DO0lBQ0RDLE1BQU0sR0FBR0UsTUFBTSxDQUFDRixNQUFNO0NBQ3ZCO0FBRUQsaUVBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yaXR1bC1zb25pLWJsb2cvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbi8vIFByaXNtYUNsaWVudCBpcyBhdHRhY2hlZCB0byB0aGUgYGdsb2JhbGAgb2JqZWN0IGluIGRldmVsb3BtZW50IHRvIHByZXZlbnRcbi8vIGV4aGF1c3RpbmcgeW91ciBkYXRhYmFzZSBjb25uZWN0aW9uIGxpbWl0LlxuLy9cbi8vIExlYXJuIG1vcmU6XG4vLyBodHRwczovL3ByaXMubHkvZC9oZWxwL25leHQtanMtYmVzdC1wcmFjdGljZXNcblxubGV0IHByaXNtYVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/views/[slug].js":
/*!***********************************!*\
  !*** ./pages/api/views/[slug].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/prisma */ \"(api)/./lib/prisma.js\");\n\nasync function handler(req, res) {\n    try {\n        const slug = req.query.slug.toString();\n        if (req.method === \"POST\") {\n            const newOrUpdatedViews = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].views.upsert({\n                where: {\n                    slug\n                },\n                create: {\n                    slug\n                },\n                update: {\n                    count: {\n                        increment: 1\n                    }\n                }\n            });\n            return res.status(200).json({\n                total: newOrUpdatedViews.count.toString()\n            });\n        }\n        if (req.method === \"GET\") {\n            var ref, ref1;\n            const views = await lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].views.findUnique({\n                where: {\n                    slug\n                }\n            });\n            return res.status(200).json({\n                total: (views === null || views === void 0 ? void 0 : (ref = views.count) === null || ref === void 0 ? void 0 : (ref1 = ref.toString) === null || ref1 === void 0 ? void 0 : ref1.call(ref)) || 0\n            });\n        }\n    } catch (e) {\n        return res.status(500).json({\n            message: e.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmlld3MvW3NsdWddLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStCO0FBRWhCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxLQUFLLENBQUNELElBQUksQ0FBQ0UsUUFBUSxFQUFFO1FBRXRDLElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUN6QixNQUFNQyxpQkFBaUIsR0FBRyxNQUFNUiwrREFBbUIsQ0FBQztnQkFDbERXLEtBQUssRUFBRTtvQkFBRVAsSUFBSTtpQkFBRTtnQkFDZlEsTUFBTSxFQUFFO29CQUNOUixJQUFJO2lCQUNMO2dCQUNEUyxNQUFNLEVBQUU7b0JBQ05DLEtBQUssRUFBRTt3QkFDTEMsU0FBUyxFQUFFLENBQUM7cUJBQ2I7aUJBQ0Y7YUFDRixDQUFDO1lBRUYsT0FBT1osR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFDMUJDLEtBQUssRUFBRVYsaUJBQWlCLENBQUNNLEtBQUssQ0FBQ1IsUUFBUSxFQUFFO2FBQzFDLENBQUM7U0FDSDtRQUVELElBQUlKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLEtBQUssRUFBRTtnQkFPYUUsR0FBWTtZQU5qRCxNQUFNQSxLQUFLLEdBQUcsTUFBTVQsbUVBQXVCLENBQUM7Z0JBQzFDVyxLQUFLLEVBQUU7b0JBQ0xQLElBQUk7aUJBQ0w7YUFDRixDQUFDO1lBRUYsT0FBT0QsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFVCxDQUFBQSxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLENBQUFBLEdBQVksR0FBWkEsS0FBSyxDQUFFSyxLQUFLLGNBQVpMLEdBQVksY0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxRQUFBQSxHQUFZLENBQUVILFFBQVEsNkJBQUksR0FBMUJHLEtBQUFBLENBQTBCLEdBQTFCQSxLQUFBQSxJQUEwQixDQUExQkEsR0FBWSxDQUFjLEtBQUksQ0FBQzthQUFFLENBQUM7U0FDeEU7S0FDRixDQUFDLE9BQU9XLENBQUMsRUFBRTtRQUNWLE9BQU9qQixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVJLE9BQU8sRUFBRUQsQ0FBQyxDQUFDQyxPQUFPO1NBQUUsQ0FBQztLQUNwRDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcml0dWwtc29uaS1ibG9nLy4vcGFnZXMvYXBpL3ZpZXdzL1tzbHVnXS5qcz84YjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnbGliL3ByaXNtYSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICB0cnkge1xuICAgIGNvbnN0IHNsdWcgPSByZXEucXVlcnkuc2x1Zy50b1N0cmluZygpXG5cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICBjb25zdCBuZXdPclVwZGF0ZWRWaWV3cyA9IGF3YWl0IHByaXNtYS52aWV3cy51cHNlcnQoe1xuICAgICAgICB3aGVyZTogeyBzbHVnIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgIHNsdWcsXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZToge1xuICAgICAgICAgIGNvdW50OiB7XG4gICAgICAgICAgICBpbmNyZW1lbnQ6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIHRvdGFsOiBuZXdPclVwZGF0ZWRWaWV3cy5jb3VudC50b1N0cmluZygpLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIGNvbnN0IHZpZXdzID0gYXdhaXQgcHJpc21hLnZpZXdzLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIHNsdWcsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyB0b3RhbDogdmlld3M/LmNvdW50Py50b1N0cmluZz8uKCkgfHwgMCB9KVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInNsdWciLCJxdWVyeSIsInRvU3RyaW5nIiwibWV0aG9kIiwibmV3T3JVcGRhdGVkVmlld3MiLCJ2aWV3cyIsInVwc2VydCIsIndoZXJlIiwiY3JlYXRlIiwidXBkYXRlIiwiY291bnQiLCJpbmNyZW1lbnQiLCJzdGF0dXMiLCJqc29uIiwidG90YWwiLCJmaW5kVW5pcXVlIiwiZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/views/[slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/views/[slug].js"));
module.exports = __webpack_exports__;

})();