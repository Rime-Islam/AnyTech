"use client"
import { useState, useEffect } from "react";
import SecondNavber from "./SecondNavber";
import Navber from "./Navber";

const Navbar = () => {
    const [scrollingUp, setScrollingUp] = useState(false);
    const [stop, setStop] = useState(false);
    const [showWhiteNavbar, setShowWhiteNavbar] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY) {
          // Scrolling down → Hide SecondNavber, Keep White Navbar Hidden
          setScrollingUp(false);
          setShowWhiteNavbar(false);
          setStop(true)
        } else {
          // Scrolling up → Show White Navbar
          setScrollingUp(true);
          setShowWhiteNavbar(true);
        }
  
        // When at the top → Hide White Navbar, Show SecondNavber
        if (currentScrollY === 0) {
          setShowWhiteNavbar(false);
          setScrollingUp(false);
          setStop(false)
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
  
    return (
      <div>
        {/* Second Navbar (Blue) - Initially Visible, Appears When at the Top */}
        <div
          className={`fixed top-0 left-0 w-full bg-blue-600 transition-all duration-500 transform ${
            scrollingUp ? (showWhiteNavbar ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0") : (stop ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0")
          }`}
        >
          <SecondNavber />
        </div>
  
        {/* White Navbar - Appears When Scrolling Up, Disappears When at the Top */}
        <div
          className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-500 transform ${
            showWhiteNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <Navber />
        </div>
      </div>
    );
  };

export default Navbar;