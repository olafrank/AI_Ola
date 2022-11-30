import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo reprehenderit similique repudia'
  },
  {
    title: 'Becoming the tended active',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo reprehenderit similique repudia'
  },
  {
    title: 'message or am nothing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo reprehenderit similique repudia'
  },
  {
    title: 'will be fun having you here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo reprehenderit similique repudia'
  },

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is now and you just need to realize it.set into the future today and make it happen</h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
      {featuresData.map((item,index) =>(
          <Feature title ={item.title}  text = {item.text} key ={item.title + index} />
        )) }
      </div>
    </div>
  )
}

export default Features
