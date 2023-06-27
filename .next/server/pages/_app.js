"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 1401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ ClientReload)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Client-side complement to next-remote-watch
 * Re-triggers getStaticProps when watched mdx files change
 *
 */ const ClientReload = ()=>{
    // Exclude socket.io from prod bundle
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4612)).then((module)=>{
            const socket = module.io();
            socket.on("reload", (data)=>{
                next_router__WEBPACK_IMPORTED_MODULE_1___default().replace((next_router__WEBPACK_IMPORTED_MODULE_1___default().asPath), undefined, {
                    scroll: false
                });
            });
        });
    }, []);
    return null;
};


/***/ }),

/***/ 571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CommandPalette)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(971);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(use_sound__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function CommandPalette({ navigation  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
                setIsOpen(!isOpen);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown)
        ;
    }, [
        isOpen
    ]);
    const toggleIcon = ()=>{
        setIsOpen(!isOpen);
    };
    const [ThemeSound] = use_sound__WEBPACK_IMPORTED_MODULE_7___default()("/static/sounds/open.mp3");
    const filterednavigation = query ? navigation.pages.filter((page)=>page.name.toLowerCase().includes(query.toLocaleLowerCase())
    ) : navigation.pages;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.button, {
                className: "ml-2 mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-300 p-1 ring-zinc-400 transition-all duration-200 ease-in-out hover:bg-zinc-300 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800",
                type: "button",
                "aria-label": "Command palette",
                animate: {
                    rotate: isOpen ? 360 : 0
                },
                transition: {
                    duration: 0.1,
                    ease: "easeIn"
                },
                onClick: ()=>{
                    toggleIcon();
                    ThemeSound();
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiCommand, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Root, {
                show: isOpen,
                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                afterLeave: ()=>setQuery("")
                ,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
                    onClose: setIsOpen,
                    className: "fixed inset-0 z-20 overflow-y-auto p-12 pt-[20vh]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                            enter: "duration-300 ease-out",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "duration-200 ease-in",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Overlay, {
                                className: "fixed inset-0 bg-zinc-500/75 "
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                            enter: "duration-300 ease-out",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "duration-200 ease-in",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Combobox, {
                                value: "",
                                onChange: (page)=>{
                                    setIsOpen(false);
                                    router.push(`${page.href}`);
                                },
                                as: "div",
                                className: "relative mx-auto max-h-[50vh] max-w-xl divide-y divide-gray-300 overflow-hidden overflow-y-scroll rounded-xl bg-zinc-200 shadow-2xl ring-1 ring-black/5 dark:divide-zinc-700 dark:bg-zinc-800",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center px-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiSearch, {
                                                className: "h-6 w-6"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Combobox.Input, {
                                                onChange: (event)=>{
                                                    setQuery(event.target.value);
                                                },
                                                className: "h-12 border-0 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:ring-0 dark:text-neutral-400",
                                                placeholder: "Search...",
                                                autoComplete: "off"
                                            })
                                        ]
                                    }),
                                    filterednavigation.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Combobox.Options, {
                                        static: true,
                                        className: "max-h-30 overflow-y-auto py-4 text-sm",
                                        children: filterednavigation.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Combobox.Option, {
                                                value: page,
                                                children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `cursor-pointer space-x-1 px-14  py-2  ${active ? "bg-zinc-300 dark:bg-zinc-600" : "bg-zinc-200 dark:bg-zinc-800"}`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: `font-medium  ${active ? "text-neutral-900 dark:text-neutral-200" : "text-neutral-900 dark:text-neutral-200"}`,
                                                                children: page.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: `  ${active ? "text-neutral-700 dark:text-neutral-600" : "text-neutral-500 dark:text-neutral-800"}`,
                                                                children: page.repo
                                                            })
                                                        ]
                                                    })
                                            }, page.name)
                                        )
                                    }),
                                    query && filterednavigation.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "py-4 px-12 text-sm text-gray-500 ",
                                        children: "no results found"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DropMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7233);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2132);
