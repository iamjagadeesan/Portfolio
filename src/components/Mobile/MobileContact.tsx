import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiDraftLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";

export const MobileContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('bide0t4C7a09Rqyd1');
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message cannot be empty';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_bo5zdp6',
        'template_a1c442f',
        e.target,
        'bide0t4C7a09Rqyd1'
      );

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-32 px-4 pt-8">
      <div className="mb-8 px-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-1">New Message</h1>
        <p className="text-on-surface-variant text-sm">Compose your inquiry or collaboration request.</p>
      </div>

      {success && (
        <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6 text-green-400">
          ✅ Message sent successfully!
        </div>
      )}

      {errors.submit && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6 text-red-400">
          ❌ {errors.submit}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-surface-container-high/50 backdrop-blur-xl rounded-xl overflow-hidden shadow-2xl border border-white/5">
          <div className="flex items-center px-4 py-3.5 gap-4 border-b border-white/5">
            <label className="text-on-surface-variant font-medium min-w-[60px] text-sm">To:</label>
            <div className="flex-1 flex items-center gap-2">
              <span className="bg-primary/20 text-primary text-xs px-2.5 py-0.5 rounded-full font-medium">@ Jagadeesan</span>
            </div>
          </div>
          
          <div className="flex items-center px-4 py-3.5 gap-4 border-b border-white/5">
            <label className="text-on-surface-variant font-medium min-w-[60px] text-sm">From:</label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-none p-0 focus:ring-0 text-on-surface w-full placeholder:text-outline/50 text-sm focus:outline-0" 
              placeholder="Your name" 
              type="text"
            />
          </div>

          <div className="flex items-center px-4 py-3.5 gap-4">
            <label className="text-on-surface-variant font-medium min-w-[60px] text-sm">Email:</label>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-none p-0 focus:ring-0 text-on-surface w-full placeholder:text-outline/50 text-sm focus:outline-0" 
              placeholder="your@email.com" 
              type="email"
            />
          </div>
        </div>

        {(errors.name || errors.email) && (
          <div className="text-red-400 text-xs space-y-1">
            {errors.name && <p>• {errors.name}</p>}
            {errors.email && <p>• {errors.email}</p>}
          </div>
        )}

        <div className="bg-surface-container-high/50 backdrop-blur-xl rounded-xl p-4 min-h-[250px] shadow-lg border border-white/5 flex flex-col">
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border-none p-0 focus:ring-0 text-on-surface w-full h-full resize-none placeholder:text-outline/50 focus:outline-0 text-sm leading-relaxed" 
            placeholder="Type your message here..."
          />
        </div>

        {errors.message && (
          <p className="text-red-400 text-xs">• {errors.message}</p>
        )}

        <div className="grid grid-cols-2 gap-4 mb-12">
          <button 
            type="button"
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-surface-container-highest text-on-surface font-semibold active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-[20px]"><RiDraftLine/></span>
            Save Draft
          </button>
          <button 
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-on-primary font-bold active:scale-95 transition-transform shadow-lg shadow-primary/20 disabled:opacity-70">
            {loading ? (
              <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px] material-symbols-fill"><IoSend/></span>
                Send
              </>
            )}
          </button>
        </div>

        <h2 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 px-2">Other Ways to Connect</h2>
        <div className="grid grid-cols-2 gap-3">
          <a href="https://linkedin.com/in/iamjagadeesan" target="_blank" rel="noopener noreferrer" className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-3 border border-white/5 active:bg-surface-container-high transition-colors">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              <span className="material-symbols-outlined"><FaLinkedin/></span>
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-tighter text-outline">LinkedIn</p>
              <p className="text-xs font-medium text-white">/in/iamjagadeesan</p>
            </div>
          </a>
          <a href="https://github.com/iamjagadeesan" target="_blank" rel="noopener noreferrer" className="bg-surface-container-low p-4 rounded-xl flex flex-col gap-3 border border-white/5 active:bg-surface-container-high transition-colors">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400">
              <span className="material-symbols-outlined"><FaGithub/></span>
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-tighter text-outline">GitHub</p>
              <p className="text-xs font-medium text-white">iamjagadeesan</p>
            </div>
          </a>
        </div>
      </form>
    </div>
  );
};
