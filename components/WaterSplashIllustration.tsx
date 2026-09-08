import React from 'react';

export default function WaterSplashIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="waterGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="waterGrad2" x1="0%" y1="100%" x2="80%" y2="10%">
            <stop offset="0%" stopColor="#0369a1" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#0ea5e9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.4" />
          </linearGradient>
          <filter id="waterGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Primary water splash wave */}
        <path
          d="M-50,320 C20,280 60,250 90,260 C130,275 160,220 180,180 C195,150 210,120 220,95 C225,82 232,70 238,62 C242,56 248,58 246,68 C242,88 220,130 190,175 C160,220 120,265 80,285 C40,305 -10,320 -50,320 Z"
          fill="url(#waterGrad1)"
          filter="url(#waterGlow)"
        />

        {/* Secondary soaring crest */}
        <path
          d="M-30,310 C30,270 75,230 120,200 C155,175 185,130 205,80 C212,62 220,40 228,25 C232,18 238,15 240,24 C242,35 235,55 225,85 C210,130 170,195 125,240 C80,285 20,310 -30,310 Z"
          fill="url(#waterGrad2)"
        />

        {/* Splashing water tendrils */}
        <path
          d="M60,270 Q110,210 150,150 Q170,120 195,70 Q202,56 206,45 Q208,40 212,48 Q208,70 180,130 Q150,190 90,255 Z"
          fill="url(#waterGrad1)"
        />

        {/* Splashing droplet crowns and individual bubbles */}
        <circle cx="230" cy="18" r="4.5" fill="#38bdf8" opacity="0.85" />
        <circle cx="248" cy="32" r="3" fill="#0284c7" opacity="0.75" />
        <circle cx="218" cy="42" r="5" fill="#7dd3fc" opacity="0.8" />
        <circle cx="260" cy="65" r="3.5" fill="#38bdf8" opacity="0.7" />
        <circle cx="205" cy="95" r="4" fill="#0ea5e9" opacity="0.75" />
        <circle cx="240" cy="115" r="5.5" fill="#bae6fd" opacity="0.85" />
        <circle cx="175" cy="140" r="3" fill="#38bdf8" opacity="0.7" />
        <circle cx="160" cy="165" r="4.5" fill="#0284c7" opacity="0.65" />
        <circle cx="130" cy="200" r="3.5" fill="#7dd3fc" opacity="0.8" />
        <circle cx="105" cy="235" r="5" fill="#38bdf8" opacity="0.7" />

        {/* Fine spray dots */}
        <circle cx="268" cy="45" r="1.5" fill="#0ea5e9" opacity="0.6" />
        <circle cx="252" cy="15" r="2" fill="#7dd3fc" opacity="0.7" />
        <circle cx="236" cy="5" r="2.5" fill="#bae6fd" opacity="0.9" />
        <circle cx="220" cy="12" r="1.8" fill="#38bdf8" opacity="0.8" />
        <circle cx="280" cy="80" r="2.2" fill="#0284c7" opacity="0.6" />
        <circle cx="295" cy="100" r="1.8" fill="#38bdf8" opacity="0.55" />
        <circle cx="270" cy="125" r="2" fill="#7dd3fc" opacity="0.6" />
        <circle cx="225" cy="160" r="2.5" fill="#0ea5e9" opacity="0.6" />
        <circle cx="190" cy="205" r="2" fill="#38bdf8" opacity="0.5" />
        <circle cx="150" cy="245" r="2.2" fill="#0284c7" opacity="0.6" />
      </svg>
    </div>
  );
}
