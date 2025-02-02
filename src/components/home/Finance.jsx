"use client"
import CountUp from 'react-countup';

const Financed = () => {
    const logos = [
        "https://i.ibb.co.com/WvzdDvHy/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png",
        "https://i.ibb.co.com/zTYVmLw2/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png",
        "https://i.ibb.co.com/wFHptXnG/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png",
        "https://i.ibb.co.com/bMd6rWp8/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png",
        "https://i.ibb.co.com/HSB5rGf/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png",
        "https://i.ibb.co.com/zW9GHR2Q/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414-1.png",
        "https://i.ibb.co.com/PvBmQQtB/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png",
        "https://i.ibb.co.com/cXrKxGL6/9764422d5b731f38edd216852c7c77e650647975-500x330.png",
        "https://i.ibb.co.com/b9Lz6tz/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png",
        "https://i.ibb.co.com/6R68sPpr/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png",
        "https://i.ibb.co.com/qFNshcWJ/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png",
        "https://i.ibb.co.com/qYkp0chP/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png",
        "https://i.ibb.co.com/FbtYSH3W/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.png",
        "https://i.ibb.co.com/LXMNKGZ7/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png",
        "https://i.ibb.co.com/wr0dpt4j/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png",
      ];
      
    return (
        <div>
            <section>
        <div className="container mx-auto ">
          <h6 className="text-center text-lg font-semibold text-blue-600 -tracking-tighter">
          TRUSTED BY THE BEST
          </h6>
          <div className="flex justify-center gap-[6vw] mt-8">
            <div className="text-center space-y-5">
              <h1 className="text-8xl font-bold text-blue-500">
                {">"}
                <CountUp end={20} />
              </h1>
              <h6 className="text-lg text-gray-800">Years of Experience</h6>
            </div>
            <div className="text-center space-y-5">
              <h1 className="text-8xl font-bold text-blue-500">
                <CountUp end={40} />
                {"+"}
              </h1>
              <h6 className="text-lg text-gray-800">Financial Institutions</h6>
            </div>
            <div className="text-center space-y-5">
              <h1 className="text-8xl font-bold text-blue-500">
                <CountUp end={200} />
                {"m"}
              </h1>
              <h6 className="text-lg text-gray-800">Customers Each</h6>
            </div>
          </div>
        </div>
      </section>
   <section>
        <div className="max-w-[60vw] mx-auto py-[12vh] gap-x-16 gap-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {logos?.map((logo) => (
            <div key={logo} className="flex items-center justify-center ">
              <div className="">
                <img src={logo} alt={logo} className="w-44"/>
              </div>
            </div>
          ))}
        </div>
      </section>
        </div>
    )
};

export default Financed;