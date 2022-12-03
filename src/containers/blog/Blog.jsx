import React from 'react'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import'
import './blog.css';

const blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          Alot is happening,We are blogging about it.
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date="Dec 03,2022" title='GPT-3 And open AI is the Future.let explore and learn more.'  />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date="Dec 03,2022" title='GPT-3 And open AI is the Future.let explore and learn more. ' />
            <Article imgUrl={blog03} date="Dec 03,2022" title='GPT-3 And open AI is the Future.let explore and learn more.' />
            <Article imgUrl={blog04} date="Dec 03,2022" title='GPT-3 And open AI is the Future.let explore and learn more.' />
            <Article imgUrl={blog05} date="Dec 03,2022" title='GPT-3 And open AI is the Future.let explore and learn more.' />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default blog
