import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t mt-16 py-8">
      <div className="max-w-5xl mx-auto px-6 text-sm text-gray-600 flex justify-between">
        <div>© {new Date().getFullYear()} Tiffany Yong</div>
        <div>Built with React + Vite</div>
      </div>
    </footer>
  )
}
