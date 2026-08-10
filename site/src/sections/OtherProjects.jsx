import React from 'react'

const others = [
  {name: 'SHA-256 Implementation', repo: 'https://github.com/TiffanyYongNgikChee/computational_theory'},
  {name: 'Graph Theory Algorithms', repo: 'https://github.com/TiffanyYongNgikChee/GraphTheory2025'},
  {name: 'Neural Networks', repo: 'https://github.com/TiffanyYongNgikChee/ai-neural-network'},
  {name: 'Machine Learning Labs', repo: 'https://github.com/TiffanyYongNgikChee/machine-learning'},
  {name: 'Deutsch–Jozsa (Quantum)', repo: 'https://github.com/TiffanyYongNgikChee/emerging-technologies'}
]

export default function OtherProjects(){
  return (
    <section aria-labelledby="other-projects-heading" className="py-8">
      <h2 id="other-projects-heading" className="text-lg font-semibold">Other Projects</h2>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {others.map(o=> (
          <li key={o.name}><a className="text-slate-900" href={o.repo} target="_blank" rel="noreferrer">{o.name}</a></li>
        ))}
      </ul>
    </section>
  )
}
