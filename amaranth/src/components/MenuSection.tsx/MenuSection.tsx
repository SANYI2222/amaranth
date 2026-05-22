/**
 * MenuSection component - lists menu categories and items
 */

import React from 'react'
import MenuItemCard from './MenuItemCard'

/**
 * MenuSection component - shows curated dishes with photos and prices
 */
export default function MenuSection(): JSX.Element {
  const starters = [
    {
      name: 'Heirloom Tomato Salad',
      description: 'Basil oil, burrata, aged balsamic',
      price: '$16',
      image: 'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/2fb7406f-cd34-4bf5-9950-1cb0195720dd.jpg'
    },
    {
      name: 'Seared Scallops',
      description: 'Citrus emulsion, pea purée',
      price: '$24',
      image: 'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/762783c3-d22b-46db-92bc-495848ef08e1.jpg'
    }
  ]

  const mains = [
    {
      name: 'Charred Lamb Rack',
      description: 'Rosemary jus, root vegetable confit',
      price: '$38',
      image: 'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/878cd818-852f-4319-822c-d1a3655d3b1a.jpg'
    },
    {
      name: 'Pan-Roasted Salmon',
      description: 'Saffron potatoes, baby spinach',
      price: '$32',
      image: 'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/8954392a-66f7-413b-9b5a-178a0ed3953a.jpg'
    }
  ]

  const desserts = [
    {
      name: 'Molten Chocolate',
      description: 'Sea salt caramel, vanilla gelato',
      price: '$12',
      image: 'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/ffe25d2f-b7de-4009-b4a5-93f813c0bbd6.jpg'
    },
    {
      name: 'Pistachio Panna Cotta',
      description: 'Honey crisp, citrus zest',
      price: '$11',
      image: 'https://pub-cdn.sider.ai/u/U0O9HAR9NX7/web-coder/6a1011e7a419c8a510516f7a/resource/5b22fb34-a3b3-47d3-ae2d-767c1ffec0ad.jpg'
    }
  ]

  return (
    <div className="bg-transparent">
      <h2 className="text-2xl font-semibold text-[#6B3A21] mb-6">Our Menu</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-medium text-[#7A3F24] mb-3">Starters</h3>
          <div className="flex flex-col gap-3">
            {starters.map(item => (
              <MenuItemCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-[#7A3F24] mb-3">Mains</h3>
          <div className="flex flex-col gap-3">
            {mains.map(item => (
              <MenuItemCard key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-[#7A3F24] mb-3">Desserts</h3>
          <div className="flex flex-col gap-3">
            {desserts.map(item => (
              <MenuItemCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}