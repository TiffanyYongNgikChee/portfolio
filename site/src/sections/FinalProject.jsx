import React from 'react'
import poster from '../assets/fyp_poster.svg'
import photo from '../assets/fyp_photo.svg'

export default function FinalProject(){
  return (
    <section id="final-project" className="py-12" aria-labelledby="final-project-heading">
      <h2 id="final-project-heading" className="text-2xl font-semibold">Final Year Project — Homomorphic Encryption Explorer</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-sm text-gray-700">Grade achieved: <strong>82%</strong></p>
          <h3 className="mt-3 text-lg font-medium">The Thought Behind My Final Year Project</h3>
          <p className="mt-3 text-gray-700">I wanted my final year project to be more than just a technical exercise. I wanted to build something that could solve a problem I could actually see in everyday life.</p>

          <p className="mt-3 text-gray-700">I noticed that people can often struggle to find the right information or access the services they need. Information may exist, but it is not always easy to discover, understand, or access in one place.</p>

          <p className="mt-3 text-gray-700">This led me to the idea of building a web application that could connect users with relevant information and services in a simpler and more accessible way.</p>

          <p className="mt-3 text-gray-700">Rather than starting with the technology, I started with the problem: <strong>How can I make it easier for people to find what they need?</strong></p>

          <p className="mt-3 text-gray-700">From there, I designed and developed the application from the ground up, turning the initial idea into a complete deployed web application.</p>

          <p className="mt-3 text-gray-700">For me, the most valuable part of the project was not just building the final product. It was learning how to take an idea from a real-world problem, turn it into a technical solution, and make decisions along the way based on what would be most useful for the user.</p>

          <p className="mt-3 text-gray-700">This project shaped the way I approach software development today: <strong>start with the problem, understand the user, and then build the technology around it.</strong></p>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 p-2 rounded shadow-sm">
            <img src={poster} alt="Final year project poster" className="w-full object-cover rounded" />
          </div>
          <div className="bg-gray-50 p-2 rounded shadow-sm">
            <img src={photo} alt="Poster photo" className="w-full object-cover rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
