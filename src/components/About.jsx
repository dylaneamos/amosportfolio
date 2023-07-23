import React, {useState} from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'

const About = () => {

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-xl font-bold'>
            <p>
              I found myself in love with Webstack applications and since then, I've been utilising the full potential of the web!
            </p>   <br />
            <p className='text-[#8892b0] text-xl'>Optimistic of what the future holds. </p>        
          </div>
          <div>
          <p>
          Welcome to my digital realm! With a passion for building on-demand digital experiences, 
          I specialize in creating responsive and result-driven web applications. </p><br />
          <p>Join me on this journey as we bring your ideas to life.
            </p><br />
            <button className='text-white text-xl group border-2 rounded-full px-3 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              <span><Link to="contact" spy={true} smooth={true}  duration={500}>
              Let's visualise your idea!
                  </Link></span>
              <HiOutlineArrowNarrowRight className='group-hover:rotate-90 duration-300 ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
