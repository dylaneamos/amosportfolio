import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import snipetsImage from '../assets/snipets.png';
import { Link } from 'react-scroll';

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const words = [
      'Website Development',
      'UI/UX Designing',
      'Digital Marketing',
      'Blockchain Technology',
      'AI Integration',
    ];

    let timer;
    const word = words[index];
    const typingSpeed = 100; // Adjust typing speed (in milliseconds) as desired
    const deletingSpeed = 50; // Adjust deleting speed (in milliseconds) as desired
    const pauseBetweenWords = 1000; // Adjust pause between words (in milliseconds) as desired

    if (text === word && !isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBetweenWords);
    } else if (text === '' && isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, pauseBetweenWords);
    } else if (!isDeleting) {
      timer = setTimeout(() => {
        setText((prevText) => word.substr(0, prevText.length + 1));
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setText((prevText) => prevText.substr(0, prevText.length - 1));
      }, deletingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, index, isDeleting]);

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:flex lg:flex-col lg:justify-center">
            <br />
            <br />
            <p className="text-pink-600">Hi there, my name is</p>
            <h1 className="text-4xl py-4 sm:text-6xl font-bold text-[#ccd6f6]">Amos</h1>
            <h2 className="text-xl sm:text-4xl font-bold text-[#8892b0]">A Developer and Creator</h2>
            <h3 className="text-l sm:text-xl font-bold text-[#8892b0]">
              dedicated to innovation, dealing with{' '}
              <span className="text-[#ccd6f6] cursor-typing">{text}</span>.
            </h3>

            <p className="text-[white] text-xl py-4">
              Streamline your workflow and create responsive & stunning websites that drive results faster!{' '}
            </p>

            <div className="flex">
              <button className="py-2 text-white border-2 px-4 my-2 mx-2 hover:bg-gray-600">
                <Link to="contact" spy={true} smooth={true} duration={500}>
                  Let's Talk
                </Link>
              </button>
              <div className="w-4"></div>
              <button className="text-white group border-2 rounded-full px-3 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                <Link to="work" spy={true} smooth={true} duration={500}>
                  View Work
                </Link>
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-2" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-grow justify-center items-center">
            <img src={snipetsImage} alt="Snipets homepage" className="object-contain max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
