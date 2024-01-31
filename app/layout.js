import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import Wrapper from '@/Wrapper/Wrapper'
import 'remixicon/fonts/remixicon.css'
import { Suspense } from 'react'

export const metadata = {
  title: 'JS CANDID - Bhopal',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
     <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>
          <NextTopLoader color="black" />
                {children}
          </Wrapper>
      </body>
    </html>
  )
}







