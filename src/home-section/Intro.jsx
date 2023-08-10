import React from 'react'
import hero from '/assets/event-hero.mp4'
import { Link, useLocation } from "react-router-dom";


export default function Intro() {
  const location = useLocation();
  const allstate = {
    day: 'ALL-DAY',
    tota: '2500',
    da: '1618',
    code: '372',
  };
  return (
    <div className='intro-container'>

      <video preload="metadata" autoPlay loop muted playsInline className='banner-video '>
      <source src={hero} type='video/mp4' />
      </video>

      <div className="d-flex intro2">
        <div className='intro3'> 
          <h6>Hurry Up! Battle Start Soon</h6>
          <h1>ODD WORLD MUSIC FESTIVAL</h1>
          <h1><small>December 16-18th-Dec-2023|Premier Music Hall|Madrid,Spain.</small></h1>
          <div className="d-flex justify-content-center">
          <Link className="intro-btn text-center" type="button" to="/Events" state={allstate} style={{textDecoration:"none"}}>
              <strong className='strong'>EVENTS</strong>
             

              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
