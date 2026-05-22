/**
 * Header component - top navigation with logo and anchors
 */

import React from 'react'
import { Phone, MapPin } from 'lucide-react'

/**
 * Header component - renders logo and navigation links
 */
export default function Header(): JSX.Element {
  return (
    <header className="backdrop-blur-sm bg-white/60 sticky top-0 z-40 border-b border-transparent/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-12 h-12 bg-gradient-to-br from-[#FDE8D0] to-[#F9C99B] flex items-center justify-center shadow">
            <span className="font-serif text-xl font-semibold text-[#7A3F24]">A</span>
          </div>
          <div>
            <div className="text-lg font-semibold text-[#6B3A21]">Amaranth</div>
            <div className="text-xs text-slate-500">Fine Dining & Seasonal Tastes</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#menu" className="text-slate-700 hover:text-[#7A3F24]">Menu</a>
          <a href="#reserve" className="text-slate-700 hover:text-[#7A3F24]">Reserve</a>
          <a href="#about" className="text-slate-700 hover:text-[#7A3F24]">About</a>
          <a href="#photos" className="text-slate-700 hover:text-[#7A3F24]">Photos</a>
          <a href="#location" className="text-slate-700 hover:text-[#7A3F24]">Location</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#7A3F24]">
            <Phone size={16} /> <span className="hidden sm:inline">+1 (234) 567-890</span>
          </a>
          <a href="#location" className="hidden sm:flex items-center gap-2 text-sm text-slate-700 hover:text-[#7A3F24]">
            <MapPin size={16} /> <span className="hidden md:inline">Find us</span>
          </a>
        </div>
      </div>
    </header>
  )
}