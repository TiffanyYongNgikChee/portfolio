import React from 'react'

const roles = [
  {
    company: 'Lidl',
    role: 'Customer Assistant',
    location: 'Galway, Ireland',
    dates: 'Aug 2026 – Present',
    bullets: [
      'Support daily store operations through stock replenishment and product organisation',
      'Work efficiently as part of a team in a fast-paced retail environment'
    ]
  },
  {
    company: 'Osteria Da Simone',
    role: 'Waitress',
    location: 'Galway, Ireland',
    dates: 'May 2024 – Jul 2026',
    bullets: [
      'Provided customer service, handled payments, and supported daily restaurant operations',
      'Developed communication, teamwork and problem-solving skills while managing multiple priorities'
    ]
  },
  {
    company: 'Clayton Hotel',
    role: 'Event Service Staff',
    location: 'Galway, Ireland',
    dates: 'Jun 2024 – Jul 2024',
    bullets: [
      'Provided professional food and beverage service during busy events',
      'Maintained high service standards under time pressure'
    ]
  }
]

export default function Experience(){
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-6">
      <h2 id="experience-heading" className="text-xl font-semibold">Experience</h2>
      <div className="mt-3 space-y-4 text-gray-700">
        <p>Customer-facing roles in retail and hospitality that developed strong communication, teamwork and time-management skills transferable to engineering teams.</p>
        {roles.map(r=> (
          <div key={r.company}>
            <div className="font-medium">{r.company} — <span className="font-normal">{r.role}</span> <span className="text-sm text-gray-500">{r.dates} • {r.location}</span></div>
            <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
              {r.bullets.map(b=> <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
