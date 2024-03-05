import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend example',
  description: 'An example of a frontend app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://cdn.simplecss.org/simple.min.css'></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
