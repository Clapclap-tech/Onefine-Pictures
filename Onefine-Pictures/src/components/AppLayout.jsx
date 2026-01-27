import React from 'react'
import Header from './ui/Header';

function AppLayout ({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

        <header>
          <Header />
        </header>

        <main className="flex-1 p-4 bg-blue-200/50">
            {children}
        </main>
    </div>
  )
}

export default AppLayout;