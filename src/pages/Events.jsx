import React from 'react'
import Transition from '../transition'
import Navs from '../component/Nav'
import './events.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import doja from '/assets/doja2.jpg'

import { Link, useLocation } from "react-router-dom";



export default function Events() {
  const location = useLocation();
  const allstate = {
    day: "ALL-DAY",
    tota: 2500,
    da: '1618',
    code: "372",
  };
  return (
    <div className='bg-dark text-white pb-5' style={{width:"100%"}}>
      <Navs/>
      <Transition>
      <section className=' banner' style={{borderBottom:"1px dotted white"}}>
      <div className='text-center kkt my-5 pt-5 ' style={{position:"relative",top:"50px"}}>
          <div>
          <h6>Lorem ipsum dolor sit.</h6>
          <h2>DEC 16TH -18TH</h2>
          </div>
      </div>
        <div className="d-flex justify-content-center my-5">
       <div className='mt-5'>
        <div >
         
          <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner   d-flex justify-content-between">
            <div className='my-1 px-1'>
               <p>
                   hello
              </p>
              <h2 className=''>Lorem ipsum dolor sit.</h2>
              <p><small>Lorem, ipsum dolor.</small></p>
              <p>16th-18th december 2023</p>
              <Link className="intro-btn text-center"  type="button" to="/Tickets" state={allstate} style={{textDecoration:"none"}}  >
              <strong className='strong'>BOOk</strong>
              

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
            </div>
            <div className='my-1'>
            <LazyLoadImage src={doja} loading='lazy' className='evenn' alt="" style={{width:"220px",borderRadius:"10px",alignItems:"center",textAlign:"center"}} />

            </div>
          

          </div>
          </div>

        </div>
      
       </div>
        </div>
      </section>


        <div className='text-center' style={{position:"relative",top:"-90px"}}>
          <h1>FEATURED UPCOMING EVENTS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        
        <div className="d-flex justify-content-center mb-5">
        <div className=' pt-2 dada '  style={{height:"108px" ,lineHeight:"5px"}}>
             <div className='px-1 '>
             <p>MARCH </p>
              <h2>12TH</h2>
             </div>
              <p className='px-2 py-3  lala'><small>Lorem</small></p>
            </div>
       <div>
        <div >
         
          <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner   d-flex justify-content-between">
            
            <div className='my-1 px-1'>
               <p>
                   hello
              </p>
              <h2 className=''>Lorem ipsum dolor sit.</h2>
              <p><small>Lorem, ipsum dolor.</small></p>
              <p>16th-18th december 2023</p>
              <Link className="intro-btn text-center"  type="button" to="/Tickets" state={allstate} style={{textDecoration:"none"}}  >
              <strong className='strong'>BOOk</strong>
             

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
            </div>
            <div className='my-1'>
            <LazyLoadImage src={doja} loading='lazy' className='evenn' alt="" style={{width:"220px",borderRadius:"10px",alignItems:"center",textAlign:"center"}} />

            </div>
          

          </div>
          </div>

        </div>
      
       </div>
        </div>
        <div className="d-flex justify-content-center my-5">
        <div className=' pt-2 dada '  style={{height:"108px" ,lineHeight:"5px"}}>
             <div className='px-1 '>
             <p>MARCH </p>
              <h2>12TH</h2>
             </div>
              <p className='px-2 py-3  lala'><small>Lorem</small></p>
            </div>
       <div>
        <div >
         
          <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner   d-flex justify-content-between">
            
            <div className='my-1 px-1'>
               <p>
                   hello
              </p>
              <h2 className=''>Lorem ipsum dolor sit.</h2>
              <p><small>Lorem, ipsum dolor.</small></p>
              <p>16th-18th december 2023</p>
              <Link className="intro-btn text-center"  type="button" to="/Tickets" state={allstate} style={{textDecoration:"none"}}  >
              <strong className='strong'>BOOk</strong>
             

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
            </div>
            <div className='my-1'>
            <LazyLoadImage src={doja} loading='lazy' className='evenn' alt="" style={{width:"220px",borderRadius:"10px",alignItems:"center",textAlign:"center"}} />

            </div>
          

          </div>
          </div>

        </div>
      
       </div>
        </div>
        <div className="d-flex justify-content-center my-5">
        <div className=' pt-2 dada '  style={{height:"108px" ,lineHeight:"5px"}}>
             <div className='px-1 '>
             <p>MARCH </p>
              <h2>12TH</h2>
             </div>
              <p className='px-2 py-3  lala'><small>Lorem</small></p>
            </div>
       <div>
        <div >
         
          <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner   d-flex justify-content-between">
            
            <div className='my-1 px-1'>
               <p>
                   hello
              </p>
              <h2 className=''>Lorem ipsum dolor sit.</h2>
              <p><small>Lorem, ipsum dolor.</small></p>
              <p>16th-18th december 2023</p>
              <Link className="intro-btn text-center"  type="button" to="/Tickets" state={allstate} style={{textDecoration:"none"}}  >
              <strong className='strong'>BOOk</strong>
             

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
            </div>
            <div className='my-1'>
            <LazyLoadImage src={doja} loading='lazy' className='evenn' alt="" style={{width:"220px",borderRadius:"10px",alignItems:"center",textAlign:"center"}} />

            </div>
          

          </div>
          </div>

        </div>
      
       </div>
        </div>
        <div className="d-flex justify-content-center my-5">
        <div className=' pt-2 dada '  style={{height:"108px" ,lineHeight:"5px"}}>
             <div className='px-1 '>
             <p>MARCH </p>
              <h2>12TH</h2>
             </div>
              <p className='px-2 py-3  lala'><small>Lorem</small></p>
            </div>
       <div>
        <div >
         
          <div className="card">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="card-inner   d-flex justify-content-between">
            
            <div className='my-1 px-1'>
               <p>
                   hello
              </p>
              <h2 className=''>Lorem ipsum dolor sit.</h2>
              <p><small>Lorem, ipsum dolor.</small></p>
              <p>16th-18th december 2023</p>
              <Link className="intro-btn text-center"  type="button" to="/Tickets" state={allstate} style={{textDecoration:"none"}}  >
              <strong className='strong'>BOOk</strong>
             

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
            </div>
            <div className='my-1'>
            <LazyLoadImage src={doja} loading='lazy' className='evenn' alt="" style={{width:"220px",borderRadius:"10px",alignItems:"center",textAlign:"center"}} />

            </div>
          

          </div>
          </div>

        </div>
      
       </div>
        </div>

        <div>

        </div>
        
     
      </Transition>
    </div>
  )
}
