import React from 'react'

export default function Countdown() {
  return (
    <div className='d-flex py-4  countdown-container justify-content-center'>
      <div className='mx-3 countdown-content'>
      <h1>230</h1>
      <p><small><strong>Days</strong></small></p>
      </div>
      
      <div className='mx-3 countdown-content'>
      <h1>16</h1>
      <p><small><strong>Hours</strong></small></p>
      </div>
      
      <div className='mx-3 countdown-content'>
      <h1>14</h1>
      <p><small><strong>Minutes</strong></small></p>
      </div>
      
      <div className='mx-3 countdown-content'>
      <h1>20</h1>
      <p><small><strong>Seconds</strong></small></p>
      </div>
    </div>
  )
}
