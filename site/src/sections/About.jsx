import React from 'react'
import profile400 from '../assets/profile-400.jpg'
import profile800 from '../assets/profile-800.jpg'

export default function About(){
  return (
    <section id="about" aria-labelledby="about-heading" className="py-8">
      <h2 id="about-heading" className="text-2xl font-semibold">About</h2>
      <div className="mt-4 relative">
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
          <div className="md:flex md:items-start">
            <div className="md:shrink-0 mr-4 -mt-12 md:-mt-16">
              <img src={profile400} srcSet={`${profile400} 400w, ${profile800} 800w`} sizes="120px" alt="Tiffany Yong" className="w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-[var(--bg)] object-cover" />
            </div>
            <div>
              <p className="text-[var(--muted)]">Software Development graduate with a strong foundation in algorithms, distributed systems, and practical application development. I enjoy building production-oriented software that balances performance, robustness and maintainability. My background includes full-stack projects, mobile applications and research-grade systems for privacy-preserving computation.</p>
              <div className="mt-4">
                <span className="pill">Open to Graduate roles in Ireland</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
