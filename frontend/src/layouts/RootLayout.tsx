// src/layouts/RootLayout.tsx
import React, { useState, useEffect } from 'react'
import { Outlet, useRouterState } from '@tanstack/react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const RootLayout: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const { location } = useRouterState()
  const isHomePage = location.pathname === '/'

  // This effect runs only when the pathname changes, preventing loops.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [location.pathname]) // The effect depends on the pathname

  // This separate effect handles the header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      // On the homepage, the header should never be visible.
      // On other pages, it appears on scroll.
      if (!isHomePage && window.scrollY > 100) {
        setIsHeaderVisible(true)
      } else {
        setIsHeaderVisible(false)
      }
    }
    // Only add scroll listener if not on the homepage
    if (!isHomePage) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (!isHomePage) {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isHomePage]) // Re-run this effect if isHomePage changes

  return (
    <div className="text-center font-['Inter',_sans-serif]">
      {!isHomePage && <Header isVisible={isHeaderVisible} />}
      <main className="bg-white">
        <Outlet />
      </main>
      {!isHomePage && <Footer />}
    </div>
  )
}

export default RootLayout