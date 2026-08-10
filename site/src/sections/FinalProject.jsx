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
          <p className="mt-3 text-gray-700">My final year project explored encrypted inference (live CNN on MNIST) using homomorphic encryption. It was a challenging project that taught me a lot about systems engineering, performance trade-offs and reproducible experiments. It was especially hard when debugging low-level library integrations, managing long-running experiments, and keeping the UI responsive while streaming results — but overcoming those problems is what made the project rewarding.</p>
          <p className="mt-3 text-gray-700">Key takeaways: reliable logging and small reproducible steps helped reduce the cognitive load; automating dataset and experiment orchestration saved time; and writing clear documentation made it easier to revisit experiments after long runs.</p>
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
