import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Default from './layouts/Default'
import HomePage from './pages/Home'
import AccountPage from './pages/Account'
import TierPage from './pages/Tier'
import ProjectsPage from './pages/Projects'
import ProjectDetailPage from './pages/Projects/Detail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Default />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/tier' element={<TierPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/project/:id' element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
