import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-10" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-2xl font-semibold">Contact</h2>
      <p className="mt-3 text-gray-700">Interested in working together or discussing an opportunity? Reach out:</p>
      <ul className="mt-3 text-sm text-gray-700">
        <li>Email: <a href="mailto:tiffanyyongngikchee1997@gmail.com" className="text-slate-900">tiffanyyongngikchee1997@gmail.com</a></li>
        <li>Phone: <a href="tel:+353831455763" className="text-slate-900">+353 83 145 5763</a></li>
        <li>GitHub: <a href="https://github.com/TiffanyYongNgikChee" target="_blank" rel="noreferrer" className="text-slate-900">github.com/TiffanyYongNgikChee</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/tiffanyyong-ngikchee/" target="_blank" rel="noreferrer" className="text-slate-900">linkedin.com/in/tiffanyyong-ngikchee</a></li>
        <li>CV: <a href="/TiffanyYongNgikChee.pdf" download className="text-slate-900">Download CV (PDF)</a></li>
      </ul>
    </section>
  )
}
