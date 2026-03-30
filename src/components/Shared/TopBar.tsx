import React, { useState, useEffect } from 'react';
import { Wifi, Settings2, Clock } from 'lucide-react';

export const TopBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).replace(',', '');
  };

  return (
    <nav className="hidden top-0 left-0 w-full z-[100] flex items-center px-2 bg-slate-900/75 backdrop-blur-md text-slate-100 font-sans text-[13px] font-medium tracking-tight h-8 select-none">
      <div className="flex items-center gap-1 h-full">
        <div className="text-slate-100 font-bold px-4 cursor-default">Portfolio OS</div>
        {['File', 'Edit', 'View', 'Go', 'Window', 'Help'].map((item, i) => (
          <div
            key={item}
            className={`hover:bg-white/10 hover:text-white px-3 py-1 rounded-md transition-colors cursor-default ${
              i === 0 ? 'text-white opacity-100' : 'text-slate-300 opacity-80'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-4 px-4 h-full">
        <Wifi size={16} className="opacity-80" />
        <Settings2 size={16} className="opacity-80" />
        <Clock size={16} className="opacity-80" />
        <span className="font-medium">{formatTime(time)}</span>
      </div>
    </nav>
  );
};
