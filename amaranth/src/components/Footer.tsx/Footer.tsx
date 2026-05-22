/**
 * Footer component - bottom site information and credits
 */

import React from 'react'
import { Instagram, Facebook, Mail } from 'lucide-react'

/**
 * Footer component - renders small print and social links
 */
export default function Footer(): JSX.Element {
  return (
    <footer className="mt-12 bg-[#FAF6F2] border-t border-transparent/20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Amaranth. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-slate-700 hover:text-[#7A3F24]"><Instagram size={16} /></a>
          <a href="#" className="text-slate-700 hover:text-[#7A3F24]"><Facebook size={16} /></a>
          <a href="mailto:hello@amaranth.example" className="text-slate-700 hover:text-[#7A3F24]"><Mail size={16} /></a>
        </div>
      </div>
    </footer>
  )
}