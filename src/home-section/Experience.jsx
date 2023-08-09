import React from 'react'
import street from '/assets/street.jpg'
import paint from '/assets/paint.jpg'
import lon from '/assets/lon.jpg'
import game from '/assets/game.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";


export default function Experience() {
  return (
    <div className='p-5 bg-dark d-flex justify-content-center ex-container'>
      
      <div className="d-flex ex-card justify-content-center p-3 ">
      
        <div className='ex-card-sub'>
          <div className="first p-3  d-flex justify-content-center text-white">
            <div className='ex-text  '>
              <h3>PAINT FIGHT</h3>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              
            </div>
            <div className='d-flex justify-content-center '>
            <LazyLoadImage src={paint} loading='lazy' className='ex-img' alt="" />

            </div>
          </div>
          <div className="first p-3  d-flex justify-content-center">
           
            <div className='d-flex text-centerjustify-content-center '>
            <LazyLoadImage src={lon} loading='lazy' className='ex-img' alt="" />

            </div>
            <div className='ex-text '>
              <h3>LOUNGE ZONE</h3>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              
            </div>
          </div>
          <div className="first p-3 d-flex justify-content-center">
            <div className='ex-text'>
              <h3>STREET FOOD</h3>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              
            </div>
            <div className='d-flex justify-content-center '>
            <LazyLoadImage src={street} loading='lazy' className='ex-img' alt="" />

            </div>
          </div>
          <div className="first p-3  d-flex justify-content-center">
           
            <div className='d-flex justify-content-center '>
            <LazyLoadImage src={game} loading='lazy' className='ex-img' alt="" />

            </div>
            <div className='ex-text'>
              <h3>GAMES</h3>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}
