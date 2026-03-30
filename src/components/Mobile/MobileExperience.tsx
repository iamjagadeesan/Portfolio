import React from 'react';
import { EXPERIENCE } from '../../constants';
import { ArrowDownToLine } from 'lucide-react';

export const MobileExperience: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar pb-32 px-4 pt-8">
      <div className="mb-8 px-2">
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Professional Path</h1>
        <p className="text-on-surface-variant text-sm font-medium">Curating digital excellence since 2018.</p>
      </div>

      <div className="relative ml-2 pl-6 border-l border-outline-variant/50 space-y-8">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="relative">
            <div className={`absolute -left-[31px] top-1 w-3 h-3 rounded-full border-2 border-background ${
              exp.current ? 'bg-primary ring-4 ring-primary/20' : 'bg-outline-variant'
            }`} />
            
            <div className="bg-surface-container-high/50 backdrop-blur-xl p-4 rounded-xl border border-outline-variant/10 shadow-sm">
              <div className="flex justify-between items-start mb-1">
                <span className={`font-bold text-[10px] uppercase tracking-widest ${exp.current ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {exp.period}
                </span>
                {exp.current && (
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[8px] font-bold">CURRENT</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">{exp.role}</h3>
              <p className="text-on-surface-variant text-xs font-medium mb-3">{exp.company}</p>
              
              {exp.tags && (
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold bg-surface-container-highest px-2 py-0.5 rounded text-on-surface-variant">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 w-full py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
        <span className="material-symbols-outlined"><ArrowDownToLine /></span>
        <span>Download Resume (PDF)</span>
      </button>
    </div>
  );
};
