/**
 * PhotoGallery component - grid of food photography
 */

import React from 'react'

/**
 * PhotoGallery component - displays a warm-toned photography grid
 */
export default function PhotoGallery(): JSX.Element {
  const photos = [
    'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/7259b68a-5394-410f-9f78-714dd40eb99b.jpg',
    'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/5b18c996-d06e-4d53-9f35-7cb40e3da7e3.jpg',
    'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/68c882f3-21dd-4c2a-80bf-071f8b230d36.jpg',
    'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/a3ed97d1-4f87-4131-acfc-af093138bd18.jpg',
    'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/e22dd4b9-673d-46b8-a853-7df8f05f2ea7.jpg',
    'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/5aed0703-5578-418f-95ed-52fd4c994c15.jpg'
  ]

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-[#6B3A21] mb-4">Moments & Dishes</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`Photo ${i + 1}`} className="w-full h-32 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  )
}