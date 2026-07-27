import React from 'react';
import { INSTAGRAM_POSTS } from '../data/testimonialData';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#EFE8DF] pb-6">
        <div className="flex items-center space-x-3 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D9A066] via-[#C96C4A] to-[#4E342E] p-0.5 shadow-sm">
            <div className="w-full h-full bg-[#F8F4EE] rounded-full flex items-center justify-center text-[#C96C4A]">
              <Instagram className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-medium text-[#4E342E]">
              @sunndowncoffee.launion
            </h3>
            <p className="text-xs text-[#2B2B2B]/60 font-medium">
              Tag us in your slow morning coffee moments #SunndownElyu
            </p>
          </div>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full bg-[#EFE8DF] text-[#4E342E] hover:bg-[#C96C4A] hover:text-white transition-all shadow-xs"
        >
          Follow on Instagram <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid of posts */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {INSTAGRAM_POSTS.map((post) => (
          <a
            key={post.id}
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-2xl overflow-hidden aspect-square bg-[#EFE8DF] shadow-sm"
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#4E342E]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
              <p className="text-xs font-light line-clamp-3 text-[#EFE8DF]">
                {post.caption}
              </p>
              <div className="flex items-center justify-between text-xs font-semibold text-[#D9A066]">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-[#D9A066]" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" /> {post.comments}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
