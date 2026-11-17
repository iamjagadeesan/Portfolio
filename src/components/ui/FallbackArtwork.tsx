import React from 'react';
import { FiCode, FiLayers, FiShoppingBag, FiStar, FiUser } from 'react-icons/fi';

export const LogoFallback: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <span
    className={`inline-flex items-center justify-center rounded-lg bg-[#111215] text-[#DFC598] font-extrabold text-sm tracking-tight ${className}`}
    aria-hidden="true"
  >
    J
  </span>
);

export const PortraitFallback: React.FC = () => (
  <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-3xl bg-gradient-to-b from-[#FAF8F5] to-[#EFE7D6] border border-[#E5DCCB] flex flex-col items-center justify-center p-6 text-center shadow-xl">
    <div className="w-24 h-24 rounded-full bg-[#111215] text-[#DFC598] flex items-center justify-center mb-4 shadow-md">
      <FiUser className="w-11 h-11" strokeWidth={1.6} />
    </div>
    <p className="text-base font-bold text-neutral-900">Jagadeesan</p>
    <p className="text-xs font-medium text-neutral-600 mt-1">Full Stack Developer · India</p>
  </div>
);

export const ProjectMockupFallback: React.FC<{ title: string; variant?: 'slate' | 'amber' | 'sky' }> = ({
  title,
  variant = 'slate',
}) => {
  const palette =
    variant === 'amber'
      ? 'from-amber-50 to-orange-100/70 border-amber-200/80 text-amber-900'
      : variant === 'sky'
      ? 'from-sky-50 to-indigo-100/70 border-sky-200/80 text-sky-900'
      : 'from-slate-50 to-slate-200/70 border-slate-200 text-slate-900';

  return (
    <div
      className={`w-full h-full min-h-[220px] rounded-2xl bg-gradient-to-br ${palette} border p-6 flex flex-col justify-between shadow-inner`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-current opacity-20" />
          <span className="w-2.5 h-2.5 rounded-full bg-current opacity-20" />
          <span className="w-2.5 h-2.5 rounded-full bg-current opacity-20" />
        </div>
        <FiShoppingBag className="w-4 h-4 opacity-50" />
      </div>
      <div className="space-y-2.5 my-4">
        <div className="h-3 w-2/3 rounded bg-current opacity-15" />
        <div className="h-2.5 w-full rounded bg-current opacity-10" />
        <div className="h-2.5 w-4/5 rounded bg-current opacity-10" />
      </div>
      <div className="flex items-center justify-between text-xs font-semibold opacity-75">
        <span className="truncate">{title}</span>
        <span>Case Study</span>
      </div>
    </div>
  );
};

export const AboutIllustrationFallback: React.FC = () => (
  <div className="w-full max-w-[380px] aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#FAF8F5] via-[#F5EEDF] to-[#EAE0CA] border border-[#E5D8BD] p-6 flex flex-col justify-between shadow-lg">
    <div className="flex items-center justify-between">
      <span className="text-xs font-mono font-semibold text-amber-900">architecture.ts</span>
      <FiLayers className="w-5 h-5 text-amber-800" />
    </div>
    <div className="grid grid-cols-3 gap-3 my-4">
      <div className="h-20 rounded-xl bg-white/80 border border-amber-200/60 flex flex-col items-center justify-center p-2">
        <span className="text-[11px] font-bold text-neutral-900">UI Layer</span>
        <span className="text-[10px] text-neutral-500 mt-0.5">Next.js</span>
      </div>
      <div className="h-20 rounded-xl bg-neutral-900 text-white flex flex-col items-center justify-center p-2 shadow-md">
        <span className="text-[11px] font-bold text-[#DFC598]">API Core</span>
        <span className="text-[10px] text-neutral-400 mt-0.5">Node / FastAPI</span>
      </div>
      <div className="h-20 rounded-xl bg-white/80 border border-amber-200/60 flex flex-col items-center justify-center p-2">
        <span className="text-[11px] font-bold text-neutral-900">Data</span>
        <span className="text-[10px] text-neutral-500 mt-0.5">PostgreSQL</span>
      </div>
    </div>
    <p className="text-xs text-neutral-700 font-medium">
      End-to-end scalable systems engineering
    </p>
  </div>
);

export const LaptopIllustrationFallback: React.FC = () => (
  <div className="w-full max-w-[340px] aspect-square rounded-3xl bg-gradient-to-br from-[#FAF3E8] to-[#F3E4C8] border border-amber-200/60 p-6 flex flex-col items-center justify-center shadow-lg">
    <div className="w-56 h-36 rounded-xl bg-[#111215] border-4 border-neutral-800 p-4 flex flex-col justify-between shadow-2xl">
      <div className="flex items-center justify-between text-amber-400">
        <FiCode className="w-5 h-5" />
        <FiStar className="w-4 h-4" />
      </div>
      <div className="space-y-1.5">
        <div className="h-2 w-3/4 bg-amber-300/60 rounded" />
        <div className="h-2 w-1/2 bg-neutral-600 rounded" />
        <div className="h-2 w-5/6 bg-neutral-700 rounded" />
      </div>
      <span className="text-[10px] font-mono text-neutral-400">ready_to_collaborate()</span>
    </div>
    <div className="w-64 h-3 bg-neutral-300 rounded-b-xl shadow-md mt-0.5" />
  </div>
);
