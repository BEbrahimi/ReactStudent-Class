import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx"

import React from 'react'

export default function MainLayout() {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    
    </>
  )
}
