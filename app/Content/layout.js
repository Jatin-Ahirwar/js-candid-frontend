"use client"
import Nav from '@/Components/home/Nav'
import LocomotiveScroll from 'locomotive-scroll'
import React, { useEffect ,useRef } from 'react'
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion'

const layout = ({children}) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])
  return <>        
      <Nav />
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
        {children}
      </motion.div>
  </>
}

export default layout