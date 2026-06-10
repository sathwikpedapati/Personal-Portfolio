import React from 'react';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Revidd',
    location: 'Visakhapatnam, India',
    duration: 'Jan 2026 – May 2026',
    responsibilities: [
      'Developed and enhanced Android application features by translating functional requirements into clean, user-friendly interfaces.',
      'Built backend services using Java and MongoDB to ensure reliable data storage and application functionality.',
      'Integrated frontend and backend components to enable seamless data flow and responsive system performance.',
      'Communicated technical progress effectively within the team and maintained essential project documentation.',
    ],
    tech: ['Android Studio', 'Java', 'MongoDB'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Cerevyn Solutions',
    location: 'Hyderabad, India',
    duration: 'Dec 2025 – Jan 2026',
    responsibilities: [
      'Contributed to the development of an enterprise-level Sales and Dealer Management System for monitoring and reporting.',
      'Designed and implemented analytical dashboards including Target vs Achievement, Outstanding Payments, and Product-wise Sales.',
      'Collaborated with stakeholders to gather requirements, clarify expectations, and propose practical technical solutions.',
      'Worked with cross-functional teams to deliver scalable, maintainable, and quality-focused solutions.',
    ],
    tech: ['React.js', 'Node.js', 'Supabase', 'Python'],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-[#080808] px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Where I've worked</h2>

        <div className="relative border-l border-[#1f1f1f] ml-3 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#e91e8c] border-2 border-[#080808]" />

              <p className="text-xs text-zinc-600 mb-1">{exp.duration}</p>
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <p className="text-sm font-medium text-zinc-500 mb-4">
                {exp.company} · {exp.location}
              </p>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="text-sm text-zinc-400 flex gap-2">
                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 text-xs font-medium bg-[#111111] text-zinc-400 rounded-full border border-[#2a2a2a]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