/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(971);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(use_sound__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function DropMenu() {
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();
    const toggleIcon = ()=>{
        setIsOpen(!isOpen);
    };
    const [ThemeSound] = use_sound__WEBPACK_IMPORTED_MODULE_8___default()("/static/sounds/page-change.mp3");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
        as: "div",
        className: "relative z-10 inline-block text-left ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                    className: " ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
                        className: "flex h-8 w-8 items-center justify-center p-2",
                        whileTap: {
                            scale: 0.5
                        },
                        transition: {
                            duration: 0.1,
                            ease: "easeIn"
                        },
                        "aria-label": "Toggle List Menu",
                        type: "button",
                        children: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.HamburgerMenuIcon, {
                            className: "h-4 w-4"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.HamburgerMenuIcon, {
                            className: "h-4 w-4"
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                afterEnter: ()=>{
                    toggleIcon();
                    ThemeSound();
                },
                afterLeave: ()=>{
                    toggleIcon();
                    ThemeSound();
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                    className: "absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800 ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "py-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.HomeIcon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Home"
                                                    ]
                                                })
                                            })
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/blog",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.Pencil1Icon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Blog"
                                                    ]
                                                })
                                            })
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/projects",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.ArchiveIcon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Projects"
                                                    ]
                                                })
                                            })
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/about",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.PersonIcon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " About"
                                                    ]
                                                })
                                            })
                                        })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "py-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/contact",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.Link2Icon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Contact"
                                                    ]
                                                })
                                            })
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/tags",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.FrameIcon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Tags"
                                                    ]
                                                })
                                            })
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/uses",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.LaptopIcon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Uses"
                                                    ]
                                                })
                                            })
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/now",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.DiscIcon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Now"
                                                    ]
                                                })
                                            })
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/stats",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.BarChartIcon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Stats"
                                                    ]
                                                })
                                            })
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            href: "/quotes",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(active ? "bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300" : "bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700", "block px-4 py-2 text-sm"),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_7__.QuoteIcon, {
                                                            className: "mr-4 mt-0.5"
                                                        }),
                                                        " Quotes"
                                                    ]
                                                })
                                            })
                                        })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./lib/utils/dateUtils.js
const currentDayName = ()=>{
    const date = new Date();
    return date.toLocaleString("default", {
        weekday: "long"
    });
};

// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(7233);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "motion"
var external_motion_ = __webpack_require__(3086);
// EXTERNAL MODULE: ./lib/fetcher.js
var fetcher = __webpack_require__(1536);
;// CONCATENATED MODULE: ./components/NowPlayingFooter.js





