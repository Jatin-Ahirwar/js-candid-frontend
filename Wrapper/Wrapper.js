"use client"
import { store } from '@/Store/Store';
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ReactLenis } from '@studio-freight/react-lenis'


const Wrapper = ({ children }) => {
  return (
    <>
    {/* <ReactLenis root> */}
        <Provider store={store}>
              {children} 
        </Provider>
    {/* </ReactLenis> */}
    </>
  )
}

export default Wrapper