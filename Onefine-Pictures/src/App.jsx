import { useState } from 'react'
import Header from './components/ui/Header'
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import FeaturedGallery from './components/homeSections/FeaturedGallerySection';
import RootLayout from './components/layout/RootLayout'
import { Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gallery from './pages/Gallery';
import Packages from './pages/Packages';
import About from './pages/About';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='packages' element={<Packages />} />
          <Route path='about' element={<About />} />
          <Route path='gallery' element={<Gallery />} />
        </Route>
      </Route>
    )
  )

function App() {

  return <RouterProvider router={router} />
}

export default App;
