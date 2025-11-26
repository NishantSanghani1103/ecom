import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart.jsx'
import Error404 from './pages/Error404.jsx'
import MainLayout from './common/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  </>


)
