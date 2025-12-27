'use client'

import styles from './Skills.module.css'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Skills() {
    const { ref, isVisible } = useScrollAnimation()

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
