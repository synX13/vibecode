import Navbar from '@/components/sections/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import AWS from '@/components/sections/aws'
import Kubernetes from '@/components/sections/kubernetes'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AWS />
      <Kubernetes />
      <Contact />
    </main>
  )
}