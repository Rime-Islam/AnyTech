
const Banner = () => {
    return (
      <div className="relative overflow-hidden min-h-[90vh]">
      {/* Background with gradient */}
      <div className="absolute inset-0  z-0 "   />

      {/* Hero Image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600 to-blue-400"    style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 0% 100%)",
            }}>
        <div className="relative w-full h-full">
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=320&amp;auto=format"
            alt="Professional in business environment"
            className="object-cover w-[70vw] ml-[30vw] object-center"
            style={{
              clipPath: "polygon(75% 0, 100% 0, 100% 78%, 0% 100%)",
            }}
    
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-[15vh] ml-[18vw] px-4 pt-20 pb-32">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Embrace the future of finance
          </h1>
          <p className="text-lg text-white/90">
            Reimagine financial services with AnyTech's open platform, distributed banking solution that powers
            transformation
          </p>
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-md text-lg">
            Reach Out to Us
          </button>
        </div>
      </div>
    </div>

    );
};   

export default Banner;