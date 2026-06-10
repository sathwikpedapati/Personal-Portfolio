import React from 'react';
import { Link } from 'react-scroll';

const Navigation: React.FC = () => {
  return (
    <header className="fixed w-full z-50 px-6 py-5">
      <div className="max-w-5xl mx-auto flex justify-between items-center">

        <Link to="home" smooth duration={500} className="cursor-pointer">
          <div className="text-xl font-bold text-white tracking-tight leading-none border-b-[3px] border-[#e91e8c] pb-1">
            SP.
          </div>
        </Link>

        <div className="flex items-center gap-2.5 px-4 py-2 bg-[#1c1c1c] rounded-full border border-[#2e2e2e]">
          <span className="w-2 h-2 rounded-full bg-zinc-500 flex-shrink-0" />
          <span className="text-sm text-zinc-400 whitespace-nowrap">Open to Work</span>
        </div>

      </div>
    </header>
  );
};

export default Navigation;
