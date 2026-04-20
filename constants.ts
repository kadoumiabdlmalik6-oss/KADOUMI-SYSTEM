import { Send, MessageCircle, Radio, BookOpen, TrendingUp, ShieldCheck, Users, BarChart2 } from 'lucide-react';
import { SocialLink, LinkType, FeatureItem } from './types';

// Update these URLs with your actual links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: '1',
    title: 'TELEGRAM',
    subtitle: 'إشارات يومية وتحليل للسوق',
    url: 'https://t.me/kadoumi_system_fx',
    icon: Send,
    type: LinkType.TELEGRAM,
    isPrimary: true,
  },
  {
    id: '2',
    title: 'WHATSAPP',
    subtitle: 'للاستفسارات والاشتراكات الخاصة',
    url: 'https://wa.me/212722146260',
    icon: MessageCircle,
    type: LinkType.WHATSAPP,
  },
  {
    id: '3',
    title: 'KDM SIGNAL',
    subtitle: 'مجتمع خاص للمتداولين المحترفين',
    url: 'https://www.appcreator24.com/app4005308-l1ev4w',
    icon: Radio,
    type: LinkType.SIGNAL,
  },
  {
    id: '4',
    title: 'KDM JOURNAL',
    subtitle: 'سجل صفقاتك وحلل أداءك',
    url: 'https://www.appcreator24.com/app3802649-fs1bor',
    icon: BookOpen,
    type: LinkType.JOURNAL,
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: 'إشارات عالية الدقة',
    description: 'نقاط دخول وخروج مدروسة بعناية لتعظيم الأرباح.',
    icon: TrendingUp,
  },
  {
    id: 'f2',
    title: 'إدارة مخاطر صارمة',
    description: 'خطط واضحة لحماية رأس المال وتقليل الخسائر.',
    icon: ShieldCheck,
  },
  {
    id: 'f3',
    title: 'مجتمع تفاعلي',
    description: 'ناقش الفرص مع نخبة من المتداولين في الوقت الفعلي.',
    icon: Users,
  },
  {
    id: 'f4',
    title: 'تحليل فني وأساسي',
    description: 'فهم عميق لحركة السوق وليس مجرد أرقام.',
    icon: BarChart2,
  },
];

export const PROFILE_INFO = {
  name: 'KDM SYSTEM',
  title: 'محلل مالي ومتداول محترف',
  bio: 'خبرة أكثر من ٥ سنوات في أسواق العملات والذهب. أساعدك على فهم السوق وبناء دخل مستدام من التداول بعيداً عن المقامرة والعشوائية.',
  ctaText: 'ابدأ رحلة الربح اليوم',
};