function AnimatedBars() {
    (0,external_react_.useEffect)(()=>{
        (0,external_motion_.animate)("#bar1", {
            transform: [
                "scaleY(1.0) translateY(0rem)",
                "scaleY(1.5) translateY(-0.082rem)",
                "scaleY(1.0) translateY(0rem)", 
            ]
        }, {
            duration: 0.5,
            repeat: Infinity,
            easing: [
                "ease-in-out"
            ]
        });
        (0,external_motion_.animate)("#bar2", {
            transform: [
                "scaleY(1.0) translateY(0rem)",
                "scaleY(3) translateY(-0.083rem)",
                "scaleY(1.0) translateY(0rem)", 
            ]
        }, {
            delay: 0.2,
            duration: 0.5,
            repeat: Infinity,
            easing: [
                "ease-in-out"
            ]
        });
        (0,external_motion_.animate)("#bar3", {
            transform: [
                "scaleY(1.0)  translateY(0rem)",
                "scaleY(0.5) translateY(0.37rem)",
                "scaleY(1.0)  translateY(0rem)", 
            ]
        }, {
            delay: 0.3,
            duration: 0.5,
            repeat: Infinity,
            easing: [
                "ease-in-out"
            ]
        });
        (0,external_motion_.animate)("#bar4", {
            transform: [
                "scaleY(1.0) translateY(0rem)",
                "scaleY(1.5) translateY(-0.082rem)",
                "scaleY(1.0) translateY(0rem)", 
            ]
        }, {
            delay: 0.1,
            duration: 0.5,
            repeat: Infinity,
            easing: [
                "ease-in-out"
            ]
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex w-auto items-end overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                id: "bar1",
                className: "mr-[3px] h-2 w-0.5 bg-[#1bd760] opacity-75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                id: "bar2",
                className: "mr-[3px] h-1 w-0.5 bg-[#1bd760]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                id: "bar3",
                className: "mr-[3px] h-3 w-0.5 bg-[#1bd760] opacity-80"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                id: "bar4",
                className: "mr-[3px] h-2 w-0.5 bg-[#1bd760] opacity-80"
            })
        ]
    });
}
function NowPlaying() {
    const { data  } = external_swr_default()("/api/now-playing", fetcher/* default */.Z);
    var ref;
    return (data === null || data === void 0 ? void 0 : data.songUrl) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8 flex w-full cursor-pointer flex-row-reverse items-center space-x-0 rounded-md border border-zinc-200 bg-zinc-200 px-4 py-4 text-sm shadow-sm dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none sm:flex-row sm:space-x-2",
        children: [
            (data === null || data === void 0 ? void 0 : data.songUrl) ? /*#__PURE__*/ jsx_runtime_.jsx(AnimatedBars, {}) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                className: "ml-auto mt-[-2px] h-4 w-4",
                viewBox: "0 0 168 168",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fill: "#1ED760",
                    d: "M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex w-full max-w-full flex-col truncate sm:flex-row",
                children: [
                    (data === null || data === void 0 ? void 0 : data.songUrl) ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "capsize max-w-max truncate font-medium text-gray-800 dark:text-gray-200",
                        href: data.songUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: data.title
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "capsize font-medium text-gray-800 dark:text-gray-200",
                        children: "Not Playing"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "capsize mx-2 hidden text-gray-500 dark:text-gray-300 sm:block",
                        children: " \u2013 "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "capsize max-w-max truncate text-gray-500 dark:text-gray-300",
                        children: (ref = data === null || data === void 0 ? void 0 : data.artist) !== null && ref !== void 0 ? ref : "Spotify"
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
};

;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-10 flex flex-col items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(NowPlaying, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mx-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                href: "https://blog.RitulSoni.com",
                                className: "link-underline",
                                children: [
                                    "Ritul K. Soni",
                                    ` © ${new Date().getFullYear()}`
                                ]
                            })
                        }),
                        `•`,
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mx-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                                href: "https://qod.shakiltech.com/",
                                className: "link-underline",
                                children: [
                                    "Have a good ",
                                    currentDayName(),
                                    "!"
                                ]
                            })
                        }),
                        `•`,
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mx-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                href: "/contact",
                                className: "link-underline",
                                children: "Contact"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Link/* default */.Z, {
                            href: "https://ritulsoni.com/",
                            className: "link-underline",
                            children: [
                                "Ritul",
                                ` © ${new Date().getFullYear()}`
                            ]
                        })
                    })
                })
            ]
        })
    });
}; //WITH THE CODING BLOG PORTFOLIO 
 // import { currentDayName } from '@/lib/utils/dateUtils'
 // import Link from './Link'
 // import NowPlayingFooter from './NowPlayingFooter'
 // export default function Footer() {
 //   return (
 //     <footer>
 //       <div className="h-content sm:h-content-sm flex flex-row justify-around items-center pt-20">
 //         <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-center text-6xl font-extrabold leading-none sm:my-10">
 //           <span
 //             data-content="Blog."
 //             className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
 //           >
 //             <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
 //               Blog.
 //             </span>
 //           </span>
 //           <span
 //             data-content="Coding."
 //             className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
 //           >
 //             <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
 //               Coding.
 //             </span>
 //           </span>
 //           <span
 //             data-content="Portfolio."
 //             className="relative before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
 //           >
 //             <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
 //               Portfolio.
 //             </span>
 //           </span>
 //         </h1>
 //       </div>
 //       <div className="mt-10 flex flex-col items-center">
 //         <div className="">
 //           <NowPlayingFooter />
 //         </div>
 //         <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
 //           <div className="mx-1">
 //             <Link href="https://blog.RitulSoni.com" className="link-underline">
 //               Ritul K. Soni{` © ${new Date().getFullYear()}`}
 //             </Link>
 //           </div>
 //           {`•`}
 //           <div className="mx-1">
 //             <Link href="https://qod.shakiltech.com/" className="link-underline">
 //               Have a good {currentDayName()}!
 //             </Link>
 //           </div>
 //           {`•`}
 //           <div className="mx-1">
 //             <Link href="/contact" className="link-underline">
 //               Contact
 //             </Link>
 //           </div>
 //         </div>
 //         <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
 //           <div className="mx-1">
 //             <Link href="https://ritulsoni.com/" className="link-underline">
 //               Ritul{` © ${new Date().getFullYear()}`}
 //             </Link>
 //           </div>
 //         </div>
 //       </div>
 //     </footer>
 //   )
 // }


