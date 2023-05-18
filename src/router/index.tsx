import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import { routePaths } from './routePaths'

const Home = React.lazy(() => import('../components/Home'))
const Details = React.lazy(() => import('../components/Details'))

const Routers = () => {
  return (
    <React.Suspense fallback="Loading...">
      <Router>
        <Routes>
          <Route path={routePaths.home} element={<AppLayout> <Home /> </AppLayout>} />
          <Route path={routePaths.details} element={<AppLayout> <Details /> </AppLayout>} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default Routers