import React from 'react';
import { SocialLink, LinkType } from '../types';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  link: SocialLink;
  index: number;
}

const getBrandColor = (type: LinkType, isPrimary?: boolean) => {
  if (isPrimary) return 'bg-brand-500 hover:bg-brand-400 text-white border-transparent shadow-[0_0_20px_rgba(59,130,246,0.4)]';
  
  switch (type) {
    case LinkType.TELEGRAM:
      return 'bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#229ED9] border-[#229ED9]/30';
    case LinkType.WHATSAPP:
      return 'bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border-[#25D366]/30';
    case LinkType.SIGNAL:
      return 'bg-[#3A76F0]/10 hover:bg-[#3A76F0]/20 text-[#3A76F0] border-[#3A76F0]/30';
    case LinkType.JOURNAL:
      return 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border-neutral-700';
    default:
      return 'bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700';
  }
};

const LinkButton: React.FC<LinkButtonProps> = ({ link, index }) => {
  const Icon = link.icon;
  
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`
        group relative flex items-center w-full p-4 mb-4 rounded-2xl border transition-all duration-300 ease-out
        ${getBrandColor(link.type, link.isPrimary)}
        ${link.isPrimary ? 'scale-100 hover:scale-[1.02]' : 'hover:border-opacity-60'}
        cursor-pointer
      `}
    >
      <div className={`
        p-3 rounded-xl mr-4 ml-4
        ${link.isPrimary ? 'bg-white/20' : 'bg-dark-950/30'}
      `}>
        <Icon size={24} strokeWidth={2} />
      </div>
      
      <div className="flex-1 text-right">
        <h3 className={`font-bold text-lg ${link.isPrimary ? 'text-white' : ''}`}>
          {link.title}
        </h3>
        {link.subtitle && (
          <p className={`text-xs mt-1 ${link.isPrimary ? 'text-brand-100' : 'text-gray-400 group-hover:text-gray-300'}`}>
            {link.subtitle}
          </p>
        )}
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-4 text-current">
        <ExternalLink size={16} />
      </div>
    </motion.a>
  );
};

export default LinkButton;