import React from 'react';

const certifications = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Apna College',
    date: '2024',
  },
];

const Certifications: React.FC = () => {
  return (
    <section className="py-16 bg-black px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">Certifications</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Credentials</h2>

        <div className="space-y-4 max-w-2xl">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 bg-[#0d0d0d] rounded-xl border border-[#1f1f1f] hover:border-[#e91e8c]/30 transition-colors"
            >
              <div>
                <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-zinc-500 mt-0.5">{cert.issuer}</p>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 bg-[#111111] text-zinc-400 rounded-full border border-[#2a2a2a] flex-shrink-0 ml-4">
                {cert.date}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
