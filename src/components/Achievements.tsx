import React from 'react';

const achievements = [
  {
    emoji: '🏆',
    title: 'CodeChef Gold Badge',
    description: '500+ problems solved',
  },
  {
    emoji: '💻',
    title: 'Full-Stack Applications',
    description: 'Built 10+ production-ready full-stack apps',
  },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">Achievements</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Milestones</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#0d0d0d] rounded-xl border border-[#1f1f1f] hover:border-[#e91e8c]/30 transition-colors"
            >
              <span className="text-2xl mb-3 block">{item.emoji}</span>
              <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
