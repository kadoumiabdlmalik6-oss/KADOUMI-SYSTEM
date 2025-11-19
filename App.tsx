import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, FEATURES, PROFILE_INFO } from './constants';
import LinkButton from './components/LinkButton';
import SectionCard from './components/SectionCard';
import { User } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-800 via-dark-950 to-dark-950 text-gray-100 relative overflow-x-hidden">
      
      {/* Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-brand-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto px-4 py-10 md:py-16 md:max-w-2xl lg:max-w-3xl">
        
        {/* Header / Profile Section */}
        <header className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 mx-auto mb-6"
          >
            {/* Avatar Image / Logo */}
            <div className="w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-brand-400 to-brand-600 shadow-2xl shadow-brand-500/20">
              <img 
                // Replace this URL with your actual logo URL
                src="https://placehold.co/400x400/020617/3b82f6?text=KDM" 
                alt="KDM System Logo" 
                className="w-full h-full rounded-[1.3rem] object-cover border-4 border-dark-950"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
              {PROFILE_INFO.name}
            </h1>
            <p className="text-brand-400 font-medium text-lg mb-4">{PROFILE_INFO.title}</p>
            <p className="text-gray-400 text-sm md:text-base max-w-sm mx-auto leading-relaxed">
              {PROFILE_INFO.bio}
            </p>
          </motion.div>
        </header>

        {/* Primary Links Section */}
        <section className="mb-12">
          <div className="flex flex-col gap-2">
            {SOCIAL_LINKS.map((link, index) => (
              <LinkButton key={link.id} link={link} index={index} />
            ))}
          </div>
        </section>

        {/* Features Section - What you get */}
        <SectionCard title="ماذا ستحصل عند الانضمام؟" delay={0.4}>
          <div className="grid gap-4 sm:grid-cols-2">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-start p-4 bg-dark-800/50 rounded-xl border border-white/5 hover:bg-dark-800 hover:border-brand-500/30 transition-colors"
              >
                <feature.icon className="text-brand-400 shrink-0 ml-3 mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionCard>

        {/* About Me Section */}
        <SectionCard title="عن المحلل" delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
             <div className="bg-dark-800 p-4 rounded-2xl border border-white/5 shrink-0">
                <User size={40} className="text-brand-500" />
             </div>
             <div className="text-right">
               <p className="text-gray-300 text-sm leading-7 mb-4">
                 بدأت رحلتي في التداول منذ عدة سنوات، ومررت بكل مراحل السوق من صعود وهبوط. هدفي الآن هو نقل هذه الخبرة إليك عبر استراتيجيات مجربة، بعيداً عن المخاطرة غير المحسوبة، لبناء محفظة استثمارية قوية.
               </p>
               <div className="flex flex-wrap gap-3">
                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                   +5 سنوات خبرة
                 </span>
                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                   تحليل فني
                 </span>
                 <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                   إدارة محافظ
                 </span>
               </div>
             </div>
          </div>
        </SectionCard>

        {/* Desktop/Inline CTA */}
        <div className="mt-12 text-center hidden md:block">
           <p className="text-gray-400 text-sm mb-4">لا تفوت الفرصة، الأماكن في المجموعة الخاصة محدودة</p>
           <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
              <a 
                href={SOCIAL_LINKS[0].url}
                className="inline-flex items-center px-8 py-4 bg-white text-dark-950 font-bold text-lg rounded-full hover:bg-brand-400 transition-colors shadow-lg shadow-white/10"
              >
                <span>{PROFILE_INFO.ctaText}</span>
              </a>
           </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center border-t border-white/5 pt-8 pb-8">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {PROFILE_INFO.name}. جميع الحقوق محفوظة.
          </p>
          <p className="text-[10px] text-gray-600 mt-2 max-w-xs mx-auto">
            تحذير المخاطرة: التداول في الأسواق المالية ينطوي على مخاطر عالية. المعلومات المقدمة هي لأغراض تعليمية فقط.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default App;