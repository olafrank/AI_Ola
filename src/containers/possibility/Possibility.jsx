import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const possibility = () => {
  return (
    <div className='gpt3__possibility section_padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get started</h4>
        <h1 className='gradient__text'>The possibilities are beyond imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque, facilis molestiae impedit harum vitae. Doloribus sed nemo aspernatur eveniet!</p>
        <h4>Request Early Access to Get started</h4>
      </div>
    </div>
  )
}

export default possibility
