"use client"
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "motion/react";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const SecondNavber = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const [isAccordionOpened, setIsAccordionOpened] = useState(false);
  
    const toggleMenu = () => {
      setIsOpened(!isOpened);
    };
  
    const toggleAccordion = () => {
      setIsAccordionOpen(!isAccordionOpen);
    };
    const toggleAccordioned = () => {
      setIsAccordionOpened(!isAccordionOpened);
    };
  
      return (
        <nav className="bg-transparent px-[6vw]">
        <div className="  flex justify-evenly items-center py-4 px-6">
          {/* Logo */}
          <Link href="/" className="py-2">
            <Image src={logo} height={80} width={180} alt="Logo" />
          </Link>
  
          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6">
          <div className="relative">
       
          <div className="dropdown dropdown-hover">
    <div className="flex items-center text-white gap-3 px-3 rounded-full">
            <span >Solutions</span> <IoIosArrowDown className="w-5 h-3 "/>
          </div>
    <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow">
    
             <Link href='anycaas'> <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                AnyCaaS
              </li></Link>
              <Link href='anybaas'><li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                AnyBaaS
              </li></Link>
              <Link href='anypaas'><li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                AnyPaaS
              </li></Link>
            
    </ul>
  </div>
        
        </div>
  
            <div className="relative group">
      <Link href="#" className="block mb-2 text-white">Services</Link>
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </div>
  
    <div className="relative group">
      <Link href="#" className="block mb-2 text-white">About Us</Link>
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </div>
    <div className="dropdown">
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center  font-medium border border-white px-3 py-1 rounded-full ">
                🌍 EN
                <span className=""  style={{ cursor: "pointer" }}>
        {isOpen ? <IoIosArrowUp className="w-5 h-3"/> : <IoIosArrowDown className="w-5 h-3"/>}
      </span>
              </button>
  {
    isOpen && (
      <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow">
      <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    EN (English)
                  </li>
                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    TH (Thai)
                  </li>
                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ID (Bahasa Indonesia)
                  </li>
                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    TW (Traditional Chinese)
                  </li>
      </ul>
    )
  }
  </div>
          </div>
  
          {/* Language Selector & Button */}
          <div className="hidden lg:flex items-center ">

            {/* Contact Us Button */}
            <Link
              href="#"
              className="hover:bg-white font-bold flex gap-2 hover:gap-4 border border-white text-white hover:text-blue-500 px-3 py-3 rounded-sm transition-all"
            >
              <span>Contact Us</span> <IoIosArrowForward className="w-5 h-3 mt-1.5 font-bold"/>
            </Link>
          </div>
  
          <button
            className="block md:hidden focus:outline-none text-black"
            onClick={toggleMenu}
          >
            {isOpened ? <RxCross2 className="w-6 h-6 text-white"/> : <RiMenuFill className="w-6 h-6 text-white"/>}
          </button>
        
  
        {isOpened && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-[10vh] left-0 w-full h-auto pb-10 bg-blue-600 text-white z-50"
          >
            <div className="flex flex-col items-start p-8 space-y-4">
            <div>
                <button
                  className="text-lg font-bold flex items-center justify-between w-[90vw] focus:outline-none"
                  onClick={toggleAccordion}
                >
                 <span> Solutions</span>
                  <span className="ml-2">
                    {isAccordionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </button>
                {isAccordionOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 mt-2 space-y-2"
                  >
                      <Link href='anycaas'> <li className="block px-4 py-2 text-white hover:bg-gray-800">
                AnyCaaS
              </li></Link>
              <Link href='anybaas'><li className="block px-4 py-2 text-white hover:bg-gray-800">
                AnyBaaS
              </li></Link>
              <Link href='anypaas'><li className="block px-4 py-2 text-white hover:bg-gray-800">
                AnyPaaS
              </li></Link>
                  </motion.ul>
                )}
              </div>
             <Link href="/"> <h3 className=" text-lg">Services</h3></Link>
              <Link href="/"><h3 className=" text-lg">About Us</h3></Link>
            </div>
            
          <div className="flex justify-center">
          <div className=" px-4">
         <button
          className="flex items-center border-blue-400 justify-between text-blue-600 font-medium border  px-3 py-2 rounded-full "
          onClick={toggleAccordioned}
        >
          <span className="flex items-center">
            🌍
            <span className="ml-2">EN</span>
          </span>
          <span>
            {isAccordionOpened ? (
              <IoIosArrowUp className="w-5 h-5 text-white" />
            ) : (
              <IoIosArrowDown className="w-5 h-5 text-white" />
            )}
          </span>
        </button>
  
        {isAccordionOpened && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.3 }}
            className=" rounded-lg mt-2 p-2 shadow-lg"
          >
            <li className=" px-4 py-2 text-white hover:text-gray-300 rounded-lg cursor-pointer">
              English
            </li>
            <li className=" px-4 py-2 text-white hover:text-gray-300 rounded-lg cursor-pointer">
              Thai
            </li>
            <li className=" px-4 py-2 text-white hover:text-gray-300 rounded-lg cursor-pointer">
              Bahasa Indonesia
            </li>
            <li className=" px-4 py-2 text-white hover:text-gray-300 rounded-lg cursor-pointer">
              Traditional Chinese
            </li>
          </motion.ul>
        )}
      </div></div> 
        
  <Link
              href="#"
              className="mx-10 border mt-5 font-bold flex justify-center gap-2 hover:gap-4 text-white px-3 py-3 rounded-sm   transition-all"
            >
              <span>Contact Us</span> <IoIosArrowForward className="w-5 h-3 mt-1.5 font-bold"/>
            </Link>
          </motion.div>
        )}
        </div>
      </nav>         
      );
}

export default SecondNavber;