/***/ }),

/***/ 7550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_headerNavLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(337);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7233);
/* harmony import */ var _SectionContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(890);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1247);
/* harmony import */ var _data_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8869);
/* harmony import */ var _CommandPalette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(571);
/* harmony import */ var _ThemeSwitch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7020);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2589);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _DropMenu_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8842);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CommandPalette__WEBPACK_IMPORTED_MODULE_7__, _ThemeSwitch__WEBPACK_IMPORTED_MODULE_8__, _DropMenu_js__WEBPACK_IMPORTED_MODULE_11__]);
([_CommandPalette__WEBPACK_IMPORTED_MODULE_7__, _ThemeSwitch__WEBPACK_IMPORTED_MODULE_8__, _DropMenu_js__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// import Logo from '@/data/logo.svg'
// import MobileNav from './MobileNav'
const LayoutWrapper = ({ children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex h-screen flex-col justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "flex items-center justify-between py-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: "/",
                                "aria-label": (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().headerTitle),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold",
                                    children: [
                                        `~${router.asPath}`,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((typewriter_effect__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            options: {
                                                strings: [],
                                                autoStart: true,
                                                loop: true
                                            }
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center text-base leading-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hidden sm:block",
                                    children: _data_headerNavLinks__WEBPACK_IMPORTED_MODULE_2__/* ["default"].map */ .Z.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            href: link.href,
                                            className: "link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3",
                                            children: link.title
                                        }, link.title)
                                    )
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CommandPalette__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    navigation: _data_nav__WEBPACK_IMPORTED_MODULE_6__/* .navigation */ .G
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ThemeSwitch__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DropMenu_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    className: "mb-auto",
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__);



const ScrollTopAndComment = ()=>{
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleWindowScroll = ()=>{
            if (window.scrollY > 50) setShow(true);
            else setShow(false);
        };
        window.addEventListener("scroll", handleWindowScroll);
        return ()=>window.removeEventListener("scroll", handleWindowScroll)
        ;
    }, []);
    const handleScrollTop = ()=>{
        window.scrollTo({
            top: 0
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `fixed right-16 bottom-8 hidden flex-col gap-3 ${show ? "md:flex" : "md:hidden"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            "aria-label": "Scroll To Top",
            type: "button",
            onClick: handleScrollTop,
            className: "pushable",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "shadow"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "edge"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "front",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_2__.TbArrowBigTop, {
                        className: "h-5 w-5"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTopAndComment);


/***/ }),

/***/ 890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionContainer({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",
        children: children
    });
};


/***/ }),

/***/ 7020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(971);
/* harmony import */ var use_sound__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(use_sound__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ThemeSwitch = ()=>{
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // When mounted on client, now we can show the UI
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setMounted(true)
    , []);
    const [ThemeSound] = use_sound__WEBPACK_IMPORTED_MODULE_5___default()("/static/sounds/switch-on.mp3");
    const ThemeSwitch1 = ()=>{
        setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ml-1 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-zinc-300 hover:ring-1 dark:bg-zinc-700 dark:ring-white dark:hover:bg-zinc-800",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
            className: "flex h-8 w-8 items-center justify-center p-2",
            whileTap: {
                scale: 0.7,
                rotate: 360
            },
            whileHover: mounted ? {
                scale: 1.1
            } : {},
            transition: {
                duration: 0.2,
                ease: "easeIn"
            },
            "aria-label": "Toggle Dark Mode",
            type: "button",
            onClick: ()=>{
                ThemeSwitch1();
                ThemeSound();
            },
            children: mounted && (theme === "dark" || resolvedTheme === "dark") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiSun, {
                className: "h-4 w-4 hover:animate-spin"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_4__.HiMoon, {
                className: "h-4 w-4 hover:animate-spin"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeSwitch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ analytics)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
;// CONCATENATED MODULE: ./components/analytics/GoogleAnalytics.js



const GAScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${(siteMetadata_default()).analytics.googleAnalyticsId}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "ga-script",
                children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${(siteMetadata_default()).analytics.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
        `
            })
        ]
    });
};
/* harmony default export */ const GoogleAnalytics = (GAScript);
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const logEvent = (action, category, label, value)=>{
    var ref;
    (ref = window.gtag) === null || ref === void 0 ? void 0 : ref.call(window, "event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./components/analytics/Plausible.js



const PlausibleScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                "data-domain": (siteMetadata_default()).analytics.plausibleDataDomain,
                src: "https://plausible.io/js/plausible.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "plausible-script",
                children: `
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `
            })
        ]
    });
};
/* harmony default export */ const Plausible = (PlausibleScript);
// https://plausible.io/docs/custom-event-goals
const Plausible_logEvent = (eventName, ...rest)=>{
    var ref;
    return (ref = window.plausible) === null || ref === void 0 ? void 0 : ref.call(window, eventName, ...rest);
};

