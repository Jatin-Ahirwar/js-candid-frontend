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
        <AnimatePresence initial={false} mode='popLayout'>
          <motion.div key={children.key} initial="hidden" animate="visible" variants={containerVariants} style={{height:"100%" , width:"100%"}}>
            {children}
          </motion.div>
        </AnimatePresence>

  </>
}

export default layout