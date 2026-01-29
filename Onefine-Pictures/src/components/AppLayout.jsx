import React from 'react'
import Header from './ui/Header';

function AppLayout ({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

        <header>
          <Header />
        </header>

        <main className="flex-1 pt-20 p-4 bg-white">
            {children}
        </main>
    </div>
  )
}

export default AppLayout;