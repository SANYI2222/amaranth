/**
 * Home page - assembles header, hero, menu, reservation, about, location and footer.
 */

import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MenuSection from '../components/MenuSection'
import ReservationForm from '../components/ReservationForm'
import About from '../components/About'
import Location from '../components/Location'
import PhotoGallery from '../components/PhotoGallery'
import Footer from '../components/Footer'

/**
 * HomePage component - main landing page for the restaurant site
 */
export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9F3] to-white text-slate-800">
      <Header />
      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        <Hero />
        <section id="menu" className="mt-12">
          <MenuSection />
        </section>
        <section id="reserve" className="mt-16">
          <ReservationForm />
        </section>
        <section id="about" className="mt-16">
          <About />
        </section>
        <section id="photos" className="mt-16">
          <PhotoGallery />
        </section>
        <section id="location" className="mt-16 mb-24">
          <Location />
        </section>
      </main>
      <Footer />
    </div>
  )
}