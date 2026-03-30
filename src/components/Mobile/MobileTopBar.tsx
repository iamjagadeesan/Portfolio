import React, { useState, useEffect } from 'react';
import { Battery, Wifi, Signal, BatteryFull } from 'lucide-react';

export const MobileTopBar: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-50 w-full h-11 px-8 flex justify-between items-center text-white font-semibold text-sm">
      <span>{time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false })}</span>
      
      {/* Dynamic Island Simulation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[120px] h-[36px] bg-black rounded-[20px] flex items-center justify-center gap-2">
        <div className="w-1 h-3 bg-blue-400/50 rounded-full animate-pulse" />
        <div className="w-1 h-2 bg-blue-400/50 rounded-full animate-pulse delay-75" />
        <div className="w-1 h-4 bg-blue-400/50 rounded-full animate-pulse delay-150" />
      </div>

      <div className="flex items-center gap-1.5">
        <Signal size={16} />
        <Wifi size={16} />
        <BatteryFull size={18} className="rotate-0" />
      </div>
    </div>
  );
};
