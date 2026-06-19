import React from 'react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'GMR Institute of Technology',
    duration: '2022 – 2026',
    score: '8.74 CGPA',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    duration: '2020 – 2022',
    score: '91.9%',
  },
  {
    degree: 'Secondary School Education',
    institution: 'Sri Chaitanya Techno School',
    duration: '2019 – 2020',
    score: '96.6%',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-black px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">Education</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Academic Background</h2>

        <div className="relative border-l border-[#1f1f1f] ml-3 space-y-10">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#e91e8c] border-2 border-black" />
              <p className="text-xs text-zinc-600 mb-1">{edu.duration}</p>
              <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
              <p className="text-sm text-zinc-500">{edu.institution}</p>
              <span className="inline-block mt-2 text-xs font-medium px-2.5 py-0.5 bg-[#111111] text-zinc-400 rounded-full border border-[#2a2a2a]">
                {edu.score}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
