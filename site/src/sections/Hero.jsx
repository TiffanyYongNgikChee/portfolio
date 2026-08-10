import React from 'react'
import profile400 from '../assets/profile-400.jpg'
import profile800 from '../assets/profile-800.jpg'

export default function Hero(){
  return (
    <section className="py-12">
      <div className="hero-card container mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="hero-badges">
              <div className="hero-badge" style={{background:'#93a1c9'}} />
              <div className="hero-badge" style={{background:'#f19988'}} />
              <div className="hero-badge" style={{background:'#fadccc'}} />
              <div className="hero-badge" style={{background:'#93a1c9'}} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mt-4" style={{fontFamily:'Playfair Display, serif'}}>Tiffany Yong</h1>
            <p className="mt-2 text-[var(--muted)]">Software Development Graduate — Ireland</p>
            <p className="mt-4 text-[var(--muted)] max-w-xl">I build practical, well-tested software systems with a focus on distributed systems, privacy-preserving computation and full-stack applications. Seeking Graduate and Junior Software Engineer roles in Ireland.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="btn-accent">View Projects</a>
              <a href="/TiffanyYongNgikChee.pdf" download className="btn-outline">Download CV</a>
              <a href="https://github.com/TiffanyYongNgikChee" target="_blank" rel="noreferrer" className="btn-outline">GitHub</a>
              <a href="https://linkedin.com/in/tiffanyyong-ngikchee/" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="hero-profile -mt-4 md:mt-0">
              <img src={profile400} srcSet={`${profile400} 400w, ${profile800} 800w`} sizes="(max-width: 768px) 100vw, 25vw" alt="Tiffany Yong" className="w-36 h-36 md:w-56 md:h-56 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
