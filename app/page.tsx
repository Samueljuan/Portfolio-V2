import Hero from '@/components/Hero'
import About from '@/components/About'
import Proof from '@/components/Proof'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import ScrollSpy from '@/components/ScrollSpy'

export default function Home() {
    return (
        <>
            <ScrollSpy />
            <Hero />
            <About />
            <Proof />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </>
    )
}
