import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Packages from './pages/Packages'
import About from './pages/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="packages" element={<Packages />} />
        <Route path="about" element={<About />} />
      </Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
