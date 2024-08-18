import React from 'react'
import './Video.css'
import videoPlay from '../assets/video-auto.mp4'
import Weather from '../weather-items/Weather'

const Video = () => {
  return (
    <div className='video-top-on'>
      <div className='video-back'>
      <div className='overlay'></div>
      <video src={videoPlay} autoPlay loop muted/>
      <div className='content'>
      <Weather />
      </div>
      </div>
      <div className='design'>
        <p className='privacy1'>
          Privacy Policies
        </p>
        <p className='privacy'>
          Terms & Conditions
        </p>
        <p className='privacy2'>
          All rights reserved@Copyright
        </p>
      </div>
    </div>
  )
}

export default Video