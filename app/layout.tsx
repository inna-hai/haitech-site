import './globals.css'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'דרך ההייטק — Hai-Tech Way',
  description: 'קורסי תכנות וטכנולוגיה לילדים, נוער ומבוגרים',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="bg-white text-gray-800 antialiased">
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">{children}</main>
      </body>
    </html>
  )
}
