import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'TalkEasy',
    subtitle: 'Real-Time Chat App',
    date: '2025',
    image: '/chat.jpeg',
    description: 'A real-time messaging platform with live chat, image sharing, authentication, and typing indicators.',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Cloudinary', 'JWT'],
    github: 'https://github.com/sathwikpedapati/Talk-Easy',
    demo: 'https://talk-easy-zjl5.vercel.app/login',
  },
  {
    title: 'Quiz Hub',
    subtitle: 'Full-Stack Quiz Web App',
    date: '2025',
    image: '/quiz.jpeg',
    description: 'A fun and interactive quiz application with trivia questions, scoring, and a clean responsive UI.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/sathwikpedapati/Quiz-Hub',
    demo: 'https://quiz-hub-eight.vercel.app/login',
  },
  {
    title: 'MoneyTrack',
    subtitle: 'Expense Tracker',
    date: '2025',
    image: '/money.jpeg',
    description: 'A personal expense tracking system with budgeting tools and visual spending analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Passport.js', 'Ant Design'],
    github: 'https://github.com/sathwikpedapati/Budget-Buddy',
    demo: 'https://budget-buddy-ashen.vercel.app/login',
  },
  {
    title: 'Recipe Box',
    subtitle: 'Recipe Sharing Platform',
    date: '2025',
    image: '/recipe.jpeg',
    description: 'A recipe sharing platform where users can upload, explore, and manage cooking recipes with image uploads.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    github: 'https://github.com/sathwikpedapati/Recipe-Heaven',
    demo: 'https://recipe-heaven-five.vercel.app/',
  },
  {
    title: 'Address Book',
    subtitle: 'Address Management System',
    date: '2025',
    image: '/address.jpeg',
    description: 'A full-stack address storing application with authentication and full CRUD operations.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Node.js', 'MongoDB', 'Passport.js'],
    github: 'https://github.com/sathwikpedapati/Address-Book',
    demo: 'https://address-book-mv3s.onrender.com/alladdress',
  },
  {
    title: 'NewsToday',
    subtitle: 'Live News Platform',
    date: '2025',
    image: '/news.jpeg',
    description: 'A real-time news aggregation platform with category filters, dark/light theme, and user profiles.',
    tags: ['React', 'Node.js', 'MongoDB', 'Ant Design'],
    github: 'https://github.com/sathwikpedapati/News-Today',
    demo: 'https://news-platform-sand.vercel.app/login',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-black px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Things I've built</h2>
        <p className="text-sm text-zinc-500 mb-12 max-w-xl">
          I build projects with purpose, tackling real-world problems through scalable solutions in communication, finance, and information access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col bg-[#0d0d0d] rounded-xl border border-[#1f1f1f] overflow-hidden hover:border-[#e91e8c]/40 transition-all duration-300"
            >
              <div className="h-44 overflow-hidden bg-[#111111]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-base font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-zinc-600">{project.subtitle}</p>
                  </div>
                  <span className="text-xs text-zinc-600 ml-2 flex-shrink-0">{project.date}</span>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mt-3 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-[#111111] text-zinc-500 rounded-full border border-[#2a2a2a]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-[#1f1f1f]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-3.5 h-3.5" /> Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-[#e91e8c] hover:opacity-75 transition-opacity"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
