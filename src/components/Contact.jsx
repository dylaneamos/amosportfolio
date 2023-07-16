import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillInstagram, AiFillYoutube, AiFillMessage } from 'react-icons/ai';

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/ab4ef931-94ae-47f6-b7d5-d7174643078f' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='py-2 text-gray-300'>Submit the form below or shoot me an email - amos@dylaneamos.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='5' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-5 mx-auto flex item-center'>Submit</button>

        <div className='flex justify-center'>
          <a href='https://www.linkedin.com/in/amos-george-6a0838145' target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin className='text-gray-300 hover:text-blue-500 mx-2 text-4xl' />
          </a>
          <a href='https://github.com/dylaneamos' target='_blank' rel='noopener noreferrer'>
            <AiFillGithub className='text-gray-300 hover:text-gray-700 mx-2 text-4xl' />
          </a>
          <a href='mailto:amos@dylaneamos.com' target='_blank' rel='noopener noreferrer'>
            <AiFillMail className='text-gray-300 hover:text-green-500 mx-2 text-4xl' />
          </a>
          <a href='https://instagram.com/dylaneamos?igshid=NTc4MTIwNjQ2YQ==' target='_blank' rel='noopener noreferrer'>
            <AiFillInstagram className='text-gray-300 hover:text-pink-400 mx-2 text-4xl' />
          </a>
          <a href='https://youtube.com/@dylaneamos' target='_blank' rel='noopener noreferrer'>
            <AiFillYoutube className='text-gray-300 hover:text-red-600 mx-2 text-4xl' />
          </a>
          <a href='https://wa.me/255765985596' target='_blank' rel='noopener noreferrer'>
            <AiFillMessage className='text-gray-300 hover:text-green-400 mx-2 text-4xl' />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
