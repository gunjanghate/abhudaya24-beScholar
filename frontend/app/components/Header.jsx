"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FiMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import Link from "next/link";

const Header = () => {
    
  const { colorMode, toggleColorMode } = useColorMode()
  const theme = useColorModeValue("#ffff","black")

  return (
    <>
    <div className="flex justify-between  md:px-10 px-2 shadow-md font-bold">
      <div className="logo flex">
        <Link href="/">
        <Image
          src="https://drive.google.com/uc?export=download&id=1Mw0EcZHPZRRmK6SPwtBjMTNqYlaizVmL"
          width={150}
          height={50}
          />

        </Link>
        
      </div>
      <div className="nav flex pt-2 gap-24 font-bold">
        <ul className="flex mt-12 text-xl  md:gap-16 gap-12 font-medium">
          <Link href="/pages/homepage"><li>Home</li></Link>
          <Link href="/pages/help"><li>Help</li></Link>
          <Link href="/pages/contact"><li>Contact</li></Link>
          
          
        </ul>
        <button onClick={toggleColorMode} className="pb-6 text-2xl">
       {colorMode === 'light' ? <FiMoon /> : <MdOutlineWbSunny />}
      </button>
      </div>
    </div>
    <div className="marquee text-lg">
      <marquee behavior="" direction="left" className=" bg-red-500 text-white">
                        Application Acceptance (New/Renewal) for A.Y. 24-25 has been commenced from 25’th July 2024. Last date for Application Acceptance (New/Renewal) for A.Y. 24-25 is 31'st Mar 2025.
                        Application Re-apply has been extended for A.Y. 23-24 till 31'st Mar 2025.
                    </marquee>
    </div>
          </>
  );
};

export default Header;
