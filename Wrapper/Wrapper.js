"use client"
import { store } from '@/Store/Store';
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ReactLenis } from '@studio-freight/react-lenis'
import { AnimatePresence } from 'framer-motion';


const Wrapper = ({ children }) => {
  return (
    <>
        <Provider store={store}>
              {children}
        </Provider>
    </>
  )
}

export default Wrapper