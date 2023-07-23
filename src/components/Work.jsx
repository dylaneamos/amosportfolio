import React from 'react';
import ifmasa from '../assets/projects/ifmasa.png';
import workImg from '../assets/projects/workImg.png';
import flavorvista from '../assets/projects/flavorvista.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-3'><br /><br /><br /><br /><br /><br />
        <div className='pb-3'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work (Projects)</p>
          <p className='py-4'>Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='w-full md:w-auto'>
            {/*Grid Item */}
            <div
              style={{ backgroundImage: `url(${ifmasa})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  React JS Web App
                </span><br />
                <span className='text-l font-bold flex justify-center items-center text-white tracking-wider'>
                  A Mockup website
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://ifmasa.000webhostapp.com/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href='https://github.com/dylaneamos/ifmasa'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-auto'>
            <div
              style={{ backgroundImage: `url(${workImg})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Uni Search Website
                </span><br />
                <span className='text-l font-bold flex justify-center items-center text-white tracking-wider'>
                  A Mockup website
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://tusearch.000webhostapp.com/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href='https://github.com/dylaneamos/tus'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-auto'>
            <div
              style={{ backgroundImage: `url(${flavorvista})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

              {/* Hover effects*/}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Restaurant Website
                </span><br />
                <span className='text-l font-bold flex justify-center items-center text-white tracking-wider'>
                  A Mockup website
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://flavorvista.netlify.app/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href='https://github.com/dylaneamos/flavorvista'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
