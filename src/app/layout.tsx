import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NARESH KUMAR',
  description: 'Naresh Kumar is a Full Stack Developer and Mobile App Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 text-gray-950 relative ${inter.className} pt-28 sm:pt-36`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'>

        </div>

        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-25rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]'>
        </div>
        <Header />
        
        {children}
      </body>
    </html>
  )
}
