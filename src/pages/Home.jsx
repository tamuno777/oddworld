import React from 'react'
import Intro from '../home-section/Intro'
import Countdown from '../home-section/Countdown'
import Artist from '../home-section/Arists'
import Eventss from '../home-section/Eventss'
import Experience from '../home-section/Experience'
import Contact from '../home-section/Contact'
import Transition from '../transition'
import Navs from '../component/Nav'

export default function Home() {
  return (
    <div className='home.container d-block ' >
      <Navs/>
        <Transition>

        <Intro/>
       {/* <div className='content'> */}
       <Countdown/>
        <Artist/>
        <Eventss/>
        <Experience/>
        <Contact/>
       {/* </div> */}

        </Transition>
        
    </div>
  )
}
