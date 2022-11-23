import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>This is an Amazing Built for AI useage,You will Amazed to Know how this design can help you.
          olafrank building this to show you what you can achieve using this app.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" id="" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>Over 1600 people visited this app in the last 24hours</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="" />
        </div>
    </div>
  )
}

export default Header
