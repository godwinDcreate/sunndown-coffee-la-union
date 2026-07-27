import React from 'react';
import { images } from '../assets/images';

interface LogoProps {
  variant?: 'dark' | 'light' | 'badge' | 'image';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-3 bg-[#6E2E1B] text-[#F8F4EE] p-3 rounded-2xl shadow-md border border-[#C96C4A]/30 ${className}`}>
        <img
          src={images.logo}
          alt="sunndown COFFEE & DESSERT"
          className="w-10 h-10 rounded-xl object-cover"
        />
        <div className="flex flex-col items-start leading-none">
          <span className="font-serif text-xl font-normal lowercase tracking-tight text-[#F8F4EE]">
            sunndown
          </span>
          {showTagline && (
            <span className="text-[8px] uppercase tracking-[0.28em] font-medium text-[#D9A066] mt-0.5">
              Coffee & Dessert
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'image') {
    return (
      <div className={`overflow-hidden rounded-2xl shadow-md bg-[#6E2E1B] ${className}`}>
        <img
          src={images.logo}
          alt="sunndown COFFEE & DESSERT"
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  const textColor = variant === 'light' ? 'text-[#F8F4EE]' : 'text-[#4E342E]';
  const taglineColor = variant === 'light' ? 'text-[#D9A066]' : 'text-[#C96C4A]';

  const sizeClasses = {
    sm: {
      main: 'text-xl sm:text-2xl',
      sub: 'text-[8px] sm:text-[9px]',
    },
    md: {
      main: 'text-2xl sm:text-3xl',
      sub: 'text-[9px] sm:text-[10px]',
    },
    lg: {
      main: 'text-3xl sm:text-4xl',
      sub: 'text-[10px] sm:text-[11px]',
    },
  }[size];

  return (
    <div className={`flex flex-col items-start leading-none group cursor-pointer ${className}`}>
      <span className={`font-serif ${sizeClasses.main} font-normal lowercase tracking-tight ${textColor} group-hover:text-[#C96C4A] transition-colors`}>
        sunndown
      </span>
      {showTagline && (
        <span className={`font-sans ${sizeClasses.sub} tracking-[0.3em] font-semibold uppercase ${taglineColor} mt-1`}>
          Coffee & Dessert
        </span>
      )}
    </div>
  );
};
