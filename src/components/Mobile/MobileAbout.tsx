import React from 'react';
import { ChevronRight, School, Award } from 'lucide-react';

export const MobileAbout: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
      <section className="flex flex-col items-center pt-12 pb-8 space-y-4">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-b from-primary to-primary-container rounded-full blur opacity-25"></div>
          <img 
            src="https://avatars.githubusercontent.com/u/170252175?v=4" 
            alt="Jagadeesan"
            className="relative w-28 h-28 rounded-full border-2 border-white/10 object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">Jagadeesan</h1>
          <p className="text-on-surface-variant font-medium">Version Pro (Build Latest)</p>
        </div>
      </section>

      <div className="px-4 space-y-6">
        <div className="space-y-1">
          <span className="px-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Professional Profile</span>
          <div className="bg-surface-container/60 backdrop-blur-xl rounded-xl overflow-hidden border border-white/5">
            {[
              { label: 'Role', value: 'Full Stack Developer' },
              { label: 'Experience', value: '2 Years' },
              { label: 'Location', value: 'Thanjavur, Tamil nadu', icon: <ChevronRight size={18} className="text-outline" /> },
              { label: 'Current Project', value: 'Bontemps', highlight: true }
            ].map((row, i) => (
              <React.Fragment key={row.label}>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <span className="text-[15px] font-medium text-on-surface">{row.label}</span>
                  <div className="flex items-center gap-1">
                    <span className={`text-[15px] ${row.highlight ? 'text-primary font-medium' : 'text-on-surface-variant'}`}>
                      {row.value}
                    </span>
                    {row.icon}
                  </div>
                </div>
                {i < 3 && <div className="h-[0.5px] mx-4 bg-outline-variant/20" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <span className="px-4 text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Education & Certifications</span>
          <div className="bg-surface-container/60 backdrop-blur-xl rounded-xl overflow-hidden border border-white/5">
            {[
              { title: 'MERN Stack Developer', sub: 'Coursera Certification', icon: <Award size={18} className="text-outline" /> },
              { title: 'Master of computer applications', sub: 'SRM IST, Tiruchirappalli', icon: <School size={18} className="text-outline" /> },
            ].map((item, i) => (
              <React.Fragment key={item.title}>
                <div className="flex items-center justify-between px-4 py-3.5">
                  <div className="flex flex-col">
                    <span className="text-[15px] font-medium text-on-surface">{item.title}</span>
                    <span className="text-[12px] text-on-surface-variant">{item.sub}</span>
                  </div>
                  {item.icon}
                </div>
                {i === 0 && <div className="h-[0.5px] mx-4 bg-outline-variant/20" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <button className="w-full py-3.5 bg-surface-container/60 backdrop-blur-xl rounded-xl text-primary font-medium border border-white/5 active:scale-95 transition-transform">
          Download Resume PDF
        </button>
      </div>
    </div>
  );
};
