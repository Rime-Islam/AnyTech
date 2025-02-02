import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";


const Footer = () => {
    return (
        <div className=" ">
<div className="bg-[#052045] py-[8vh] lg:flex ">
<Link href="/" className="py-2 flex-1 ">
           <div className="flex justify-center "> <Image className="ml-5" src={logo} height={80} width={180} alt="Logo" /></div>
          </Link>
          <div className="flex-1">
<div className="md:flex ml-[8vw]">
<div className="font-bold  text-[#41E3E5] border-r border-[#164377] py-4 px-6">Our Solutions</div>
<div className="flex pl-6 py-4 gap-6 ">
<Link href="anycaas"><h1 className="text-[#41E3E5] hover:text-[#277AE3]">AnyCaaS</h1></Link>
<Link href="anybaas"><h1 className="text-[#41E3E5] hover:text-[#277AE3]">AnyBaaS</h1></Link>
<Link href="anypaas"><h1 className="text-[#41E3E5] hover:text-[#277AE3]">AnyPaaS</h1></Link>
</div>
</div>
          </div>
  </div> 
<div className="bg-[#02152D] py-[3vh] text-[#277AE3] text-sm font-semibold">
 
 <div className="container mx-auto flex justify-between ">
 <h1 className="flex-1 text-center">©2023 All rights reserved. Any Technology Pte Ltd.</h1>
 <div className="hover:text-white flex-1 ">
  <h1 className="flex justify-end">
  
  <Link href="/privacy-police">
  <span className="flex-1 text-center pr-[10vw]">
    Privacy Policy</span>
    </Link>
 </h1>
</div>
  </div> 
</div>
</div>
  );
};

export default Footer;