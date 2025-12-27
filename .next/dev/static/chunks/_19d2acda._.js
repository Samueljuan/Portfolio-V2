(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module__Z8hQ_W__actions",
  "blink": "Hero-module__Z8hQ_W__blink",
  "btnOutline": "Hero-module__Z8hQ_W__btnOutline",
  "content": "Hero-module__Z8hQ_W__content",
  "cursor": "Hero-module__Z8hQ_W__cursor",
  "hero": "Hero-module__Z8hQ_W__hero",
  "highlight": "Hero-module__Z8hQ_W__highlight",
  "subtitle": "Hero-module__Z8hQ_W__subtitle",
  "title": "Hero-module__Z8hQ_W__title",
});
}),
"[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useScrollAnimation() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollAnimation.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useScrollAnimation.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                }
            }["useScrollAnimation.useEffect"], {
                threshold: 0.1,
                rootMargin: '50px'
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ({
                "useScrollAnimation.useEffect": ()=>{
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            })["useScrollAnimation.useEffect"];
        }
    }["useScrollAnimation.useEffect"], []);
    return {
        ref,
        isVisible
    };
}
_s(useScrollAnimation, "Wk8baY7uc+CWSrD2kMBp+I8qtIg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/Hero.tsx'\n\nExpected ';', '}' or <eof>");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/components/About.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "grid": "About-module__vqXTeW__grid",
  "skillList": "About-module__vqXTeW__skillList",
  "skillTag": "About-module__vqXTeW__skillTag",
  "skillsTitle": "About-module__vqXTeW__skillsTitle",
  "text": "About-module__vqXTeW__text",
});
}),
"[project]/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/About.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function About() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "About Me"
                }, void 0, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "I am a Computer Science graduate from Maranatha Christian University with a 3.91 GPA. Currently working as a Product Associate at Kick Avenue, I bridge the gap between technical engineering and business requirements."
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 24,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "My background includes roles in Customer Success at KarirLab and various leadership positions during my time at Kampus Merdeka. I am passionate about building digital products that solve real-world problems and creating seamless user experiences."
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skills} animate-on-scroll delay-200 ${isVisible ? 'is-visible' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillsTitle,
                                    children: "Skills"
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillList,
                                    children: skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skillTag,
                                            children: skill
                                        }, skill, false, {
                                            fileName: "[project]/components/About.tsx",
                                            lineNumber: 37,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 35,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/About.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_s(About, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Experience.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "company": "Experience-module__HaXZMW__company",
  "description": "Experience-module__HaXZMW__description",
  "header": "Experience-module__HaXZMW__header",
  "item": "Experience-module__HaXZMW__item",
  "period": "Experience-module__HaXZMW__period",
  "role": "Experience-module__HaXZMW__role",
  "timeline": "Experience-module__HaXZMW__timeline",
});
}),
"[project]/components/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Experience.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Experience() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const experiences = [
        {
            company: "Kick Avenue",
            role: "Product Associate",
            period: "Jul 2024 - Present",
            description: "Bridging the gap between technical engineering and business requirements. Managing product lifecycle and cross-functional collaboration."
        },
        {
            company: "KarirLab",
            role: "Customer Success",
            period: "Feb 2023 - Jun 2024",
            description: "Ensured customer satisfaction and success with the platform. Managed relationships and user feedback."
        },
        {
            company: "Kampus Merdeka",
            role: "Manager TRIBE",
            period: "Nov 2021 - Dec 2022",
            description: "Led a tribe of students in the MSIB program. Facilitated communication and project management."
        },
        {
            company: "Glints",
            role: "Full-stack Lead - Studi Independen",
            period: "Sep 2021 - Feb 2022",
            description: "Led a team of developers. Built web applications using React.js and Node.js."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "Experience"
                }, void 0, false, {
                    fileName: "[project]/components/Experience.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeline} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                    children: experiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                                            children: exp.role
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.tsx",
                                            lineNumber: 51,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].company,
                                            children: exp.company
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.tsx",
                                            lineNumber: 52,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].period,
                                    children: exp.period
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                    children: exp.description
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/Experience.tsx",
                            lineNumber: 45,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Experience.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Experience.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Experience.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(Experience, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Projects.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Projects-module__K3d-Xa__card",
  "description": "Projects-module__K3d-Xa__description",
  "grid": "Projects-module__K3d-Xa__grid",
  "tech": "Projects-module__K3d-Xa__tech",
  "title": "Projects-module__K3d-Xa__title",
});
}),
"[project]/components/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Projects.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Projects() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const projects = [
        {
            title: "Attendance List App",
            tech: "React.js",
            description: "A web application to manage and track attendance efficiently."
        },
        {
            title: "Todo List App",
            tech: "JavaScript",
            description: "A simple yet effective task management application."
        },
        {
            title: "LingoTalk Collaboration",
            tech: "Next.js",
            description: "Collaborated with LingoTalk to build a feature-rich web platform."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "Projects"
                }, void 0, false, {
                    fileName: "[project]/components/Projects.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                    children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} glass`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Projects.tsx",
                                    lineNumber: 41,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tech,
                                    children: project.tech
                                }, void 0, false, {
                                    fileName: "[project]/components/Projects.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/components/Projects.tsx",
                                    lineNumber: 43,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/components/Projects.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Projects.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Projects.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Projects.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(Projects, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Contact-module__OWeMSG__actions",
  "btnOutline": "Contact-module__OWeMSG__btnOutline",
  "content": "Contact-module__OWeMSG__content",
  "text": "Contact-module__OWeMSG__text",
});
}),
"[project]/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Contact.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Contact() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Get In Touch"
                    }, void 0, false, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 16,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                        children: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
                    }, void 0, false, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:samueljuan@example.com",
                                className: "btn btn-primary",
                                children: "Say Hello"
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.linkedin.com/in/samueljuan/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnOutline,
                                children: "LinkedIn Profile"
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Contact.tsx",
                lineNumber: 12,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Contact.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(Contact, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_19d2acda._.js.map