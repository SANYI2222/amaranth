/**
 * App - application root (public for testing)
 *
 * This App renders routes directly so the site is publicly accessible for testing.
 * Note: Removing AuthGate makes the site unprotected. Re-add or implement server auth for production.
 */

import React from 'react'
import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'

/**
 * App component - root router (public)
 */
export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}
