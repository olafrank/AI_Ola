import React from 'react';
import { Feature } from '../../components';
import './whatgpt3.css';

const Whatgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='Whatgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, enim voluptatem dolorem numquam placeat, expli Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, enim voluptatem dolorem numquam placeat, explicabo saepe ullam reiciendis excepturi molestias reprehenderit voluptat" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="This is an automate chatbox,you can ask your questions and get instant responds,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et neque tenetur maxime nesciunt ratione unde minima autem doloremque quas." />
      <Feature title='Knowledgebase' text='You can learn more about this AI built,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et neque tenetur maxime nesciunt ratione unde minima autem doloremque quas.' />
      <Feature title='Education' text='This is an educative built that you can practice with and do,Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et neque tenetur maxime nesciunt ratione unde minima autem doloremque quas.  ' />
      </div>
    </div>
  )
}



export default Whatgpt3
