"use client"
import Banner from "@/components/home/Banner";
import Contact from "@/components/home/Contact";
import Do from "@/components/home/Do";
import Financed from "@/components/home/Finance";
import Pholosophy from "@/components/home/Pholosophy";


export default function Home() {
  return (
    <div className=" ">
    <Banner />
    <Do />
     <Pholosophy />
     <Financed />
     <Contact />
    </div>
  );
}
