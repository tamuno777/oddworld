import React from 'react'
import { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
// import { celeb } from '../data/artistdata';
import { LazyLoadImage } from "react-lazy-load-image-component";
import davido from '/assets/davido.jpg'
import asake from '/assets/asake.jpg'
import burna from '/assets/burna.jpg'
import wizkid from '/assets/wizkid.jpg'
import weeknd from '/assets/weeknd.jpg'
import fireboy from '/assets/fireboy.jpg'
import doja from '/assets/doja2.jpg'
import ice from '/assets/ice.jpg'
import sza from '/assets/sza.jpg'
import odumodu from '/assets/odumodu.jpg'
import dave from '/assets/dave.jpg'
import stomzy from '/assets/stomzy.jpg'
import arrdee from '/assets/arrdee.jpg'

export default function Artist() {

  let {scrollYProgress} = useScroll();
  let y = useTransform( scrollYProgress, [0,1], ["0%","100%"])
 const [width ,setwidth] = useState(0);
 const Carousel = useRef(null);
 useEffect(() => {
   
   setwidth(Carousel.current.scrollWidth - Carousel.current.offsetWith)
 
   
 }, [])

 
  return (
    <div className='artist-container pt-3 bg-dark text-white pb-4 '
    style={{
      // position:"relative",
      // width:"100%",
      height:"770px"
     
      
    }}>

        <header className=' d-flex justify-content-center pt-3' >
       <div>
       <marquee  direction="left"
                 behavior="scroll"
                 loop=""> ABOUT US</marquee>
        <p className='text-center px-5 mx-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi provident, ea culpa odit suscipit itaque omnis, cupiditate aut officia commodi, doloremque laudantium? Eius consectetur iste, officia dolor rerum eum!</p>
       </div>
      </header>
       < >
        <motion.div ref={Carousel}
       
        
        className='carousel mt-4  ' >
          <motion.div className="inner-carousel d-flex justify-content-center ms-0"
          
           drag= "x"
           
           draggable

            dragConstraints={{right:0,left:-3650 }}
           
            transition={{
              type:"spring",
              damping:20,
              stiffness:150,
              
              
            }}
          >
                  {/* {celeb.map((artists) => {       */}



            <motion.div className='d-flex'  >
                <LazyLoadImage src={davido} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={dave} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={ice} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={wizkid} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={sza} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={stomzy} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={fireboy} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={burna} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={weeknd} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={odumodu} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={arrdee} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={doja} loading='lazy' className='artists' alt="" />
                <LazyLoadImage src={asake} loading='lazy' className='artists' alt="" />
            </motion.div>
           

            
            
          {/* })} */}

          </motion.div>

        </motion.div>
    
      </>
    </div>
  )
}
