import './globals.css'
import { Poppins } from 'next/font/google'
import NavbarWrapper from './NavbarWrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'My Portfolio',
  description: 'A personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins min-h-screen bg-[#f6f3ff]">
        <NavbarWrapper />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}

