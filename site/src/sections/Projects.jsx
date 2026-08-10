import React, { useState, useMemo } from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const FILTERS = ['All','Systems','Mobile','ML']

export default function Projects(){
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(()=>{
    if(filter === 'All') return projects
    if(filter === 'Mobile') return projects.filter(p=> p.tech.join(' ').toLowerCase().includes('ionic') || p.tech.join(' ').toLowerCase().includes('mobile'))
    if(filter === 'ML') return projects.filter(p=> p.tech.join(' ').toLowerCase().includes('tensor') || p.tech.join(' ').toLowerCase().includes('machine'))
    if(filter === 'Systems') return projects.filter(p=> p.tech.join(' ').toLowerCase().includes('rust') || p.tech.join(' ').toLowerCase().includes('grpc') || p.tech.join(' ').toLowerCase().includes('docker'))
    return projects
  },[filter])

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-10">
      <h2 id="projects-heading" className="text-2xl font-semibold">Featured Projects</h2>
      <div className="mt-4 flex items-center gap-3">
        {FILTERS.map(f=> (
          <button key={f} onClick={()=>setFilter(f)} className={`text-sm ${filter===f? 'btn-accent':'btn-outline'}`}>{f}</button>
        ))}
        <div className="ml-auto text-sm text-[var(--muted)]">Showing {filtered.length} projects</div>
      </div>
      <div className="mt-6 grid project-grid gap-6">
        {filtered.map(p=> <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}
