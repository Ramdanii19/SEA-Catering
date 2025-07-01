import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10">
      <h2 className="text-xl font-semibold">SEA Catering 🥗</h2>
      <p className="text-sm mt-2">Your daily dose of fresh and healthy meals, delivered right to your door.</p>

      {/* Copyright */}
      <p className="text-xs text-gray-400 mt-4">© {new Date().getFullYear()} SEA Catering. All rights reserved.</p>
    </footer>
  )
}

export default Footer