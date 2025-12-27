(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Hero-module__Z8hQ_W__actions",
  "blink": "Hero-module__Z8hQ_W__blink",
  "btnOutline": "Hero-module__Z8hQ_W__btnOutline",
  "content": "Hero-module__Z8hQ_W__content",
  "cursor": "Hero-module__Z8hQ_W__cursor",
  "headline": "Hero-module__Z8hQ_W__headline",
  "hero": "Hero-module__Z8hQ_W__hero",
  "highlight": "Hero-module__Z8hQ_W__highlight",
  "prefix": "Hero-module__Z8hQ_W__prefix",
  "subheadline": "Hero-module__Z8hQ_W__subheadline",
  "text": "Hero-module__Z8hQ_W__text",
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
"[project]/hooks/useTypewriter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTypewriter",
    ()=>useTypewriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useTypewriter(words, typeSpeed = 100, deleteSpeed = 50, pauseDuration = 2000) {
    _s();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [subIndex, setSubIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reverse, setReverse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypewriter.useEffect": ()=>{
            if (index >= words.length) {
                setIndex(0);
                return;
            }
            const currentWord = words[index];
            setText(currentWord.substring(0, subIndex));
            if (!reverse && subIndex === currentWord.length) {
                const pauseTimeout = setTimeout({
                    "useTypewriter.useEffect.pauseTimeout": ()=>{
                        setReverse(true);
                    }
                }["useTypewriter.useEffect.pauseTimeout"], pauseDuration);
                return ({
                    "useTypewriter.useEffect": ()=>clearTimeout(pauseTimeout)
                })["useTypewriter.useEffect"];
            }
            if (reverse && subIndex === 0) {
                setReverse(false);
                setIndex({
                    "useTypewriter.useEffect": (prev)=>(prev + 1) % words.length
                }["useTypewriter.useEffect"]);
                return;
            }
            const jitter = Math.floor(Math.random() * 120);
            const baseSpeed = reverse ? deleteSpeed : typeSpeed;
            const timeout = setTimeout({
                "useTypewriter.useEffect.timeout": ()=>{
                    setSubIndex({
                        "useTypewriter.useEffect.timeout": (prev)=>prev + (reverse ? -1 : 1)
                    }["useTypewriter.useEffect.timeout"]);
                }
            }["useTypewriter.useEffect.timeout"], Math.max(baseSpeed, jitter));
            return ({
                "useTypewriter.useEffect": ()=>clearTimeout(timeout)
            })["useTypewriter.useEffect"];
        }
    }["useTypewriter.useEffect"], [
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
_s(useTypewriter, "T7L7Q41X7n6pQXAgq17vWlNaq0w=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "caseStudies",
    ()=>caseStudies,
    "experiences",
    ()=>experiences,
    "heroPhrases",
    ()=>heroPhrases,
    "heroSubheadline",
    ()=>heroSubheadline,
    "profile",
    ()=>profile,
    "skillGroups",
    ()=>skillGroups
]);
const profile = {
    name: "Samuel Juan Pranoto",
    shortName: "Samuel Juan",
    company: "Kick Avenue",
    location: "Jakarta, Indonesia",
    email: "samueljuan@example.com",
    linkedInUrl: "https://www.linkedin.com/in/samueljuan/"
};
const heroPhrases = [
    "a Product Associate",
    "a Technical Bridge Builder",
    "an End-to-End Product Owner",
    "a QA Automation Enthusiast"
];
const heroSubheadline = `at ${profile.company} • ${profile.location}`;
const experiences = [
    {
        company: "Kick Avenue",
        role: "Product Associate",
        period: "Jul 2024 - Present",
        highlights: [
            "Owned 15+ PRDs with clear requirements, user flows, and acceptance criteria.",
            "Built Figma wireframes and aligned stakeholders with engineering on scope and APIs.",
            "Acted as the technical bridge between product, engineering, and QA teams.",
            "Shipped reward system improvements with 90% sprint completion rate.",
            "Delivered 100+ Playwright automated tests and 500+ manual test cases."
        ]
    },
    {
        company: "KarirLab",
        role: "Customer Success & Automation",
        period: "Feb 2023 - Jun 2024",
        highlights: [
            "Maintained 95% customer satisfaction through feedback loops and proactive support.",
            "Automated WhatsApp blast workflows with Selenium for 96% efficiency gains.",
            "Built an internal dashboard to monitor engagement and operational KPIs."
        ]
    },
    {
        company: "MSIB Kampus Merdeka",
        role: "Communication & Community Engagement",
        period: "Nov 2021 - Dec 2022",
        highlights: [
            "Supported communications for 65k+ students across program cohorts.",
            "Coordinated engagement with 250 partner representatives.",
            "Led community initiatives and large-scale coordination efforts."
        ]
    }
];
const caseStudies = [
    {
        title: "Platform Revamp at Kick Avenue",
        role: "Product Associate",
        duration: "2024 - Present",
        description: "Problem: legacy platform workflows slowed delivery. Approach: authored PRDs, mapped user flows in Figma, and aligned APIs with engineering. Solution: redesigned flows and automated QA coverage. Impact: accelerated sprint delivery and improved release confidence.",
        achievements: [
            "Delivered 15+ PRDs with clear requirements and acceptance criteria.",
            "Reached 90% sprint completion on reward system improvements.",
            "Built 100+ Playwright tests and 500+ manual cases for critical flows."
        ],
        highlight: true
    },
    {
        title: "Automation at KarirLab",
        role: "Customer Success & Automation",
        duration: "2023 - 2024",
        description: "Automated WhatsApp broadcast workflows to streamline employer communications and reduce manual overhead.",
        achievements: [
            "Achieved 96% efficiency improvement with Selenium automation.",
            "Sustained 95% customer satisfaction during process changes.",
            "Built a lightweight dashboard to track engagement KPIs."
        ]
    },
    {
        title: "Glints Academy Full-Stack Projects",
        role: "Full-Stack Participant",
        duration: "2021",
        description: "Delivered product-ready web apps with end-to-end feature flows. Built responsive front-end with React.js and integrated APIs for real-world use cases.",
        achievements: [
            "Shipped multiple React.js apps with clean UI and state management.",
            "Integrated REST APIs for authentication and data CRUD flows.",
            "Documented product requirements and demoed working MVPs."
        ]
    },
    {
        title: "Community Leadership at MSIB",
        role: "Communication & Community Engagement",
        duration: "2021 - 2022",
        description: "Scaled communications for a national program and supported community activation events.",
        achievements: [
            "Reached 65k+ students and 250 partner representatives.",
            "Coordinated a festival with 25+ partners across cohorts.",
            "Streamlined program communications and community support."
        ]
    }
];
const skillGroups = [
    {
        title: "Product & Strategy",
        skills: [
            "Product Management",
            "Technical Product Management",
            "Product Development",
            "PRD Writing",
            "Requirement Analysis",
            "User Flows",
            "Feature Prioritization",
            "Roadmapping",
            "Acceptance Criteria",
            "User Research",
            "Process Improvement",
            "Data Analysis"
        ]
    },
    {
        title: "Agile Delivery",
        skills: [
            "Agile Methodologies",
            "Sprint Planning",
            "Grooming Sessions",
            "Daily Stand-ups",
            "Retrospectives"
        ]
    },
    {
        title: "QA & Testing",
        skills: [
            "Quality Assurance",
            "Test Automation",
            "Playwright",
            "Manual Testing",
            "Regression Testing",
            "API Testing",
            "Postman",
            "Selenium"
        ]
    },
    {
        title: "Design & UX",
        skills: [
            "User Experience (UX)",
            "Figma",
            "Dashboard Design"
        ]
    },
    {
        title: "Tools & Platforms",
        skills: [
            "Jira",
            "Confluence",
            "Git",
            "DBeaver"
        ]
    },
    {
        title: "Tech Stack",
        skills: [
            "React.js",
            "Next.js",
            "JavaScript"
        ]
    },
    {
        title: "Leadership & Communication",
        skills: [
            "Cross-Functional Team Leadership",
            "Stakeholder Communication",
            "Customer Success Management",
            "Customer Satisfaction",
            "Community Management",
            "Program Coordination",
            "Crisis Communications"
        ]
    },
    {
        title: "Languages",
        skills: [
            "English",
            "Bahasa Indonesia"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Hero.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTypewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useTypewriter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Hero() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTypewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypewriter"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroPhrases"], 90, 45, 1800);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headline,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prefix,
                                    children: "I'm"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlight,
                                    children: text
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cursor,
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 21,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subheadline,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSubheadline"]
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 26,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#projects",
                                    className: "btn btn-primary",
                                    children: "View Case Studies"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#contact",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnOutline,
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 31,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 27,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 20,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Hero.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(Hero, "ItLlsOVRwruEvL/U/GFkMFYPej4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useTypewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTypewriter"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/About.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "About-module__vqXTeW__content",
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
    const aboutCopy = [
        "Product Associate at Kick Avenue with a technical focus on PRD creation, requirement analysis, and cross-functional execution. I translate business goals into clear user flows, acceptance criteria, and delivery plans that keep engineering and stakeholders aligned.",
        "My experience spans product delivery, QA automation, and customer success. I build Playwright suites to safeguard releases, collaborate in Agile rituals, and use data-informed insights to improve user experience and operational outcomes."
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
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content} animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                    children: aboutCopy.map((paragraph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                            children: paragraph
                        }, paragraph, false, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 22,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/About.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 14,
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
  "bulletItem": "Experience-module__HaXZMW__bulletItem",
  "bullets": "Experience-module__HaXZMW__bullets",
  "company": "Experience-module__HaXZMW__company",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Experience() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
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
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeline,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"].map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
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
                                            lineNumber: 25,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].company,
                                            children: exp.company
                                        }, void 0, false, {
                                            fileName: "[project]/components/Experience.tsx",
                                            lineNumber: 26,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].period,
                                    children: exp.period
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bullets,
                                    children: exp.highlights.map((highlight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Experience$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletItem,
                                            children: highlight
                                        }, highlight, false, {
                                            fileName: "[project]/components/Experience.tsx",
                                            lineNumber: 31,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Experience.tsx",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, exp.company, true, {
                            fileName: "[project]/components/Experience.tsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Experience.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Experience.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Experience.tsx",
        lineNumber: 11,
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
  "achievementItem": "Projects-module__K3d-Xa__achievementItem",
  "achievements": "Projects-module__K3d-Xa__achievements",
  "body": "Projects-module__K3d-Xa__body",
  "card": "Projects-module__K3d-Xa__card",
  "description": "Projects-module__K3d-Xa__description",
  "duration": "Projects-module__K3d-Xa__duration",
  "grid": "Projects-module__K3d-Xa__grid",
  "highlightCard": "Projects-module__K3d-Xa__highlightCard",
  "meta": "Projects-module__K3d-Xa__meta",
  "role": "Projects-module__K3d-Xa__role",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Projects() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "Case Studies"
                }, void 0, false, {
                    fileName: "[project]/components/Projects.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caseStudies"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} glass animate-on-scroll ${isVisible ? 'is-visible' : ''} ${project.highlight ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlightCard : ''}`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 25,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                                                children: project.role
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 27,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].duration,
                                                children: project.duration
                                            }, void 0, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 28,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 26,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 30,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].achievements,
                                        children: project.achievements.map((achievement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].achievementItem,
                                                children: achievement
                                            }, achievement, false, {
                                                fileName: "[project]/components/Projects.tsx",
                                                lineNumber: 33,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Projects.tsx",
                                        lineNumber: 31,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Projects.tsx",
                                lineNumber: 24,
                                columnNumber: 29
                            }, this)
                        }, project.title, false, {
                            fileName: "[project]/components/Projects.tsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Projects.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Projects.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Projects.tsx",
        lineNumber: 11,
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
"[project]/components/Skills.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "Skills-module__P7wDQq__card",
  "grid": "Skills-module__P7wDQq__grid",
  "icon": "Skills-module__P7wDQq__icon",
  "list": "Skills-module__P7wDQq__list",
  "tag": "Skills-module__P7wDQq__tag",
  "title": "Skills-module__P7wDQq__title",
});
}),
"[project]/components/Skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Skills.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Skills() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const iconMap = {
        Figma: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "5.5",
                    r: "3.2",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "12",
                    r: "3.2",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 14,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "18.5",
                    r: "3.2",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "15",
                    cy: "8.5",
                    r: "3.2",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "15",
                    cy: "15.5",
                    r: "3.2",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.tsx",
            lineNumber: 12,
            columnNumber: 13
        }, this),
        Playwright: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "4",
                    width: "8",
                    height: "8",
                    rx: "1.5",
                    fill: "currentColor",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 22,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "13",
                    y: "12",
                    width: "8",
                    height: "8",
                    rx: "1.5",
                    fill: "currentColor",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 13l4 2.5-4 2.5z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this),
        Jira: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 3l6 6-6 6-6-6 6-6z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 13l4 4-4 4-4-4 4-4z",
                    fill: "currentColor",
                    opacity: "0.7"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, this),
        "React.js": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "2.2",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "9",
                    ry: "3.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "9",
                    ry: "3.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.4",
                    transform: "rotate(60 12 12)"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "12",
                    cy: "12",
                    rx: "9",
                    ry: "3.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.4",
                    transform: "rotate(120 12 12)"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this),
        Postman: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "9",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.6"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "15",
                    cy: "9",
                    r: "1.4",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 44,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 14l6-3",
                    stroke: "currentColor",
                    strokeWidth: "1.6",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "section-title",
                    children: "Skills"
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skillGroups"].map((group, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                            style: {
                                transitionDelay: `${index * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: group.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.tsx",
                                    lineNumber: 64,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                                    children: group.skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag,
                                            children: [
                                                iconMap[skill] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                                    children: iconMap[skill]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Skills.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 60
                                                }, this),
                                                skill
                                            ]
                                        }, skill, true, {
                                            fileName: "[project]/components/Skills.tsx",
                                            lineNumber: 67,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, group.title, true, {
                            fileName: "[project]/components/Skills.tsx",
                            lineNumber: 59,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Skills.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Skills.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_s(Skills, "HYNv5rEifZ1S+vJhPkZEtot8gHg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Contact-module__OWeMSG__actions",
  "btnOutline": "Contact-module__OWeMSG__btnOutline",
  "content": "Contact-module__OWeMSG__content",
  "details": "Contact-module__OWeMSG__details",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/portfolio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Contact() {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const { email, linkedInUrl } = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Get In Touch"
                    }, void 0, false, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                        children: "Open to Product opportunities in Jakarta/remote. Feel free to reach out for collaboration, product roles, or a quick conversation."
                    }, void 0, false, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 19,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                        children: [
                            "Email: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${email}`,
                                children: email
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 24,
                                columnNumber: 32
                            }, this),
                            " |",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: linkedInUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${email}`,
                                className: "btn btn-primary",
                                children: "Email Me"
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 30,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: linkedInUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnOutline,
                                children: "LinkedIn"
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Contact.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Contact.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 12,
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

//# sourceMappingURL=_250453bf._.js.map