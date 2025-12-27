'use client'

import styles from './Skills.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Skills() {
    const { ref, isVisible } = useScrollAnimation()

    const iconMap: Record<string, JSX.Element> = {
        Figma: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="9" cy="5.5" r="3.2" fill="currentColor" />
                <circle cx="9" cy="12" r="3.2" fill="currentColor" />
                <circle cx="9" cy="18.5" r="3.2" fill="currentColor" />
                <circle cx="15" cy="8.5" r="3.2" fill="currentColor" />
                <circle cx="15" cy="15.5" r="3.2" fill="currentColor" />
            </svg>
        ),
        Playwright: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.8" />
                <rect x="13" y="12" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.8" />
                <path d="M11 13l4 2.5-4 2.5z" fill="currentColor" />
            </svg>
        ),
        Jira: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l6 6-6 6-6-6 6-6z" fill="currentColor" />
                <path d="M12 13l4 4-4 4-4-4 4-4z" fill="currentColor" opacity="0.7" />
            </svg>
        ),
        "React.js": (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="2.2" fill="currentColor" />
                <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)" />
            </svg>
        ),
        Postman: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="15" cy="9" r="1.4" fill="currentColor" />
                <path d="M9 14l6-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        )
    }

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
    ]

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div
                    ref={ref}
                    className={styles.grid}
                >
                    {skillGroups.map((group, index) => (
                        <div
                            key={group.title}
                            className={`${styles.card} glass animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <h3 className={styles.title}>{group.title}</h3>
                            <div className={styles.list}>
                                {group.skills.map((skill) => (
                                    <span key={skill} className={styles.tag}>
                                        {iconMap[skill] && <span className={styles.icon}>{iconMap[skill]}</span>}
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
