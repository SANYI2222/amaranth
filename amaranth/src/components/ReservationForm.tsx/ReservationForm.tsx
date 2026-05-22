/**
 * ReservationForm component - online booking form with basic validation
 */

import React, { useState } from 'react'

/**
 * ReservationData interface - form data shape
 */
interface ReservationData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
}

/**
 * ReservationForm component - handles user reservations locally and shows feedback
 */
export default function ReservationForm(): JSX.Element {
  const [form, setForm] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  })
  const [message, setMessage] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  /**
   * handleChange - updates the form state
   */
  function handleChange<K extends keyof ReservationData>(key: K, value: ReservationData[K]) {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  /**
   * validate - basic client-side validation
   */
  function validate(data: ReservationData) {
    if (!data.name.trim()) return 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return 'Please enter a valid email.'
    if (!data.phone.trim()) return 'Please enter a phone number.'
    if (!data.date) return 'Please choose a date.'
    if (!data.time) return 'Please choose a time.'
    return null
  }

  /**
   * handleSubmit - called when the form is submitted
   */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err = validate(form)
    if (err) {
      setMessage(err)
      return
    }
    setSubmitting(true)
    setMessage(null)

    // Simulate a network request. In production, replace with real API call.
    await new Promise(r => setTimeout(r, 900))
    setSubmitting(false)
    setMessage('Reservation request received. We will contact you to confirm.')
    setForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2
    })
  }

  return (
    <div className="max-w-3xl bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-xl font-semibold text-[#6B3A21]">Reserve a Table</h3>
      <p className="mt-2 text-sm text-slate-600">Fill out the form and we will confirm your booking shortly.</p>

      <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3" onSubmit={handleSubmit}>
        <input
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          placeholder="Full name"
          className="p-3 rounded-md border border-transparent shadow-sm"
        />
        <input
          value={form.email}
          onChange={e => handleChange('email', e.target.value)}
          placeholder="Email"
          className="p-3 rounded-md border border-transparent shadow-sm"
        />
        <input
          value={form.phone}
          onChange={e => handleChange('phone', e.target.value)}
          placeholder="Phone"
          className="p-3 rounded-md border border-transparent shadow-sm"
        />
        <input
          value={form.date}
          onChange={e => handleChange('date', e.target.value)}
          type="date"
          className="p-3 rounded-md border border-transparent shadow-sm"
        />
        <input
          value={form.time}
          onChange={e => handleChange('time', e.target.value)}
          type="time"
          className="p-3 rounded-md border border-transparent shadow-sm"
        />
        <select
          value={form.guests}
          onChange={e => handleChange('guests', Number(e.target.value))}
          className="p-3 rounded-md border border-transparent shadow-sm"
        >
          {[1, 2, 3, 4, 5, 6].map(n => (
            <option key={n} value={n}>
              {n} guest{n > 1 ? 's' : ''}
            </option>
          ))}
        </select>

        <div className="md:col-span-2 flex items-center justify-between mt-2">
          <div className="text-sm text-slate-600">{message}</div>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2 rounded-md bg-[#C66C2E] text-white font-medium shadow disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Request Reservation'}
          </button>
        </div>
      </form>
    </div>
  )
}