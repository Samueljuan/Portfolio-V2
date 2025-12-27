module.exports = [
"[project]/Documents/Portfolio/components/Hero.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module__cngJOq__actions",
  "blink": "Hero-module__cngJOq__blink",
  "btnOutline": "Hero-module__cngJOq__btnOutline",
  "content": "Hero-module__cngJOq__content",
  "cursor": "Hero-module__cngJOq__cursor",
  "hero": "Hero-module__cngJOq__hero",
  "highlight": "Hero-module__cngJOq__highlight",
  "subtitle": "Hero-module__cngJOq__subtitle",
  "title": "Hero-module__cngJOq__title",
});
}),
"[project]/Documents/Portfolio/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useScrollAnimation() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return ()=>{
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return {
        ref,
        isVisible
    };
}
}),
"[project]/Documents/Portfolio/hooks/useTypewriter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTypewriter",
    ()=>useTypewriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useTypewriter(words, typeSpeed = 100, deleteSpeed = 50, pauseDuration = 2000) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [subIndex, setSubIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reverse, setReverse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [blink, setBlink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Blinking cursor effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeout2 = setTimeout(()=>{
            setBlink((prev)=>!prev);
        }, 500);
        return ()=>clearTimeout(timeout2);
    }, [
        blink
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (index >= words.length) {
            setIndex(0);
            return;
        }
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev)=>(prev + 1) % words.length);
            return;
        }
        const timeout = setTimeout(()=>{
            setText(words[index].substring(0, subIndex));
            setSubIndex((prev)=>prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? deleteSpeed : typeSpeed, parseInt(Math.random() * 350))) // Random typing speed for realism
        ;
        // Pause at the end of the word
        if (!reverse && subIndex === words[index].length) {
            clearTimeout(timeout);
            setTimeout(()=>{
                setReverse(true);
            }, pauseDuration);
            return;
        }
        return ()=>clearTimeout(timeout);
    }, [
        subIndex,
        index,
        reverse,
        words,
        typeSpeed,
        deleteSpeed,
        pauseDuration
    ]);
    return text;
}
}),
"[project]/Documents/Portfolio/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/components/Hero.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useTypewriter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/hooks/useTypewriter.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Hero() {
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useTypewriter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTypewriter"])([
        "Samuel Juan",
        "a Product Associate",
        "a Tech Enthusiast"
    ], 100, 50, 2000);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "Hi, I'm ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].highlight,
                                children: text
                            }, void 0, false, {
                                fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                                lineNumber: 24,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cursor,
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle} animate - on - scroll delay - 100 ${isVisible ? 'is-visible' : ''} `,
                        children: [
                            "Product Associate & Full Stack Developer based in Jakarta.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this),
                            "Building digital products with purpose."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions} animate - on - scroll delay - 200 ${isVisible ? 'is-visible' : ''} `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#projects",
                                className: "btn btn-primary",
                                children: "View Projects"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#contact",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnOutline,
                                children: "Contact Me"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
                lineNumber: 19,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Portfolio/components/Hero.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Portfolio/components/About.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "About-module__dcIxJa__grid",
  "skillList": "About-module__dcIxJa__skillList",
  "skillTag": "About-module__dcIxJa__skillTag",
  "skills": "About-module__dcIxJa__skills",
  "skillsTitle": "About-module__dcIxJa__skillsTitle",
  "text": "About-module__dcIxJa__text",
});
}),
"[project]/Documents/Portfolio/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/components/About.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function About() {
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const skills = [
        "Product Management",
        "SQL",
        "Python",
        "React.js",
        "Next.js",
        "Market Research",
        "IT Project Management",
        "Customer Success",
        "Cross-Functional Collaboration",
        "English",
        "Bahasa Indonesia"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "About Me"
                }, void 0, false, {
                    fileName: "[project]/Documents/Portfolio/components/About.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "I am a Product Associate at Kick Avenue, where I bridge the gap between business requirements and technical engineering. With a background in Computer Science (3.91 GPA), I leverage my technical expertise to build seamless digital products."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/About.tsx",
                                    lineNumber: 24,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Currently, I am also involved in designing and implementing automation using Playwright, ensuring product quality and efficiency. My experience spans from Customer Success to leading tech teams, giving me a holistic view of the product lifecycle."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/About.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Portfolio/components/About.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skills} glass animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillsTitle,
                                    children: "Skills"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/About.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillList,
                                    children: skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$About$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skillTag,
                                            children: skill
                                        }, skill, false, {
                                            fileName: "[project]/Documents/Portfolio/components/About.tsx",
                                            lineNumber: 37,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/About.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Portfolio/components/About.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Portfolio/components/About.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Portfolio/components/About.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Portfolio/components/About.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Portfolio/components/Experience.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "company": "Experience-module__CH9GXW__company",
  "description": "Experience-module__CH9GXW__description",
  "header": "Experience-module__CH9GXW__header",
  "item": "Experience-module__CH9GXW__item",
  "period": "Experience-module__CH9GXW__period",
  "role": "Experience-module__CH9GXW__role",
  "timeline": "Experience-module__CH9GXW__timeline",
});
}),
"[project]/Documents/Portfolio/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/components/Experience.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Experience() {
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const experiences = [
        {
            company: "Kick Avenue",
            role: "Product Associate",
            period: "Jul 2024 - Present",
            description: "Managing product lifecycle and cross-functional collaboration. Designing and implementing automation using Playwright to enhance product quality."
        },
        {
            company: "KarirLab",
            role: "Customer Success",
            period: "Feb 2023 - Jun 2024",
            description: "Ensured customer satisfaction and success with the platform. Managed relationships and user feedback to drive product improvements."
        },
        {
            company: "Kampus Merdeka",
            role: "Communication and Community Technology Engagement",
            period: "Nov 2021 - Dec 2022",
            description: "Led community engagement initiatives and facilitated technology adoption within the ecosystem."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "Experience"
                }, void 0, false, {
                    fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeline} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                    children: experiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item} glass`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                                            children: exp.role
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
                                            lineNumber: 45,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].company,
                                            children: exp.company
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
                                            lineNumber: 46,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].period,
                                    children: exp.period
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                                    children: exp.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
                                    lineNumber: 49,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
            lineNumber: 32,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Portfolio/components/Experience.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Portfolio/components/Projects.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Projects-module__PJA75G__card",
  "description": "Projects-module__PJA75G__description",
  "grid": "Projects-module__PJA75G__grid",
  "tech": "Projects-module__PJA75G__tech",
  "title": "Projects-module__PJA75G__title",
});
}),
"[project]/Documents/Portfolio/components/Projects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/components/Projects.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Projects() {
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const projects = [
        {
            title: "WhatsApp Group Blast",
            tech: "Python • Automation",
            description: "Automated tool for broadcasting messages to multiple WhatsApp groups, streamlining team communication and content distribution."
        },
        {
            title: "KarirLab Outing",
            tech: "Leadership • Event Management",
            description: "Vice Chairperson for company outing. Led cross-functional teams to design and execute engaging activities, boosting team morale."
        },
        {
            title: "Festival Kampus Merdeka",
            tech: "Community • Event Coordination",
            description: "Coordinated the MSIB Fair, attracting 25+ partners and promoting internship opportunities to thousands of students."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "Projects"
                }, void 0, false, {
                    fileName: "[project]/Documents/Portfolio/components/Projects.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                    children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} glass`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/Projects.tsx",
                                    lineNumber: 41,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tech,
                                    children: project.tech
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/Projects.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Portfolio/components/Projects.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Documents/Portfolio/components/Projects.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Portfolio/components/Projects.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Portfolio/components/Projects.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Portfolio/components/Projects.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Portfolio/components/Contact.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Contact-module__TNHSPa__actions",
  "btnOutline": "Contact-module__TNHSPa__btnOutline",
  "content": "Contact-module__TNHSPa__content",
  "text": "Contact-module__TNHSPa__text",
});
}),
"[project]/Documents/Portfolio/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/components/Contact.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Contact() {
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Get In Touch"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Portfolio/components/Contact.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                        children: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Portfolio/components/Contact.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:samueljuan@example.com",
                                className: "btn btn-primary",
                                children: "Say Hello"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Portfolio/components/Contact.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/samueljuan/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnOutline,
                                children: "LinkedIn Profile"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Portfolio/components/Contact.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Portfolio/components/Contact.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Portfolio/components/Contact.tsx",
                lineNumber: 12,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Portfolio/components/Contact.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Portfolio/components/Contact.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/Portfolio/components/Certifications.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "placeholder": "Certifications-module__Uuofjq__placeholder",
  "text": "Certifications-module__Uuofjq__text",
});
}),
"[project]/Documents/Portfolio/components/Certifications.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Certifications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/components/Certifications.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Portfolio/hooks/useScrollAnimation.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Certifications() {
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "certifications",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "Certifications"
                }, void 0, false, {
                    fileName: "[project]/Documents/Portfolio/components/Certifications.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Certifications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].placeholder} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Portfolio$2f$components$2f$Certifications$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                        children: "More certifications coming soon..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Portfolio/components/Certifications.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Portfolio/components/Certifications.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Portfolio/components/Certifications.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Portfolio/components/Certifications.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Portfolio_4b57362e._.js.map