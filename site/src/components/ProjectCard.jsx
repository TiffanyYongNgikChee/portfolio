import React from 'react'

export default function ProjectCard({p}){
  return (
    <article className="border rounded-sm p-4 sm:p-5 project-card bg-white flex flex-col h-full">
      <div className="h-40 bg-gray-100 rounded-sm overflow-hidden flex items-center justify-center text-gray-400">
          {p.image ? <img src={p.image} alt={p.name} className="w-full h-full object-cover" 
            srcSet={p.imageSmall ? `${p.imageSmall} 400w, ${p.image} 800w` : undefined}
            sizes="(max-width: 768px) 100vw, 45vw"
          /> : <div className="px-3 text-sm">Screenshot</div>}
      </div>
      <div className="mt-3 flex-1">
        <h3 className="font-semibold">{p.name}</h3>
        <p className="mt-1 text-gray-600 text-sm">{p.short}</p>
        <p className="mt-2 text-sm text-slate-700">{p.why}</p>
        {p.bullets && (
          <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
            {p.bullets.slice(0,3).map(b=> <li key={b}>{b}</li>)}
          </ul>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {p.tech.map(t=> <span key={t} className="text-xs bg-[var(--bg)] px-2 py-0.5 rounded text-[var(--muted)]">{t}</span>)}
        </div>
        <div className="flex items-center gap-3">
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm text-sky-600">Demo</a>}
          <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm text-slate-900">Code</a>
        </div>
      </div>
    </article>
  )
}
