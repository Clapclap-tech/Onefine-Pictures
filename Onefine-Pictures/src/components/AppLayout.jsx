import React from 'react'
import Header from './ui/Header';
import Footer from './ui/Footer';

function AppLayout ({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

        <header>
          <Header />
        </header>

        <main className="flex-1 pt-20 bg-white">
            {children}
        </main>

        <footer>
          <Footer />
        </footer>
    </div>
  )
}

export default AppLayout;