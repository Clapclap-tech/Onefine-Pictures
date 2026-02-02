import React from 'react'
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import { Outlet } from 'react-router-dom';

function AppLayout () {
  return (
    <div className="min-h-screen flex flex-col">
        <main className="flex-1 pt-20 bg-white">
            <Outlet />
        </main>
    </div>
  )
}

export default AppLayout;