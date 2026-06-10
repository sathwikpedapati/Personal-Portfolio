import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-black px-6"
    >
      <div className="max-w-5xl mx-auto w-full pt-20 pb-28">

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-6 tracking-tight">
          Sathwik<br />Pedapati.
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
         I build experiences, debug bugs, deploy dreams!
        </p>

        <div className="inline-block group">
          <a
            href="#about"
            className="text-[#e91e8c] font-bold text-base sm:text-lg tracking-wide"
          >
            Read more about me →
          </a>
          <div className="h-[2px] bg-[#e91e8c] mt-1" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
