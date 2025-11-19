import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionCardProps {
  title: string;
  children: ReactNode;
  delay?: number;
  className?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, children, delay = 0, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={`bg-dark-900 border border-white/5 rounded-3xl p-6 md:p-8 mb-6 ${className}`}
    >
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-r-4 border-brand-500 pr-3">
        {title}
      </h2>
      {children}
    </motion.div>
  );
};

export default SectionCard;