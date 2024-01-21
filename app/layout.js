import NextTopLoader from 'nextjs-toploader'
import './globals.css'
import Wrapper from '@/Wrapper/Wrapper'
import 'remixicon/fonts/remixicon.css'
import SmoothScrolling from '@/SmoothScroll'

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
            <SmoothScrolling>
               {children}
            </SmoothScrolling>
          </Wrapper>
      </body>
    </html>
  )
}







