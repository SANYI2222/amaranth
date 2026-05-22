/**
 * About component - restaurant introduction and philosophy
 */

import React from 'react'

/**
 * About component - shows brand story and atmosphere
 */
export default function About(): JSX.Element {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="md:flex gap-6 items-center">
        <img
          src="https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/9b579234-85d7-44b3-94f3-e474de3d83f7.jpg"
          alt="Interior"
          className="w-full md:w-1/2 h-56 object-cover rounded-lg"
        />
        <div className="mt-4 md:mt-0 md:flex-1">
          <h3 className="text-xl font-semibold text-[#6B3A21]">Our Story</h3>
          <p className="mt-3 text-slate-700">
            At Amaranth we celebrate seasonal produce and timeless techniques. Our menu is curated to highlight
            craftsmanship, warm hospitality, and an intimate atmosphere — perfect for special evenings and quiet
            celebrations.
          </p>
          <ul className="mt-3 text-sm text-slate-600 space-y-2">
            <li>• Locally-sourced ingredients</li>
            <li>• Thoughtful wine pairings</li>
            <li>• Seasonal tasting menus</li>
          </ul>
        </div>
      </div>
    </div>
  )
}