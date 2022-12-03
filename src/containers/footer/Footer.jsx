import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, facere?</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>links</h4>
          <p>over</p>
          <p>social media</p>
          <p>counter</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>company</h4>
          <p>Terms & conditions</p>
          <p>privacy policy</p>
          <p>contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>portharcourt Nigeria</p>
          <p>+2348030587736</p>
          <p>payment@otechnlogies.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2022 OTECHNOLOGIES. All right reserved </p>
      </div>
    </div>
  )
}

export default footer
