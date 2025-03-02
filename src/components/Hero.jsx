import React from "react";

function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 bg-slate-400 text-white">
            
            <div className="max-w-2xl text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Smart Solutions for <span className="text-yellow-400">Smart Businesses</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                    Experience excellence with top-tier performance, expert support, and tailored business solutions.
                </p>
                <div className="mt-6 flex justify-center md:justify-start gap-4">
                    <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                        Get Started
                    </button>
                    <button className="bg-white text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                        Learn More
                    </button>
                </div>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
                    {[
                        "Experience",
                        "Customization",
                        "Support",
                        "Performance",
                        "Cases Solved",
                        "Business Partners"
                    ].map((feature, index) => (
                        <div key={index} className="bg-gray-800 p-3 rounded-lg shadow-md">
                            <span className="font-semibold text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            
            <div className="mt-500 md:mt-700">
                <img
                    src="https://readymadeui.com/team-3.webp"
                    alt="Professional Businesswoman"
                    className="w-full max-w-sm rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}


export default Hero;


/*
<section class='bg-[#213343] py-20 px-10'>
            <div class='grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-xl mx-auto'>
                <div>
                    <h1 class='text-white text-4xl lg:text-5xl font-semibold mb-6'>Build Your Next Project With Readymade UI</h1>
                    <p class='text-gray-300 text-lg mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button class='bg-[#FFA726] text-white px-6 py-2 rounded hover:bg-[#FFA726] transition-all'>Get Started</button>
                </div>
                <div class='hidden lg:block'>
                    <img src="https://readymadeui.com/hero.png" alt="hero" />
                </div>
            </div>
        </section>
  );
};
*/

/*
<section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Elevate Your Ideas with <span className="text-yellow-300">Amazing UI</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Build stunning websites with ease using Tailwind CSS & React.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Get Started
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <img
          src="https://source.unsplash.com/500x500/?technology,web"
          alt="Hero"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>
    </section> */