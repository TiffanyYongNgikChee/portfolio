import React from 'react'

const groups = [
  { title: 'Languages', items: ['Python','Java','C#','JavaScript','TypeScript','SQL','Rust'] },
  { title: 'Frameworks / Technologies', items: ['.NET','Angular','Ionic','TensorFlow','Keras','Firebase','Docker','gRPC'] },
  { title: 'Areas', items: ['Software Engineering','Machine Learning','Distributed Systems','Cryptography','Algorithms'] }
]

export default function Skills(){
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-8">
      <h2 id="skills-heading" className="text-2xl font-semibold">Technical Skills</h2>
      <div className="mt-4 grid sm:grid-cols-3 gap-4">
        {groups.map(g=> (
          <div key={g.title} className="bg-gray-50 p-4 rounded-sm">
            <h3 className="font-medium">{g.title}</h3>
            <div className="mt-2 text-sm text-gray-700 space-y-1">
              {g.items.map(i=> <div key={i}>• {i}</div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
