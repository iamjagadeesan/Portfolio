import React from 'react';

export const FrontendIsometricIllustration: React.FC = () => (
  <svg
    viewBox="0 0 280 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full object-contain drop-shadow-md"
    aria-hidden="true"
  >
    {/* Soft ambient base shadow */}
    <ellipse cx="145" cy="182" rx="95" ry="16" fill="#DBE4F3" opacity="0.65" />

    {/* Main Desktop Code Window (Tilted Isometric Plane) */}
    <g transform="translate(26, 26)">
      <rect x="6" y="8" width="176" height="122" rx="12" fill="#CBD5E1" opacity="0.45" />
      <rect x="0" y="0" width="176" height="122" rx="12" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1.5" />
      {/* Window Header */}
      <path d="M0 12C0 5.37258 5.37258 0 12 0H164C170.627 0 176 5.37258 176 12V24H0V12Z" fill="#3B4254" />
      <circle cx="14" cy="12" r="3" fill="#F87171" />
      <circle cx="24" cy="12" r="3" fill="#FBBF24" />
      <circle cx="34" cy="12" r="3" fill="#34D399" />

      {/* Sidebar & Code Blocks */}
      <rect x="12" y="34" width="46" height="74" rx="6" fill="#E2E8F0" />
      <rect x="18" y="42" width="26" height="5" rx="2.5" fill="#94A3B8" />
      <rect x="18" y="53" width="34" height="4" rx="2" fill="#CBD5E1" />
      <rect x="18" y="62" width="30" height="4" rx="2" fill="#CBD5E1" />
      <rect x="18" y="71" width="32" height="4" rx="2" fill="#CBD5E1" />
      <rect x="18" y="84" width="22" height="14" rx="4" fill="#6366F1" opacity="0.25" />

      {/* Main UI Grid */}
      <rect x="68" y="34" width="96" height="22" rx="6" fill="#EEF2FF" stroke="#C7D2FE" strokeWidth="1" />
      <rect x="76" y="42" width="44" height="6" rx="3" fill="#6366F1" opacity="0.7" />
      <rect x="128" y="40" width="28" height="10" rx="5" fill="#F59E0B" opacity="0.85" />

      <rect x="68" y="64" width="44" height="44" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
      <circle cx="90" cy="80" r="9" fill="#60A5FA" opacity="0.3" />
      <rect x="76" y="95" width="28" height="4" rx="2" fill="#94A3B8" />

      <rect x="120" y="64" width="44" height="44" rx="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
      <circle cx="142" cy="80" r="9" fill="#F59E0B" opacity="0.25" />
      <rect x="128" y="95" width="28" height="4" rx="2" fill="#94A3B8" />
    </g>

    {/* Floating Left Code Badge </> */}
    <g transform="translate(8, 56)">
      <rect x="0" y="0" width="46" height="34" rx="8" fill="#6366F1" />
      <path d="M16 12L10 17L16 22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 12L36 17L30 22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 10L21 24" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Right Isometric Mobile Device */}
    <g transform="translate(184, 58)">
      <rect x="4" y="6" width="66" height="122" rx="14" fill="#94A3B8" opacity="0.35" />
      <rect x="0" y="0" width="66" height="122" rx="14" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
      <rect x="5" y="7" width="56" height="108" rx="10" fill="#FFFFFF" />
      <rect x="23" y="10" width="20" height="3" rx="1.5" fill="#CBD5E1" />
      <rect x="11" y="20" width="44" height="26" rx="6" fill="#E0E7FF" />
      <rect x="17" y="27" width="24" height="5" rx="2.5" fill="#4F46E5" />
      <rect x="17" y="36" width="30" height="4" rx="2" fill="#818CF8" />
      <rect x="11" y="52" width="20" height="24" rx="5" fill="#FEF3C7" />
      <rect x="35" y="52" width="20" height="24" rx="5" fill="#DCFCE7" />
      <rect x="11" y="82" width="44" height="24" rx="5" fill="#F1F5F9" />
      <rect x="17" y="90" width="28" height="4" rx="2" fill="#64748B" />
      <rect x="17" y="98" width="18" height="3" rx="1.5" fill="#94A3B8" />
    </g>

    {/* Floating Top-Right </> Tag */}
    <g transform="translate(226, 28)">
      <circle cx="18" cy="18" r="16" fill="#E0E7FF" stroke="#818CF8" strokeWidth="1.5" />
      <text x="18" y="22" textAnchor="middle" fill="#4338CA" fontSize="11" fontWeight="700" fontFamily="monospace">
        &lt;/&gt;
      </text>
    </g>

    {/* Interactive Cursor */}
    <g transform="translate(154, 134)">
      <path d="M2 2L14 10L8.5 11.5L11 18L8 19.5L5.5 13L2 16.5V2Z" fill="#1E293B" stroke="#FFFFFF" strokeWidth="1.2" />
    </g>
  </svg>
);

