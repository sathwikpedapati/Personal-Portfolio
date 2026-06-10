import React from 'react';

const skillGroups = [
  { label: 'Languages', skills: ['JavaScript', 'Python', 'Java' ] },
  { label: 'Frontend', skills: ['React.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Ant Design'] },
  { label: 'Backend & DB', skills: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful APIs'] },
  { label: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'VS Code'] },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[#080808] px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">About</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Who I am</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <div>
            <div className="w-64 h-64 rounded-2xl overflow-hidden border border-[#1f1f1f]">
              <img
                src="/ram.jpg"
                alt="Sathwik Pedapati"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-base text-zinc-400 leading-relaxed mb-8">
              Full-Stack Developer | Competitive Programmer
            </p>

            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-[#111111] text-zinc-300 rounded-full border border-[#2a2a2a]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
