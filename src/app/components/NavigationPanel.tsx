"use client"

import { useState } from 'react';
import Button from './Button';
import Logo from './Logo';

const NavigationPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className=" flex w-[90vw]  justify-between items-center mt-[10px] mb-[20px] sm:[100vw] md:ml-[30px] md:mr-[30px] lg:ml-[50px] lg:mr-[50px] xl:ml-[80px] xl:mr-[90px] 2xl:ml-0 2xl:mr-0">
      <div className="flex gap-10 items-center">
        <Logo />
        <div className="hidden md:flex">
          <ul className="flex gap-8 items-center">
            <li className="text-[12px] cursor-pointer"><a>Features</a></li>
            <li className="text-[12px] cursor-pointer"><a>Pricing</a></li>
            <li className="text-[12px] cursor-pointer"><a>About</a></li>
            <li className="text-[12px] cursor-pointer"><a>Contact</a></li>
          </ul>
        </div>
      </div>

      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#101211] shadow-lg md:hidden">
          <ul className="flex flex-col items-center p-4">
            <li className="text-[15px] py-2"><a>Features</a></li>
            <li className="text-[15px] py-2"><a>Pricing</a></li>
            <li className="text-[15px] py-2"><a>About</a></li>
            <li className="text-[15px] py-2"><a>Contact</a></li>
          </ul>
        </div>
      )}

      {!isMenuOpen && (
        <div className="hidden md:flex gap-3">
          <Button
            className={'rounded-[5px] bg-[#232524] py-[8px] px-[15px] cursor-pointer text-[12px] font-bold'}
            text={'Sign in'}
          />
          <Button
            className={'rounded-[5px] bg-[#ffc44e] py-[8px] px-[15px] cursor-pointer text-black text-[12px] font-bold'}
            text={'Get started'}
          />
        </div>
      )}
    </nav>
  );
};

export default NavigationPanel;