import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import davido from '../../public/assets/davido.jpg'
import doja from '/assets/doja.jpg'
import arrdee from '/assets/arrdee.jpg'
import { Link, useLocation } from "react-router-dom";




export default function Eventss() {
  const location = useLocation();
  const allstate = {
    day: 'ALL-DAY',
    tota: '2500',
    da: '1618',
    code: '372',
  };
  const onestate = {
    day: 'DAY ONE',
    tota: '1000',
    da: '16',
    code: '123',

  };
  const twostate = {
    day: 'DAY TWO',
    tota: '1000',
    da: '17',
    code: '124',


  };
  const threestate = {
    day: 'DAY THREE',
    tota: '1000',
    da: '18',
    code: '125',


  };


  return (
    <div className='d-flex pt-5 justify-content-center text-white bg-dark event-container'>
      <div className="event-content ">
        <div className="d-flex  justify-content-center mb-3">
        <div  style={{overflow:"hidden"}}>
           
             <Link className="intro-btn text-center" type="button" to="/Tickets" state={allstate} style={{textDecoration:"none"}}  >
              <strong className='strong'>ALL THREE DAYS AT NGN2500</strong>
             

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
           </div>
        </div>
      <div className="d-flex m-2 event-section ">
          <div className="event-card p-2">
                <h2>
                <LazyLoadImage src={doja} loading='lazy' className='even' alt="" />

                </h2>
          </div>
          <div className='p-2 event-text'>
           <div className="d-flex event-text justify-content-between">
           <h1>DAY ONE</h1>
             <Link className="intro-btn text-center" type="button" to="/Tickets" style={{textDecoration:"none"}} state={onestate}>
              <strong className='strong'>PAY NGN1000</strong>
              

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
           </div>
            <p><strong>ARTISTS</strong> : DOJA,WIZKID,CARDI B,YOUNG JOHN,SAKODIA,MEEK MILL,LIL NAX and more</p>
            <p><strong>TIME</strong> : 6PM Est </p>
          </div>
      </div>
      <div className="d-flex m-2 event-section">
      <div className="event-card  p-2">
          <h2>
            <LazyLoadImage src={davido} loading='lazy' className='even2' alt="" />

            </h2>
      </div>
      <div className='p-2 event-text'>
      <div className="d-flex event-text  justify-content-between">
           <h1>DAY TWO</h1>
             <Link className="intro-btn text-center" type="button" to="/Tickets" style={{textDecoration:"none"}} state={twostate} >
              <strong className='strong'>PAY NGN1000</strong>
             

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
           </div>
            <p><strong>ARTISTS</strong> : DAVIDO,CITY GIRLS,MALEEK BERRY,LATTO,THE WEEKND,STOMZY,T and more</p>
            <p><strong>TIME</strong> : 6PM Est </p>
            <p><strong>THEME</strong> : Hot summer </p>
      </div>
      </div>
      <div className="d-flex m-2 event-section">
      <div className="event-card  p-2">
          <h2>
            <LazyLoadImage src={arrdee} loading='lazy' className='even3' alt="" />

            </h2>
      </div>
      <div className='p-2 event-text'>
      <div className="d-flex event-text justify-content-between">
           <h1>DAY THREE</h1>
             <Link className="intro-btn text-center" type="button" to="/Tickets" style={{textDecoration:"none"}} state={threestate}>
              <strong className='strong'>PAY NGN1000</strong>
             

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
           </div>
            <p><strong>ARTISTS</strong> : ARRDEE,TION WAYN,DRAKE,ODUMODUBLAK, FIREBOY,DAVE,JLOs and more</p>
            <p><strong>TIME</strong> : 6PM Est </p>
            <p><strong>THEME</strong> : Street vibes </p>
      </div>
      </div>
      </div>
    </div>
  )
}
