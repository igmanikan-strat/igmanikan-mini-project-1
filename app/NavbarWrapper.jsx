'use client'

import { usePathname } from 'next/navigation'
import Navbar from '../components/Navbar'

export default function NavbarWrapper() {
  const pathname = usePathname()

  // Don't show Navbar on homepage
  if (pathname === '/') return null

  return <Navbar />
}
