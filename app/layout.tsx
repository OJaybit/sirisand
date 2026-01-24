import './globals.css'
import Navbar from './components/Navbar'
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        {/* HEADER */}
        <Navbar />
        <WhatsAppButton />
        <ScrollToTop />

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  )
}
