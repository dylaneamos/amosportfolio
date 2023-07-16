import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import amosLogo from '../assets/amos-logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
        <div>
            <img src={amosLogo} alt="Logo" style={{width: '65px'}} />
        </div>

        {/* menu*/}
        
            <ul className='hidden md:flex'>
                <li className='hover:text-pink-600'><Link to="home" spy={true} smooth={true}  duration={500}>
                   Home
                </Link></li>
                <li className='hover:text-pink-600'><Link to="about" spy={true} smooth={true}  duration={500}>
                 About
                 </Link></li>
                <li className='hover:text-pink-600'><Link to="skills" spy={true} smooth={true}  duration={500}>
                  Skills
                </Link></li>
                <li className='hover:text-pink-600'><Link to="process" spy={true} smooth={true}  duration={500}>
                  Process
                </Link></li>
                <li className='hover:text-pink-600'><Link to="work" spy={true} smooth={true}  duration={500}>
                  Work
                </Link></li>
                <li className='hover:text-pink-600'><Link to="contact" spy={true} smooth={true}  duration={500}>
                  Contact
                  </Link></li>
            </ul>
       

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
                <li className='py-4 text-4xl'><Link onClick={handleClick} to="home" spy={true} smooth={true}  duration={500}>
                   Home
                </Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} to="about" spy={true} smooth={true}  duration={500}>
                 About
                 </Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} to="skills" spy={true} smooth={true}  duration={500}>
                  Skills
                </Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} to="process" spy={true} smooth={true}  duration={500}>
                  Process
                </Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} to="work" spy={true} smooth={true}  duration={500}>
                  Work
                </Link></li>
                <li className='py-4 text-4xl'><Link onClick={handleClick} to="contact" spy={true} smooth={true}  duration={500}>
                  Contact
                  </Link></li>
            </ul>

        {/* Social icon */}
        <div className='hidden lg:flex fixed flec-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/amos-george-6a0838145" target='_blank' rel='noopener noreferrer'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/dylaneamos" target='_blank' rel='noopener noreferrer'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='mailto:amos@dylaneamos.com' target='_blank' rel='noopener noreferrer'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href='https://amosresume.tiiny.site' target='_blank' rel='noopener noreferrer'>
                       Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
 