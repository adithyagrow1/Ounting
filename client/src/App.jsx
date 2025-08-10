import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  // Global gradient background style
  const appStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, #c0f2e4, #a0c5f7)', // Logo gradient
    fontFamily: "'Poppins', sans-serif"
  }

  const mainStyle = {
    flex: 1
  }

  return (
    <div style={appStyle}>
      <Navbar />
      <main style={mainStyle} className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
