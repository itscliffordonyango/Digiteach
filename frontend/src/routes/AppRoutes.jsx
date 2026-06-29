import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout.jsx'

const Home = lazy(() => import('../pages/Home.jsx'))
const Terms = lazy(() => import('../pages/Terms.jsx'))
const Privacy = lazy(() => import('../pages/Privacy.jsx'))
const Cookies = lazy(() => import('../pages/Cookies.jsx'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>

          {/* Main Pages */}
          <Route path="/" element={<Home />} />

          {/* Legal Pages */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />

        </Route>
      </Routes>
    </Suspense>
  )
}