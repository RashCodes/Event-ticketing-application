"use strict";
exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ErrorPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./images/fourfour.svg
/* harmony default export */ const fourfour = ({"src":"/_next/static/media/fourfour.3bfc5379.svg","height":571,"width":860});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ErrorPage.js






const ErrorPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: " 404 | EventAlia"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "An event ticketing system built with NextJS and Firebase"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "w-full h-[100vh] flex flex-col space-y-4 items-center justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: fourfour,
                        alt: "404 page",
                        className: "w-[400px] mb-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-xl text-[#C07F00]",
                        children: "Seems we lost you! \uD83D\uDE2A"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "p-4 bg-slate-100 shadow-md hover:bg-[#C07F00] hover:text-slate-100 rounded-md",
                        children: "Come back home \uD83C\uDFE0"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ErrorPage = (ErrorPage);


/***/ })

};
;