;// CONCATENATED MODULE: ./components/analytics/SimpleAnalytics.js


const SimpleAnalyticsScript = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "sa-script",
                children: `
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: "https://scripts.simpleanalyticscdn.com/latest.js"
            })
        ]
    });
};
// https://docs.simpleanalytics.com/events
const SimpleAnalytics_logEvent = (eventName, callback)=>{
    if (callback) {
        var ref;
        return (ref = window.sa_event) === null || ref === void 0 ? void 0 : ref.call(window, eventName, callback);
    } else {
        var ref1;
        return (ref1 = window.sa_event) === null || ref1 === void 0 ? void 0 : ref1.call(window, eventName);
    }
};
/* harmony default export */ const SimpleAnalytics = (SimpleAnalyticsScript);

;// CONCATENATED MODULE: ./components/analytics/Umami.js



const UmamiScript = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
            async: true,
            defer: true,
            "data-website-id": (siteMetadata_default()).analytics.umamiWebsiteId,
            src: "https://umami.example.com/umami.js" // Replace with your umami instance
        })
    });
};
/* harmony default export */ const Umami = (UmamiScript);

;// CONCATENATED MODULE: ./components/analytics/index.js






const isProduction = "production" === "production";
const Analytics = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isProduction && (siteMetadata_default()).analytics.plausibleDataDomain && /*#__PURE__*/ jsx_runtime_.jsx(Plausible, {}),
            isProduction && (siteMetadata_default()).analytics.simpleAnalytics && /*#__PURE__*/ jsx_runtime_.jsx(SimpleAnalytics, {}),
            isProduction && (siteMetadata_default()).analytics.umamiWebsiteId && /*#__PURE__*/ jsx_runtime_.jsx(Umami, {}),
            isProduction && (siteMetadata_default()).analytics.googleAnalyticsId && /*#__PURE__*/ jsx_runtime_.jsx(GoogleAnalytics, {})
        ]
    });
};
/* harmony default export */ const analytics = (Analytics);


/***/ }),

/***/ 337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const headerNavLinks = [
    {
        href: "/",
        title: "Home"
    },
    {
        href: "/blog",
        title: "Blog"
    },
    {
        href: "/projects",
        title: "Projects"
    },
    {
        href: "/now",
        title: "Now"
    },
    {
        href: "/about",
        title: "About"
    },
    {
        href: "/contact",
        title: "Contact"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerNavLinks);


/***/ }),

/***/ 8869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ navigation)
/* harmony export */ });
const navigation = {
    pages: [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Projects",
            href: "/projects"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Contact",
            href: "/contact"
        },
        {
            name: "Uses",
            href: "/uses"
        },
        {
            name: "Now",
            href: "/now"
        },
        {
            name: "Tags",
            href: "/tags"
        },
        {
            name: "Stats",
            href: "/stats"
        },
        {
            name: "Quotes",
            href: "/quotes"
        },
        {
            name: "RSS",
            href: "/feed.xml"
        }, 
    ]
};


/***/ }),

/***/ 1536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Fetcher)
/* harmony export */ });
async function Fetcher(...args) {
    const res = await fetch(...args);
    return res.json();
};


/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1576);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8671);
/* harmony import */ var _components_LayoutWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7550);
/* harmony import */ var _components_ClientReload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1401);
/* harmony import */ var react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6098);
/* harmony import */ var react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ScrollTop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1165);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lyket_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6133);
/* harmony import */ var _lyket_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lyket_react__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LayoutWrapper__WEBPACK_IMPORTED_MODULE_7__]);
_components_LayoutWrapper__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const isDevelopment = "production" === "development";
const isSocket = process.env.SOCKET;
nprogress__WEBPACK_IMPORTED_MODULE_4___default().configure({
    showSpinner: false
});
(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeStart) = ()=>{
    // console.log('onRouteChangeStart triggered');
    nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();
};
(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeComplete) = ()=>{
    // console.log('onRouteChangeComplete triggered');
    nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
};
(next_router__WEBPACK_IMPORTED_MODULE_3___default().onRouteChangeError) = ()=>{
    // console.log('onRouteChangeError triggered');
    nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();
};
const defaultTheme = {
    colors: {
        primary: "#71717a",
        secondary: "#ff00c3",
        text: "#fff",
        highlight: "#ff00c3",
        icon: "#fff",
        background: "transparent"
    },
    fonts: {
        body: "inherit"
    }
};
function App({ Component , pageProps: { session , ...pageProps }  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_11__.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lyket_react__WEBPACK_IMPORTED_MODULE_12__.Provider, {
            apiKey: "pt_7c8b6840f5ba39cd3b2b471cd8efc2",
            theme: defaultTheme,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_themes__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {
                attribute: "class",
                defaultTheme: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_5___default().theme),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_scroll_progress_bar__WEBPACK_IMPORTED_MODULE_9___default()), {
                        bgcolor: "#ff2500"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ScrollTop__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            content: "width=device-width, initial-scale=1",
                            name: "viewport"
                        })
                    }),
                    isDevelopment && isSocket && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ClientReload__WEBPACK_IMPORTED_MODULE_8__/* .ClientReload */ .R, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_analytics__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LayoutWrapper__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6133:
/***/ ((module) => {

module.exports = require("@lyket/react");

/***/ }),

/***/ 2132:
/***/ ((module) => {

module.exports = require("@radix-ui/react-icons");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3086:
/***/ ((module) => {

module.exports = require("motion");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ }),

/***/ 4152:
/***/ ((module) => {

module.exports = require("react-icons/tb");

/***/ }),

/***/ 6098:
/***/ ((module) => {

module.exports = require("react-scroll-progress-bar");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 2589:
/***/ ((module) => {

module.exports = require("typewriter-effect");

/***/ }),

/***/ 971:
/***/ ((module) => {

module.exports = require("use-sound");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1397,676,1664,1576,7233], () => (__webpack_exec__(8484)));
module.exports = __webpack_exports__;

})();