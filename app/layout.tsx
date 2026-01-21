import './globals.css'
import Navbar from './components/Navbar'
import { Pacifico } from 'next/font/google'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col flex-1 pacifico.className">
        
        {/* HEADER */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  )
}
