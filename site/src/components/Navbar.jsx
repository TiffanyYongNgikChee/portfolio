import React from 'react'

export default function Navbar(){
  return (
    <header className="border-b py-4 bg-white/80 backdrop-blur-sm sticky top-0 z-30" role="banner">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-[var(--brand)]">Tiffany Yong</div>
        <nav aria-label="Primary" className="space-x-4 text-sm text-[var(--muted)] hidden md:block">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
