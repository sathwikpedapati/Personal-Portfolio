import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    setError('');
    try {
      await emailjs.sendForm('service_ogc697d', 'template_adhlpqs', formRef.current!, 'XvS_Tl7ws8lnInT7q');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-2.5 text-sm bg-[#111111] border border-[#2a2a2a] rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-[#e91e8c]/50 transition-colors';

  return (
    <section id="contact" className="py-24 bg-[#080808] px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-3">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get in touch</h2>
        <p className="text-sm text-zinc-500 mb-12 max-w-md">
          Have a project in mind or just want to chat? My inbox is always open.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#111111] border border-[#2a2a2a]">
                <FaMapMarkerAlt className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              <div>
                <p className="text-xs text-zinc-600">Location</p>
                <p className="text-sm font-medium text-zinc-300">Chodavaram, Anakapalle</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#111111] border border-[#2a2a2a]">
                <FaEnvelope className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              <div>
                <p className="text-xs text-zinc-600">Email</p>
                <a href="mailto:sathwikpedapati275@gmail.com" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                  sathwikpedapati275@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#111111] border border-[#2a2a2a]">
                <FaPhone className="w-3.5 h-3.5 text-zinc-500" />
              </div>
              <div>
                <p className="text-xs text-zinc-600">Phone</p>
                <a href="tel:+918143833945" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                  +91-8143833945
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-zinc-600 mb-3">Find me on</p>
              <div className="flex gap-3">
                <a href="https://github.com/sathwikpedapati" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#111111] border border-[#2a2a2a] text-zinc-500 hover:text-white hover:border-[#3a3a3a] transition-colors">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/sathwik-pedapati/" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#111111] border border-[#2a2a2a] text-zinc-500 hover:text-white hover:border-[#3a3a3a] transition-colors">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="https://leetcode.com/u/sathwikpedapati275/" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#111111] border border-[#2a2a2a] text-zinc-500 hover:text-white hover:border-[#3a3a3a] transition-colors">
                  <SiLeetcode className="w-4 h-4" />
                </a>
                <a href="https://www.codechef.com/users/sathwik275" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#111111] border border-[#2a2a2a] text-zinc-500 hover:text-white hover:border-[#3a3a3a] transition-colors">
                  <SiCodechef className="w-4 h-4" />
                </a>
                <a href="https://codeforces.com/profile/sathwikpedapati275" target="_blank" rel="noopener noreferrer"
                   className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#111111] border border-[#2a2a2a] text-zinc-500 hover:text-white hover:border-[#3a3a3a] transition-colors">
                  <SiCodeforces className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div>
            {isSubmitted ? (
              <div className="p-4 bg-[#111111] border border-[#2a2a2a] rounded-lg text-sm text-zinc-300">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-950/30 border border-red-800/50 rounded-lg text-sm text-red-400">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-500 mb-1.5">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}
                           placeholder="Your name" className={inputClass} required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-500 mb-1.5">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                           placeholder="your@email.com" className={inputClass} required />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1.5">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange}
                         placeholder="What's this about?" className={inputClass} />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-500 mb-1.5">Message *</label>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange}
                            placeholder="Your message..." className={inputClass} required />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#e91e8c] text-white text-sm font-semibold rounded-lg hover:bg-[#c8187a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Sending...' : <><FaPaperPlane className="w-3.5 h-3.5" /> Send Message</>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
