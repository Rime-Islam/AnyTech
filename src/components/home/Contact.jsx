"use client"
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
    return (
        <section id="footer">
        <div   style={{
              clipPath: "polygon(0 0, 100% 50%, 100% 100%, 0% 100%)",
            }} className="bg-[#1D5BC4] pt-20  min-h-[60vh] overflow-hidden relative">
          <div className="top-20 ml-5 md:ml-[20vw] container mx-auto  py-32 text-white space-y-6">
            <h1 className="text-4xl md:text-7xl w-full lg:w-1/2 font-semibold">
              Legacy no longer
            </h1>
            <p className="text-lg font-semibold w-full lg:w-1/2">
              Talk to us to find out how we can transform your organisation for
              the future
            </p>
            <Link
              href="/"
              className="bg-[#F98B53] max-w-40 mt-5 font-bold flex justify-center gap-2 hover:gap-4 text-white px-3 py-3 rounded-sm   transition-all"
            >
              <span>Contact Us</span> <IoIosArrowForward className="w-5 h-3 mt-1.5 font-bold"/>
            </Link>
          </div>
          
        </div>
      </section>
    )
};

export default Contact;