import './globals.css'
import Navbar from './components/Navbar'
import { Pacifico } from 'next/font/google'
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";


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
 <WhatsAppButton />
        <ScrollToTop />
        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  )
}
