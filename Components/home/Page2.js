"use client";

import React from 'react'
import '@/Components/home/page2.css'

const Page2 = () => {
  return <>
    <div data-scroll data-scroll-speed="0.3" className='page2'>
    </div>
  </>
}

export default Page2


// "use client";

// import Image from "next/image";
// import styles from "../home/style.module.css";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

// const index = () => {
//     const slider = useRef(null);
//     const firstText = useRef(null);
//     const secondText = useRef(null);

//     let direction = -1;
//     let xPercent = 0;

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);
//         gsap.to(slider.current, {
//             scrollTrigger: {
//                 trigger: document.documentElement,
//                 scrub: 0.45,
//                 start: "top top",
//                 end: window.innerHeight,
//                 onUpdate: (e) => {
//                     direction = e.direction * -1;
//                 },
//             },
//             x: "-500px",
//         });
//         requestAnimationFrame(animate);
//     }, []);

//     const animate = () => {
//         if (xPercent < -100) {
//             xPercent = 0;
//         } else if (xPercent > 0) {
//             xPercent = -100;
//         }
//         gsap.set(firstText.current, { xPercent });
//         gsap.set(secondText.current, { xPercent });
//         xPercent += direction * 0.05;
//         requestAnimationFrame(animate);
//     };

//     return (
//         <div className={styles.landing}>
//             {/* <Image
//                 src={"/images/background.jpg"}
//                 fill={true}
//                 alt="bhai ki photo"
//             /> */}
//             <div style={{height:"100%",backgroundImage:"https://images.unsplash.com/photo-1504227986464-b07ae4f486f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} ></div>

//             <div className={styles.content}>
//                 <Image
//                     src={"/images/arrow.svg"}
//                     width={20}
//                     height={20}
//                     alt="arrow"
//                     data-scroll
//                     data-scroll-speed="0.4"
//                 />
//                 <div data-scroll data-scroll-speed="0.3">
//                     <p>Hello</p>
//                     <p>Achii photo hai</p>
//                 </div>
//             </div>

//             <div className={styles.sliderContainer}>
//                 <div ref={slider} className={styles.slider}>
//                     <p ref={firstText}>Something Random -</p>
//                     <p ref={secondText}>Something Random -</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default index;