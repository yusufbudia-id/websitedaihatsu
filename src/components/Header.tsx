'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'  // ✅ import hook ini
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname() // ✅ deteksi halaman aktif

  useEffect(() => setIsClient(true), [])

  const handleWhatsAppClick = () => {
    if (!isClient) return
    const message = encodeURIComponent('Halo, saya tertarik dengan mobil Daihatsu. Mohon info lebih lanjut.')
    window.open(`https://wa.me/6282174635218?text=${message}`, '_blank')
  }

  return (
    <header className="fixed top-0 w-full bg-white border-b-2 border-[#D90429] shadow-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-daihatsu.png"
            alt="Daihatsu Logo"
            width={140}
            height={45}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-normal">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'Tentang Kami' },
            { href: '/products', label: 'Produk' },
            { href: '/contact', label: 'Kontak' },
          ].map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors duration-300 ${
                  isActive
                    ? 'text-[#D90429] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-[#D90429]'
                    : 'text-gray-700 hover:text-[#D90429]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Tombol Hubungi Kami */}
        <div className="hidden md:block">
          <Button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-[#D90429] to-[#C00021] hover:from-[#C00021] hover:to-[#D90429] text-white font-semibold px-6 py-2 rounded-full shadow-md"
          >
            Hubungi Kami
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-3 p-4 font-semibold">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'Tentang Kami' },
              { href: '/products', label: 'Produk' },
              { href: '/contact', label: 'Kontak' },
            ].map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-2 py-1 rounded-md ${
                    isActive ? 'bg-[#D90429] text-white' : 'hover:text-[#D90429]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}

            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#D90429] hover:bg-[#C00021] text-white w-full mt-3"
            >
              Hubungi Kami
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
