import React from 'react';
import { EXPERIENCE } from '../../constants';
import { ArrowDownToLine } from 'lucide-react';

export const ExperienceView: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-background">
      <div className="p-10 overflow-y-auto no-scrollbar">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Professional Path</h1>
        <p className="text-on-surface-variant text-lg mb-12">Curating digital excellence since 2018.</p>

        <div className="relative pl-8 border-l border-outline-variant/20 space-y-12">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Dot */}
              <div className={`absolute -left-[40px] top-1 w-4 h-4 rounded-full border-4 border-background ${
                exp.current ? 'bg-primary ring-4 ring-primary/20' : 'bg-outline-variant'
              }`} />
              
              <div className="bg-surface-container-high/50 glass-panel p-6 rounded-xl border border-outline-variant/10 shadow-sm transition-all hover:bg-surface-container-highest/60">
                <div className="flex justify-between items-start mb-2">
                  <span className={`font-bold text-xs uppercase tracking-widest ${exp.current ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] font-bold">CURRENT</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                <p className="text-on-surface-variant font-medium mb-4">{exp.company}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{exp.description}</p>
                
                {exp.tags && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold bg-surface-container-highest px-2 py-1 rounded text-on-surface-variant">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="my-12 ">
          <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
            <span className="material-symbols-outlined"><ArrowDownToLine /></span>
            <span>Download Resume (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
