import './globals.css'
import localFont from 'next/font/local';
import { Navbar} from '@/components'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'CrookedLion',
  description: 'A Stock Anaylsis Website',
}
const ClashDisplay = localFont({ src: './ClashDisplay-Variable.woff2'})


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='relative'>
        <main className={ClashDisplay.className}>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}