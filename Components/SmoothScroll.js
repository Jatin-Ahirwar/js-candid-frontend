"use client"
import Wrapper from '@/Wrapper/Wrapper'
import { ReactLenis } from '@studio-freight/react-lenis'

function SmoothScroll() {

  return (
    <ReactLenis root>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll