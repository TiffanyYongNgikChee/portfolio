import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import OtherProjects from './sections/OtherProjects'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-gray-800 bg-white antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-white p-2 rounded text-sm">Skip to main content</a>
      <Navbar />
      <main id="main" className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OtherProjects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
