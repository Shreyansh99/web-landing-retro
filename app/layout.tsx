import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Agency Name | Web Development Services',
  description: 'Professional web development services for businesses of all sizes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}