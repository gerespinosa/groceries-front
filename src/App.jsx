import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// CONTEXT
import { AccessProvider } from './context/access.context.jsx'
import { ListsProvider } from './context/lists.context.jsx'

// COMPONENTS
import Navbar from './components/Navbar.jsx'

// PAGES
import LoginPage from './pages/Login/LoginPage.jsx'
import MainPage from './pages/Main/MainPage.jsx'
import ListsPage from './pages/Lists/ListsPage.jsx'
import NewListsPage from './pages/NewList/NewListPage.jsx'

// MIDDLEWARE
import { ProtectedRoutes } from './middleware/ProtectedRoutes.jsx'

function App() {
  return (
    <BrowserRouter>
      <AccessProvider>
        <ListsProvider>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path='*' element={<Navbar />} /> {/* Navbar for all protected routes */}
              <Route path='/main/:userId' element={<MainPage />} />
              <Route path='/user/:userId/lists' element={<ListsPage />} />
              <Route path='/user/:userId/lists/new' element={<NewListsPage />} />
            </Route>
          </Routes>
        </ListsProvider>
      </AccessProvider>
    </BrowserRouter>
  )
}

export default App
