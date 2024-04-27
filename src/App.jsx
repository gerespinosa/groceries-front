import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CONTEXT
import { AccessProvider } from './context/access.context.jsx'

// PAGES
import LoginPage from './pages/Login/LoginPage.jsx'
import MainPage from './pages/Main/MainPage.jsx'

function App() {

  return (
    <BrowserRouter>
      <AccessProvider>
        <Routes>
          <Route path='/' element={<LoginPage />} />

          <Route path='/main' element={<MainPage />} />

        </Routes>
      </AccessProvider>
    </BrowserRouter>
  )
}

export default App
