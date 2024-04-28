import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CONTEXT
import { AccessProvider } from './context/access.context.jsx'

// COMPONENTS
import Navbar from './components/Navbar.jsx'

// PAGES
import LoginPage from './pages/Login/LoginPage.jsx'
import MainPage from './pages/Main/MainPage.jsx'

// MIDDLEWARE
import { ProtectedRoutes } from './middleware/ProtectedRoutes.jsx'

function App() {
  return (
    <BrowserRouter>
      <AccessProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='*' element={<Navbar />} /> {/* Navbar for all protected routes */}
            <Route path='/main' element={<MainPage />} />
          </Route>
        </Routes>
      </AccessProvider>
    </BrowserRouter>
  )
}

export default App
