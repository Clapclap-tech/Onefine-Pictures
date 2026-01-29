import { useState } from 'react'
import Header from './components/ui/Header'
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import FeaturedGallery from './components/homeSections/FeaturedGallery';

function App() {

  return (
    <AppLayout>
      <Home />
    </AppLayout>
  )
}

export default App;
