"use client"
import Link from 'next/link'

export default function NavBar(){
  return (
    <header className="border-b bg-white">
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
            <Link href="/courses" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-haitech-blue to-haitech-purple text-white rounded-lg shadow">
              לכל הקורסים
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