export const BackendIsometricIllustration: React.FC = () => (
  <svg
    viewBox="0 0 280 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full object-contain drop-shadow-md"
    aria-hidden="true"
  >
    {/* Ambient Base */}
    <ellipse cx="145" cy="176" rx="96" ry="18" fill="#DCE4F5" opacity="0.7" />

    {/* Connecting Pipeline Lines */}
    <path d="M62 118L108 140M170 140L212 120M142 52V78" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 5" />

    {/* Left Stacked Database Cylinders */}
    <g transform="translate(24, 72)">
      <ellipse cx="32" cy="76" rx="28" ry="10" fill="#64748B" opacity="0.25" />
      {/* Layer 1 */}
      <path d="M6 54V70C6 75.5 17.6 80 32 80C46.4 80 58 75.5 58 70V54H6Z" fill="#6366F1" />
      <ellipse cx="32" cy="54" rx="26" ry="9" fill="#818CF8" />
      {/* Layer 2 */}
      <path d="M6 34V50C6 55.5 17.6 60 32 60C46.4 60 58 55.5 58 50V34H6Z" fill="#4F46E5" />
      <ellipse cx="32" cy="34" rx="26" ry="9" fill="#818CF8" />
      {/* Layer 3 */}
      <path d="M6 14V30C6 35.5 17.6 40 32 40C46.4 40 58 35.5 58 30V14H6Z" fill="#4338CA" />
      <ellipse cx="32" cy="14" rx="26" ry="9" fill="#A5B4FC" />
      <circle cx="18" cy="26" r="2" fill="#FDE68A" />
      <circle cx="18" cy="46" r="2" fill="#34D399" />
      <circle cx="18" cy="66" r="2" fill="#34D399" />
    </g>

    {/* Center Isometric Server Rack */}
    <g transform="translate(102, 74)">
      {/* Rack Body */}
      <rect x="4" y="6" width="76" height="86" rx="10" fill="#1E293B" />
      <rect x="0" y="0" width="76" height="86" rx="10" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
      {/* Server Blades */}
      <rect x="8" y="10" width="60" height="18" rx="4" fill="#1E293B" />
      <circle cx="17" cy="19" r="3" fill="#34D399" />
      <rect x="26" y="17" width="32" height="4" rx="2" fill="#64748B" />

      <rect x="8" y="34" width="60" height="18" rx="4" fill="#1E293B" />
      <circle cx="17" cy="43" r="3" fill="#60A5FA" />
      <rect x="26" y="41" width="32" height="4" rx="2" fill="#64748B" />

      <rect x="8" y="58" width="60" height="18" rx="4" fill="#1E293B" />
      <circle cx="17" cy="67" r="3" fill="#FBBF24" />
      <rect x="26" y="65" width="32" height="4" rx="2" fill="#64748B" />
    </g>

    {/* API Cloud Node on Top */}
    <g transform="translate(120, 12)">
      <path
        d="M22 44H62C70.8 44 78 36.8 78 28C78 19.7 71.7 12.9 63.6 12.1C60.6 5.1 53.6 0 45.4 0C34.5 0 25.7 8.8 25.7 19.7C25.7 20.1 25.7 20.5 25.7 20.9C17.1 22 10.5 29.3 10.5 38.2C10.5 41.4 15.6 44 22 44Z"
        fill="#FFFFFF"
        stroke="#93C5FD"
        strokeWidth="2"
      />
      <text x="45" y="31" textAnchor="middle" fill="#1E3A8A" fontSize="15" fontWeight="800" fontFamily="monospace">
        API
      </text>
    </g>

    {/* Right Security Padlock & Gear */}
    <g transform="translate(194, 86)">
      <circle cx="44" cy="22" r="14" fill="#E0E7FF" stroke="#818CF8" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="44" cy="22" r="5" fill="#6366F1" />

      {/* Padlock */}
      <g transform="translate(4, 24)">
        <path d="M12 18V12C12 6.5 16.5 2 22 2C27.5 2 32 6.5 32 12V18" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" />
        <rect x="4" y="16" width="36" height="30" rx="7" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
        <circle cx="22" cy="29" r="3.5" fill="#1E293B" />
        <path d="M22 31V37" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

export const IntegrateIsometricIllustration: React.FC = () => (
  <svg
    viewBox="0 0 280 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full object-contain drop-shadow-md"
    aria-hidden="true"
  >
    {/* Ambient Shadow */}
    <ellipse cx="145" cy="182" rx="95" ry="15" fill="#DCE4F5" opacity="0.7" />

    {/* Connecting Network Lines */}
    <path
      d="M142 54V88M142 126L78 148M142 126L208 146M92 84L118 98M196 84L168 98"
      stroke="#60A5FA"
      strokeWidth="2.2"
      strokeDasharray="4 4"
      strokeLinecap="round"
    />

    {/* Top Cloud Infrastructure Cluster */}
    <g transform="translate(86, 10)">
      <path
        d="M28 52H88C98.5 52 107 43.5 107 33C107 23.1 99.4 15 89.7 14.1C86.1 5.8 77.8 0 68.1 0C55.1 0 44.6 10.5 44.6 23.5C44.6 24 44.6 24.5 44.7 25C34.4 26.3 26.5 35 26.5 45.6C26.5 49.2 27.1 52 28 52Z"
        fill="#FFFFFF"
        stroke="#93C5FD"
        strokeWidth="2"
      />
      <text x="54" y="33" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="800" fontFamily="sans-serif">
        AWS
      </text>
      <path d="M40 39C48 44 60 44 68 39" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="84" cy="28" r="8" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.5" />
    </g>

    {/* Center Isometric Globe Hub */}
    <g transform="translate(114, 78)">
      <circle cx="28" cy="28" r="24" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
      <ellipse cx="28" cy="28" rx="11" ry="24" stroke="#60A5FA" strokeWidth="1.5" />
      <path d="M6 28H50M10 17H46M10 39H46" stroke="#60A5FA" strokeWidth="1.5" />
      <circle cx="28" cy="28" r="5" fill="#F59E0B" />
    </g>

    {/* Left Node: API */}
    <g transform="translate(36, 128)">
      <rect x="0" y="0" width="54" height="36" rx="10" fill="#1E293B" />
      <text x="27" y="22" textAnchor="middle" fill="#DFC598" fontSize="12" fontWeight="700" fontFamily="monospace">
        API
      </text>
    </g>

    {/* Right Node: Containers / CI-CD */}
    <g transform="translate(186, 122)">
      <rect x="0" y="0" width="60" height="44" rx="10" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
      <rect x="10" y="10" width="16" height="10" rx="2" fill="#3B82F6" />
      <rect x="30" y="10" width="16" height="10" rx="2" fill="#60A5FA" />
      <rect x="10" y="24" width="16" height="10" rx="2" fill="#6366F1" />
      <rect x="30" y="24" width="16" height="10" rx="2" fill="#F59E0B" />
    </g>

    {/* Left-Top Gear */}
    <g transform="translate(56, 66)">
      <circle cx="16" cy="16" r="13" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="16" cy="16" r="5" fill="#4F46E5" />
    </g>

    {/* Right-Top Code Node */}
    <g transform="translate(198, 66)">
      <circle cx="16" cy="16" r="14" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.8" />
      <text x="16" y="20" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="800" fontFamily="monospace">
        CI/CD
      </text>
    </g>
  </svg>
);
