const Pholosophy = () => {
    return (
        <section className="py-20 ">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-blue-500 font-bold mb-5">OUR PHILOSOPHY</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2357]">Human-centred innovation</h3>
          </div>
  
          {/* Diagram */}
          <div className="flex justify-center">
            <img src="https://i.ibb.co.com/PsGdXLH4/Screenshot-2025-02-03-022922.png" />
          </div>

             {/* divs */}
             <section className="py-20 ">
      <div className="container mx-auto px-4">


        {/* Diagram */}
        <div className="relative container mx-auto">
          {/* Connection Lines */}
    

          {/* divs */}
          <div className="relative z-10 flex gap-4 justify-center">
         

            {/* Blockchain div */}
            <div className=" bg-[#F8FCFF] rounded-xl p-8 max-w-[370px]">
              <div className="space-y-4">
                <p className="text-3xl font-semibold text-gray-800">Full-suite solutions</p>
                <p className=" text-gray-600">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
              </div>
            </div>
            {/* Blockchain div */}
            <div className=" bg-[#F8FCFF] rounded-xl p-8 max-w-[370px]">
              <div className="space-y-4">
                <p className="text-3xl font-semibold text-gray-800">Simplify the complex</p>
                <p className=" text-gray-600">Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.</p>
              </div>
            </div>
            {/* Blockchain div */}
            <div className=" bg-[#F8FCFF] rounded-xl p-8 max-w-[370px]">
              <div className="space-y-4">
                <p className="text-3xl font-semibold text-gray-800">Cutting-edge tech</p>
                <p className=" text-gray-600">We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
        </div>
      </section>
    )
};

export default Pholosophy;