const LandingPage = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="shadow-md border-b border-black">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-xl font-bold">Nyt Owls</div>

          <div className="font-bold text-xl flex items-center space-x-4">
            <span>|</span>
            <a href="#" className="px-2 py-1 hover:bg-amber-300 transition rounded">
              Contact Us
            </a>
            <span>|</span>
            <a href="#" className="px-2 py-1 hover:bg-amber-300 transition rounded">
              Menu
            </a>
            <span>|</span>
          </div>
        </div>
      </nav>

      {/* Section below Navbar */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/img.png" 
            alt="Sample"
            className="w-full max-w-md object-contain"
          />
        </div>
        <div>
          <h1 className="text-8xl font-bold mb-4 mt-30 font-mono">That <span>Craving</span> Place</h1>
          <p className="text-3xl text-gray-700 mb-4 font-mono mt-10">
           The best spots for your cravings
          </p>
          <button className="bg-amber-300 px-6 py-2 rounded hover:bg-amber-400 transition font-bold mt-5">
            Order Now
          </button>
        </div>
       

        {/* Right Text */}
        
      </section>
    </>
  );
};

export default LandingPage;
