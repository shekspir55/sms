import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebSMS: Allow your business go international.',
  description: 'Receive SMS from anywhere from the world in your browser: Reserve Phone Numbers in 20+ Countries, Including US 🇺🇸, UK 🇬🇧, and EU 🇪🇺, and Receive OTP and SMS Within Our Application with a flat monthly fee.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
