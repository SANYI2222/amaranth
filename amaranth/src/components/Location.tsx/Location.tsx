/**
 * Location component - address, hours and embedded map
 */

import React from 'react'

/**
 * Location component - displays contact details and map
 */
export default function Location(): JSX.Element {
  const address = '123 Amaranth Avenue, Cityville'
  const mapsLink = 'https://www.google.com/maps/search/?api=1&query=123+Amaranth+Avenue'
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="md:flex gap-6">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold text-[#6B3A21]">Find Us</h3>
          <p className="mt-2 text-slate-700">{address}</p>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-[#7A3F24]">Hours</h4>
            <ul className="mt-2 text-sm text-slate-600">
              <li>Tue–Sat: 5:30 PM – 11:00 PM</li>
              <li>Sun: 5:00 PM – 10:00 PM</li>
              <li>Mon: Closed</li>
            </ul>
            <a href={mapsLink} target="_blank" rel="noreferrer" className="inline-block mt-4 px-4 py-2 rounded-md bg-[#F3E0D2] text-[#6B3A21] shadow">
              Open in Maps
            </a>
          </div>
        </div>

        <div className="mt-4 md:mt-0 md:flex-1">
          <iframe
            title="restaurant-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019024750289!2d-122.41941568468142!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2b2b2b2b%3A0x0000000000000000!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1610000000000"
            className="w-full h-48 rounded-lg border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}