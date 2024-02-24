// "use client"
// import React from 'react'
// import '@/Components/home/page1.css'

// const Page1 = () => {
//   return <>
//     <div className="pagecontainer">
//       <div className='animate__animated animate__fadeIn page1'>
//           <div className="textdiv">
//             <h1>Welcome</h1>
//             <img src="https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1567076903468-83LXBA55YAKDI48VT3OJ/3.png?format=500w" alt="" />
//             <p>JS Candid is your expert for crafting the ultimate event photography experience.</p>
//             <p>We skillfully capture your unique moments, blending creativity and precision into every shot.</p>
//             <p>Our dedication transforms these moments into beautifully documented stories, ensuring timeless memories.</p>
//             <p>Trust JS Candid for an unparalleled photographic journey that lasts a lifetime.</p>
//             <img src="https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1567076903468-83LXBA55YAKDI48VT3OJ/3.png?format=500w" alt="" />
//           </div>
        
//       </div>

//       <div className='animate__animated animate__fadeIn page2'>

//       </div>

//       <div className='animate__animated animate__fadeIn page3'>

//       </div>
//     </div>
//   </>
// }

// export default Page1



"use client"
import React from 'react';
import { Link } from 'react-scroll';
import '@/Components/home/page1.css';

const Page1 = () => {
  return (
    <>
      <div className="pagecontainer">
        <div className='animate__animated animate__fadeIn page1'>
          <div className="textdiv">
            <h1>Welcome</h1>
            <img src="https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1567076903468-83LXBA55YAKDI48VT3OJ/3.png?format=500w" alt="" />
            <p>JS Candid is your expert for crafting the ultimate event photography experience.</p>
            <p>We skillfully capture your unique moments, blending creativity and precision into every shot.</p>
            <p>Our dedication transforms these moments into beautifully documented stories, ensuring timeless memories.</p>
            <p>Trust JS Candid for an unparalleled photographic journey that lasts a lifetime.</p>
            <img src="https://images.squarespace-cdn.com/content/v1/5c9dc168c46f6d4367f37a90/1567076903468-83LXBA55YAKDI48VT3OJ/3.png?format=500w" alt="" />
          </div>
        </div>

        <div className='animate__animated animate__fadeIn page2'>
          {/* Add a Link for scrolling to the next section/page */}
          <Link
            to="page3"  // Use the ID of the target section/page
            smooth={true}
            duration={500}
            className="scroll-link"
          >
            Scroll to Page 3
          </Link>
        </div>

        <div id="page3" className='animate__animated animate__fadeIn page3'>
          {/* Content of the third section/page */}
        </div>
      </div>
    </>
  );
}

export default Page1;
