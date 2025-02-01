"use client"
import Image from "next/image";
import logo2 from "../../../public/images/logo2.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "motion/react";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

    return (
      <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div >
          <Image src={logo2} height={80} width={180} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
        <div className="relative">
     
        <div className="dropdown dropdown-hover">
  <div className="flex items-center gap-3 px-3 rounded-full text-blue-600">
          <span >Solutions</span> <IoIosArrowDown className="w-5 h-3"/>
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
    <Link href="#" className="block mb-2 text-blue-600">Services</Link>
    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </div>

  <div className="relative group">
    <Link href="#" className="block mb-2 text-blue-600">About Us</Link>
    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
  </div>
        </div>

        {/* Language Selector & Button */}
        <div className="hidden lg:flex items-center space-x-4">

            <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-blue-600 font-medium border border-blue-600 px-3 py-1 rounded-full hover:bg-blue-50">
              🌍 EN
              <span className="ml-1"  style={{ cursor: "pointer" }}>
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
    

          {/* Contact Us Button */}
          <Link
            href="#"
            className="bg-orange-500 font-bold flex gap-2 hover:gap-4 text-white px-3 py-3 rounded-sm shadow-md shadow-gray-500/50 hover:shadow-gray-800/80 opacity-85 transition-all"
          >
            <span>Contact Us</span> <IoIosArrowForward className="w-5 h-3 mt-1.5 font-bold"/>
          </Link>
        </div>


        <button
          className="block md:hidden focus:outline-none text-black"
          onClick={toggleMenu}
        >
          {isOpened ? <RxCross2 className="w-6 h-6"/> : <RiMenuFill className="w-6 h-6"/>}
        </button>
      

      {isOpened && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="absolute top-[9vh] left-0 w-full h-1/2 bg-blue-600 text-white z-50"
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
          
         
          <div className="dropdown flex justify-center">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-blue-600 font-medium border bg-white border-blue-600 px-3 py-1 rounded-full ">
              🌍 EN
              <span className="ml-1"  style={{ cursor: "pointer" }}>
      {isOpen ? <IoIosArrowUp className="w-5 h-3"/> : <IoIosArrowDown className="w-5 h-3"/>}
    </span>
            </button>
{
  isOpen && (
    <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow">
    <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  English
                </li>
                <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Thai
                </li>
                <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Bahasa Indonesia
                </li>
                <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Traditional Chinese
                </li>
    </ul>
  )
}
</div>
        </motion.div>
      )}
      </div>
    </nav>         
    );
};

export default Navber;