import React from 'react';
import { EXPERIENCE } from '../../constants';
import { FaWifi } from "react-icons/fa6";
import { IoBluetoothSharp } from "react-icons/io5";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePrivacyTip } from "react-icons/md";

import { PiTerminalFill } from "react-icons/pi";
import { VscVerifiedFilled } from "react-icons/vsc";

import { FiChevronRight } from "react-icons/fi";

export const AboutView: React.FC = () => {
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-white/5 flex flex-col pt-4 shrink-0">
        <div className="px-4 py-2">
          {/* <div className="flex items-center gap-3 p-2 bg-white/10 rounded-xl mb-6">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src="https://iamjagadeesan.github.io/Portfolio/assets/me-DzIxKkc6.png" 
                alt="Alex Rivera"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold">Jagadeesan</span>
              <span className="text-[11px] text-on-surface-variant">Full Stack Developer</span>
            </div>
          </div> */}
          
          <nav className="space-y-0.5">
            {[
              { icon: <FaWifi />, label: 'Wi-Fi' },
              { icon: <IoBluetoothSharp />, label: 'Bluetooth' },
              { icon: <HiOutlineViewGridAdd />, label: 'Appearance' },
              { icon: <IoSettingsOutline />, label: 'General', active: true },
              { icon: <MdOutlinePrivacyTip />, label: 'Privacy & Security' }
            ].map((item) => (
              <div 
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2 text-[13px] rounded-md cursor-pointer transition-colors ${
                  item.active 
                    ? 'text-white bg-primary-container/20 mt-4' 
                    : 'text-on-surface-variant hover:bg-white/5'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                <span className={item.active ? 'font-medium' : ''}>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <section className="flex-1 flex flex-col overflow-y-auto no-scrollbar">
        <header className="pt-12 pb-8 flex flex-col items-center justify-center text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 shadow-xl flex items-center justify-center border border-white/10 overflow-hidden">
              <img 
                src="https://avatars.githubusercontent.com/u/170252175?v=4" 
                alt="Jagadeesan"
                className="w-full h-full object-cover saturate-50"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-surface-bright border-2 border-surface flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-[16px]"><VscVerifiedFilled className={`text-white`} /></span>
            </div>
          </div>
          <h1 className="text-[24px] font-bold tracking-tight">Jagadeesan</h1>
          <p className="text-[13px] text-on-surface-variant mt-1">Version Pro (Build Latest)</p>
          <button className="mt-4 px-4 py-1.5 bg-surface-bright hover:bg-surface-container-highest transition-colors rounded-md text-[12px] font-medium border border-white/5">
            Software Update...
          </button>
        </header>

        <div className="px-8 pb-12 max-w-2xl mx-auto w-full space-y-8">
          {/* Professional Details */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Professional Details</h3>
            <div className="bg-surface-container-high rounded-xl overflow-hidden border border-white/5">
              {[
                { label: 'Role', value: 'Full Stack Developer' },
                { label: 'Experience', value: '2 Years' },
                { label: 'Location', value: 'Thanjavur, Tamilnadu' },
                { label: 'Current Project', value: 'Bontemps', link: true }
              ].map((row, i) => (
                <React.Fragment key={row.label}>
                  <div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors cursor-default">
                    <span className="text-[13px]">{row.label}</span>
                    <span className={`text-[13px] ${row.link ? 'text-primary hover:underline cursor-pointer' : 'text-on-surface-variant'}`}>
                      {row.value}
                    </span>
                  </div>
                  {i < 3 && <div className="h-[1px] bg-white/5 mx-4" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant px-1">Education & Certifications</h3>
            <div className="bg-surface-container-high rounded-xl overflow-hidden border border-white/5">
              {[
                { title: 'Master of computer applications', sub: 'SRM Institute of Science and Technology, Tiruchirappalli' },
                { title: 'Bachelors of computer science', sub: 'Annaivailankanni Arts and Science College, Thanjavur' }
              ].map((item, i) => (
                <React.Fragment key={item.title}>
                  <div className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors cursor-default">
                    <div className="flex flex-col">
                      <span className="text-[13px]">{item.title}</span>
                      <span className="text-[11px] text-on-surface-variant">{item.sub}</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant"><FiChevronRight /></span>
                  </div>
                  {i === 0 && <div className="h-[1px] bg-white/5 mx-4" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Regulatory Info */}
          <div className="flex justify-center pt-4">
            <p className="text-[11px] text-on-surface-variant text-center max-w-xs leading-relaxed">
              Jagadeesan © 2026 Portfolio OS. All rights reserved. 
              Designed by me.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
