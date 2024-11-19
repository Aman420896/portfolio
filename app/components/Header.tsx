'use client'

import { Switch } from "@/components/ui/switch"
import { Moon, Sun, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useTheme } from "@/app/context/ThemeContext"
import { useState, useEffect } from "react"

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMenuOpen])

  const menuItems = [
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
    { href: '#about', label: 'About' }
  ]

  return (
    <>
      {/* Header Container */}
      <header className={`
        fixed top-0 left-0 right-0 z-50
        ${theme === 'dark' ? 'bg-black/30' : 'bg-white/30'} 
        backdrop-blur-md
        supports-[backdrop-filter]:bg-background/60
      `}>
        <div className="container mx-auto px-8 sm:px-12 md:px-24 lg:px-40 xl:px-52">
          <nav className="flex items-center justify-between h-[85px]">
            <div className="flex items-center gap-4">
              <span className="font-bold text-lg">Aman.</span>
              <div className="flex items-center gap-2">
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={toggleTheme}
                  aria-label="Toggle theme"
                  className="data-[state=checked]:bg-white data-[state=unchecked]:bg-black"
                />
                {theme === 'dark' ? (
                  <Moon className="h-4 w-4 text-white" />
                ) : (
                  <Sun className="h-4 w-4 text-black" />
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-50 p-2 rounded-full transition-colors relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`font-bold ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 ${
            theme === 'dark' ? 'bg-black' : 'bg-white'
          } transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Menu Content */}
        <div className="relative z-50 h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-12">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  font-bold text-3xl
                  transform transition-all duration-300
                  ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'}
                  ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}