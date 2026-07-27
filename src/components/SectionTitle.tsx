import React from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignClasses[align]}`}>
      {eyebrow && (
        <span className={`text-[10px] font-semibold tracking-[0.3em] uppercase mb-3 px-3.5 py-1.5 rounded-full w-fit ${
          light 
            ? 'bg-white/10 text-[#D9A066]' 
            : 'bg-[#EFE8DF] text-[#C96C4A]'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight ${
        light ? 'text-[#F8F4EE]' : 'text-[#4E342E]'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed font-light max-w-2xl ${
          light ? 'text-[#EFE8DF]/80' : 'text-[#2B2B2B]/80'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`h-0.5 w-12 mt-6 rounded-full ${light ? 'bg-[#D9A066]' : 'bg-[#C96C4A]'}`} />
    </div>
  );
};
