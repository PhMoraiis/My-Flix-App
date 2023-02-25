import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLocationArrow, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

import LogoImage from "./../../../public/Logo.png";

import { motion } from "framer-motion";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleShadow);
  }, [])

  return (
    <motion.nav
      initial={{
        x: -100,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className="flex items-center w-full h-full px-14 2xl:px-16">
        <Link to='/'>
          <img
            src={LogoImage}
            alt={'Logo escrita Philipe Morais'}
            width={200}
            height={50}
            className='cursor-pointer hover:scale-110 ease-in duration-300 mr-28'
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link to='/'>
              <li className="ml-10 font-poppins font-semibold text-md text-[#fffdff] duration-300 hover:border-b hover:border-[#fffdff]">Seguros</li>
            </Link>
            <Link to='/#about'>
              <li className="ml-10 font-poppins font-semibold text-md text-[#fffdff] duration-300 hover:border-b hover:border-[#fffdff]">Serviços</li>
            </Link>
            <Link to='/#skills'>
              <li className="ml-10 font-poppins font-semibold text-md text-[#fffdff] duration-300 hover:border-b hover:border-[#fffdff]">Ajuda</li>
            </Link>
            <Link to='/#projects'>
              <li className="ml-10 font-poppins font-semibold text-md text-[#fffdff] duration-300 hover:border-b hover:border-[#fffdff]">Contato</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer ml-36 sm:ml-96 md:ml-44">
            <AiOutlineMenu size={25} className='text-[#fffdff]' />
          </div>
        </div>
        <div className="hidden items-center justify-end w-full md:flex">
          <Link to={''}>
            <IoMdNotificationsOutline className="text-[#fffdff]" size={25} />
          </Link>
          <Link to={''}>
            <BsThreeDots className="mx-8 text-[#fffdff]" size={25} />
          </Link>
          <Link to={''}>
            <div className="rounded-full shadow-md shadow-gray-400">
              <CgProfile size={35} className='text-[#fffdff]' />
            </div>
          </Link>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-[75] sm:w-[60%] md:w-[45%] h-screen bg-[#1a1b26] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link to='/'>
                <img
                  src={LogoImage}
                  alt='Logo escrita Philipe Morais'
                  width={80}
                  height={50}
                  onClick={() => setNav(false)}
                  className="cursor-pointer hover:scale-110 ease-in duration-300"
                />
              </Link>
              <div onClick={handleNav} className="rounded-md shadow-md shadow-gray-400 hover:scale-105 ease-in duration-300 p-3 cursor-pointer text-[#fffdff]">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300">
            </div>
          </div>
          <div className="py-10 flex flex-col">
            <ul className="uppercase">
              <Link to='/'>
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#fffdff] duration-300 hover:border-b hover:border-[#fffdff]">Seguros</li>
              </Link>
              <Link to=''>
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#fffdff] duration-300 hover:border-b hover:border-[#fffdff]">Serviços</li>
              </Link>
              <Link to=''>
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#fffdff] duration-300 hover:border-b hover:border-[#fffdff]">Ajuda</li>
              </Link>
              <Link to=''>
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#fffdff] duration-300 hover:border-b hover:border-[#fffdff]">Contato</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#fffdff]">Quer nos encontrar?</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link to="">
                  <div className="rounded-md shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#fffdff]">
                    <FaInstagram />
                  </div>
                </Link>
                <Link to="">
                  <div className="rounded-md shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#fffdff]">
                    <FaFacebook />
                  </div>
                </Link>
                <Link to="">
                  <div className="rounded-md shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#fffdff]">
                    <SiGmail />
                  </div>
                </Link>
                <Link to="">
                  <div className="rounded-md shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#fffdff]">
                    <FaLocationArrow />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export { Header }