"use client"
import { store } from '@/Store/Store.js';
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Wrapper = ({ children }) => {
  return (
        <Provider store={store}>
              {children}
        </Provider>
  )
}

export default Wrapper