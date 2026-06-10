import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 pb-28 bg-black border-t border-[#111111]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} Sathwik Pedapati. Built with React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
