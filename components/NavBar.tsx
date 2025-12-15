"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-haitech-blue to-haitech-purple flex items-center justify-center text-white font-bold">ד"ה</div>
              <div className="hidden sm:block">
                <div className="text-lg font-semibold">דרך ההייטק</div>
                <div className="text-xs text-gray-500">Hai-Tech Way</div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="text-gray-700 hover:text-haitech-blue">לכל הקורסים</Link>
            <Link href="/schools" className="text-gray-700 hover:text-haitech-blue">פתרונות לבתי ספר</Link>
            <Link href="/about" className="text-gray-700 hover:text-haitech-blue">אודות</Link>
            <Link href="/contact" className="text-gray-700 hover:text-haitech-blue">צור קשר</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/courses" className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-haitech-blue to-haitech-purple text-white rounded-lg shadow">
              לכל הקורסים
            </Link>

            <button className="md:hidden p-2 rounded bg-white shadow" onClick={()=>setOpen(v=>!v)} aria-label="תפריט">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="#0B1020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white/80 backdrop-blur p-4">
          <div className="flex flex-col gap-3">
            <Link href="/courses" className="block px-3 py-2 rounded hover:bg-gray-100">לכל הקורסים</Link>
            <Link href="/schools" className="block px-3 py-2 rounded hover:bg-gray-100">פתרונות לבתי ספר</Link>
            <Link href="/about" className="block px-3 py-2 rounded hover:bg-gray-100">אודות</Link>
            <Link href="/contact" className="block px-3 py-2 rounded hover:bg-gray-100">צור קשר</Link>
          </div>
        </div>
      )}
    </header>
  )
}
