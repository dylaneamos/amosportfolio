import React from 'react';


const Process = () => {
  return (
    <div name='process' className='w-full h-screen bg-[#0a192f] '>
      <div className='max-w-[1000px] mx-auto p-4  w-full h-full'><br /><br /><br /><br />
        <h3 className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 mb-4'>The Process</h3>

        {/* Process steps */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 py-6 gap-8'>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
              <span className='text-4xl font-bold'>1</span>
            </div>
            <p className='text-lg font-bold text-gray-300 mb-2'>Discuss</p>
            <p className='text-gray-400'>Let's have a conversation to understand your project requirements, goals, and preferences.</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
              <span className='text-4xl font-bold'>2</span>
            </div>
            <p className='text-lg font-bold text-gray-300 mb-2'>Design</p>
            <p className='text-gray-400'>I'll create a visually appealing and user-friendly design based on our discussions.</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
              <span className='text-4xl font-bold'>3</span>
            </div>
            <p className='text-lg font-bold text-gray-300 mb-2'>Develop</p>
            <p className=' text-gray-400'>Once the design is approved, I'll start coding and developing the website with the latest technologies.</p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center mb-4'>
              <span className='text-4xl font-bold'>4</span>
            </div>
            <p className='text-lg font-bold text-gray-300 mb-2'>Deliver</p>
            <p className='text-gray-400'>After rigorous testing and quality checks, I'll deliver the final website to you, ready for launch.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
