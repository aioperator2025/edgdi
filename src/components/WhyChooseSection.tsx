import React from 'react';
import { ShieldCheck, Users, Globe2, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const translations = {
  fr: {
    title: 'Pourquoi choisir la CNIE et la plateforme E-DGDI ?',
    items: [
      {
        icon: ShieldCheck,
        title: 'Sécurité & Confiance',
        desc: 'Vos données sont protégées par des technologies de pointe et la CNIE est infalsifiable.'
      },
      {
        icon: Users,
        title: 'Accessibilité pour tous',
        desc: 'Démarches 100% en ligne, assistance multilingue, centres physiques partout au Gabon.'
      },
      {
        icon: Globe2,
        title: 'Mobilité & Modernité',
        desc: 'Voyagez librement dans la CEMAC, accédez à de nombreux services publics et privés.'
      },
      {
        icon: Star,
        title: 'Simplicité & Rapidité',
        desc: 'Procédures simplifiées, suivi en temps réel, délais réduits et notifications par email.'
      }
    ]
  },
  en: {
    title: 'Why choose the CNIE and E-DGDI platform?',
    items: [
      {
        icon: ShieldCheck,
        title: 'Security & Trust',
        desc: 'Your data is protected by advanced technology and the e-ID is tamper-proof.'
      },
      {
        icon: Users,
        title: 'Accessibility for All',
        desc: '100% online procedures, multilingual support, physical centers across Gabon.'
      },
      {
        icon: Globe2,
        title: 'Mobility & Modernity',
        desc: 'Travel freely in CEMAC, access many public and private services.'
      },
      {
        icon: Star,
        title: 'Simplicity & Speed',
        desc: 'Simplified procedures, real-time tracking, reduced delays and email notifications.'
      }
    ]
  },
  es: {
    title: '¿Por qué elegir la CNIE y la plataforma E-DGDI?',
    items: [
      {
        icon: ShieldCheck,
        title: 'Seguridad y Confianza',
        desc: 'Sus datos están protegidos con tecnología avanzada y la CNIE es infalsificable.'
      },
      {
        icon: Users,
        title: 'Accesibilidad para todos',
        desc: 'Trámites 100% en línea, asistencia multilingüe, centros físicos en todo Gabón.'
      },
      {
        icon: Globe2,
        title: 'Movilidad y Modernidad',
        desc: 'Viaje libremente en la CEMAC, acceda a numerosos servicios públicos y privados.'
      },
      {
        icon: Star,
        title: 'Simplicidad y Rapidez',
        desc: 'Procedimientos simplificados, seguimiento en tiempo real, plazos reducidos y notificaciones por correo.'
      }
    ]
  },
  ar: {
    title: 'لماذا تختار بطاقة CNIE ومنصة E-DGDI؟',
    items: [
      {
        icon: ShieldCheck,
        title: 'الأمان والثقة',
        desc: 'بياناتك محمية بتقنيات متقدمة وبطاقة CNIE غير قابلة للتزوير.'
      },
      {
        icon: Users,
        title: 'إتاحة للجميع',
        desc: 'إجراءات 100% عبر الإنترنت، دعم متعدد اللغات، مراكز فعلية في جميع أنحاء الغابون.'
      },
      {
        icon: Globe2,
        title: 'تنقل وحداثة',
        desc: 'سافر بحرية في منطقة CEMAC، وادخل العديد من الخدمات العامة والخاصة.'
      },
      {
        icon: Star,
        title: 'بساطة وسرعة',
        desc: 'إجراءات مبسطة، تتبع فوري، تقليل المهل وإشعارات عبر البريد الإلكتروني.'
      }
    ]
  }
};

const WhyChooseSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl lg:text-5xl font-bold text-emerald-700 mb-10 text-center">{t.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-emerald-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 mb-4">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
