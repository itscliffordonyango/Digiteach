import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout.jsx'

const Home = lazy(() => import('../pages/Home.jsx'))

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}


