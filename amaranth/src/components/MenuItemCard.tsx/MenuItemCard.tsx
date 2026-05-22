/**
 * MenuItemCard component - displays a single menu item card
 */

import React from 'react'

/**
 * Props for MenuItemCard
 */
export interface MenuItemProps {
  /** Menu item name */
  name: string
  /** Short description of the dish */
  description: string
  /** Price string */
  price: string
  /** Image keyword or URL */
  image: string
}

/**
 * MenuItemCard component - visual card for each dish
 */
export default function MenuItemCard({ name, description, price, image }: MenuItemProps): JSX.Element {
  return (
    <div className="flex gap-4 items-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <img src={image} alt={name} className="w-28 h-20 rounded-lg object-cover flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold text-[#5a2f18]">{name}</h3>
          <div className="text-sm font-medium text-[#7A3F24]">{price}</div>
        </div>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
    </div>
  )
}