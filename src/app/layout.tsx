import './globals.css'
import { Nunito_Sans } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
