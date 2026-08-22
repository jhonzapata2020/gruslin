import React from 'react';

interface UnadLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const UnadLogo: React.FC<UnadLogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const dimensions = {
    sm: { height: 32, badge: 'h-8 px-2.5', text: 'text-xs' },
    md: { height: 44, badge: 'h-11 px-3.5', text: 'text-base' },
    lg: { height: 56, badge: 'h-14 px-4.5', text: 'text-xl' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official UNAD Emblem Icon / SVG */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#003366] via-[#00264D] to-[#001935] border border-[#F0B429]/70 shadow-md ${dimensions.badge} shrink-0 group-hover:border-[#F0B429] transition-all`}>
        <svg
          viewBox="0 0 120 40"
          className="h-full w-auto py-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* UNAD Sun Arc Accent */}
          <path
            d="M 12 10 Q 60 0 108 10"
            stroke="#F0B429"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="60" cy="5" r="2.5" fill="#38BDF8" />

          {/* UNAD Text */}
          {/* U */}
          <text x="16" y="32" fill="#F0B429" fontSize="24" fontWeight="900" fontFamily="Outfit, sans-serif">U</text>
          {/* N */}
          <text x="38" y="32" fill="#38BDF8" fontSize="24" fontWeight="900" fontFamily="Outfit, sans-serif">N</text>
          {/* A */}
          <text x="64" y="32" fill="#F0B429" fontSize="24" fontWeight="900" fontFamily="Outfit, sans-serif">A</text>
          {/* D */}
          <text x="88" y="32" fill="#F0B429" fontSize="24" fontWeight="900" fontFamily="Outfit, sans-serif">D</text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`font-extrabold text-white font-outfit leading-tight ${dimensions.text}`}>
            Universidad Nacional Abierta y a Distancia
          </span>
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">
            UNAD &bull; CEAD Neiva
          </span>
        </div>
      )}
    </div>
  );
};
