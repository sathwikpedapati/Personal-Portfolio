import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const BottomNav: React.FC = () => {
  const btnClass =
    'flex items-center justify-center w-10 h-10 rounded-full text-zinc-500 hover:text-white transition-colors';

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-4 py-2 bg-[#1c1c1c] rounded-full border border-[#2e2e2e] shadow-xl">
        <Link to="home" smooth duration={500} className={`${btnClass} cursor-pointer`} aria-label="Home">
          <FaHome className="w-[17px] h-[17px]" />
        </Link>

        <a
          href="https://www.linkedin.com/in/sathwik-pedapati/"
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-[17px] h-[17px]" />
        </a>

        <a
          href="https://github.com/sathwikpedapati"
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label="GitHub"
        >
          <FaGithub className="w-[17px] h-[17px]" />
        </a>

        <a
          href="https://drive.google.com/file/d/1O77kAES9cfL-f9JQ0izBYHdE3APsEkcP/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label="Resume"
        >
          <FaFileAlt className="w-[17px] h-[17px]" />
        </a>

        <Link to="contact" smooth duration={500} className={`${btnClass} cursor-pointer`} aria-label="Contact">
          <FaEnvelope className="w-[17px] h-[17px]" />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
