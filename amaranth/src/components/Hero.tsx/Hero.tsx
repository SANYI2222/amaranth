/**
 * Hero component - main visual banner with CTA
 */

import React from 'react'

/**
 * Hero component - displays large food photography, title and CTA to reservation
 */
export default function Hero(): JSX.Element {
  return (
    <section className="mt-8 rounded-2xl overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src="https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/1d16e4a7-76dc-4769-9fd9-3f9baed399fd.jpg"
          alt="Featured Dish"
          className="w-full h-[420px] object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
        <div className="absolute left-6 lg:left-12 bottom-6 lg:bottom-12 max-w-xl">
          <h1 className="text-3xl lg:text-5xl font-serif text-[#6B3A21] leading-tight">Amaranth — Seasonal Fine Dining</h1>
          <p className="mt-3 text-slate-700 max-w-md">A warm and elegant dining experience celebrating local produce and mindful flavors.</p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#reserve"
              className="inline-block px-5 py-3 rounded-md bg-[#C66C2E] text-white font-medium shadow hover:brightness-95"
            >
              Reserve a Table
            </a>
            <a href="#menu" className="inline-block px-4 py-2 rounded-md bg-white/80 text-[#6B3A21] shadow">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}