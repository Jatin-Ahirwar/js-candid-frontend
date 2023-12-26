"use client"
import React, { useEffect, useRef } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import Nav from '@/Components/home/Nav'
import Page1 from '@/Components/home/Page1'
import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'
import Page2 from '@/Components/home/Page2'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  useEffect(() => {
  const locomotiveScroll = new LocomotiveScroll();
  }, [])
  // useEffect(() => {
  //   const image = document.querySelector('.page1');
  //   const secondDiv = document.querySelector('.page2');

  //   // Set up GSAP animation
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: window, // Use the document body as the trigger
  //       start: 'top top',
  //       end: 'bottom top',
  //       scrub: true, // Enable scrubbing for a smoother effect
  //     },
  //   });

  //   // Define the animation for the second div
  //   tl.to(secondDiv, { y: '-50%', ease: 'none' });

  //   return () => {
  //     // Kill GSAP animations on component unmount
  //     tl.kill();
  //   };
  // }, []);

  // useEffect(() => {
  //   // Ensure that the DOM is ready before applying animations
  //   gsap.to('.page2', {
  //     y: '-70%', // Adjust this value to control the overlap
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.page2',
  //       start: 'bottam -100%',
  //       end: 'bottom bottom',
  //       scrub: 1, // Controls the smoothness of the animation
  //     },
  //   });
  // }, []);

  // useEffect(() => {
  //   // Ensure that the DOM is ready before applying animations
  //   gsap.to('.page2', {
  //     y: '-70%', // Adjust this value to control the overlap
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.page2',
  //       start: '30% top', // Adjust this value to start the animation when the first div is 30% from the top
  //       end: '+=100%',
  //       pin: true,
  //       scrub: 1, // Controls the smoothness of the animation
  //     },
  //   });
  // }, []);

  return <>
        <Nav />
        <Page1 />
        {/* <Page2 /> */}
        <Page1 />

      </>
}

export default page