import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SHAMPUR',
  description: 'Website for Shampur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-red-500 scrollbar-hide`}>
      <Navbar />
        {children}
      </body>
    </html>
  )
}
