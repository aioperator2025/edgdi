import React from 'react';
import { ShieldCheck, Handshake, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const translations = {
  fr: {
    title: 'Nos engagements',
    items: [
      {
        icon: ShieldCheck,
        title: 'Sécurité et confidentialité',
        desc: 'Nous garantissons la protection de vos données personnelles et la sécurité de toutes vos démarches.'
      },
      {
        icon: Handshake,
        title: 'Service public de confiance',
        desc: 'Un accompagnement humain, une écoute active et un service accessible à tous, sans discrimination.'
      },
      {
        icon: Clock,
        title: 'Réactivité et efficacité',
        desc: 'Traitement rapide de vos demandes, suivi transparent et délais réduits.'
      },
      {
        icon: Users,
        title: 'Accessibilité et inclusion',
        desc: 'Plateforme multilingue, assistance dédiée et centres physiques sur tout le territoire.'
      }
    ]
  },
  en: {
    title: 'Our Commitments',
    items: [
      {
        icon: ShieldCheck,
        title: 'Security & Privacy',
        desc: 'We guarantee the protection of your personal data and the security of all your procedures.'
      },
      {
        icon: Handshake,
        title: 'Trusted Public Service',
        desc: 'Human support, active listening and a service accessible to all, without discrimination.'
      },
      {
        icon: Clock,
        title: 'Responsiveness & Efficiency',
        desc: 'Fast processing of your requests, transparent tracking and reduced delays.'
      },
      {
        icon: Users,
        title: 'Accessibility & Inclusion',
        desc: 'Multilingual platform, dedicated support and physical centers throughout the country.'
      }
    ]
  },
  es: {
    title: 'Nuestros compromisos',
    items: [
      {
        icon: ShieldCheck,
        title: 'Seguridad y confidencialidad',
        desc: 'Garantizamos la protección de sus datos personales y la seguridad de todos sus trámites.'
      },
      {
        icon: Handshake,
        title: 'Servicio público de confianza',
        desc: 'Acompañamiento humano, escucha activa y un servicio accesible para todos, sin discriminación.'
      },
      {
        icon: Clock,
        title: 'Rapidez y eficiencia',
        desc: 'Tramitación rápida de sus solicitudes, seguimiento transparente y plazos reducidos.'
      },
      {
        icon: Users,
        title: 'Accesibilidad e inclusión',
        desc: 'Plataforma multilingüe, asistencia dedicada y centros físicos en todo el país.'
      }
    ]
  },
  ar: {
    title: 'التزاماتنا',
    items: [
      {
        icon: ShieldCheck,
        title: 'الأمان والسرية',
        desc: 'نضمن حماية بياناتك الشخصية وأمان جميع معاملاتك.'
      },
      {
        icon: Handshake,
        title: 'خدمة عامة موثوقة',
        desc: 'دعم بشري، استماع نشط وخدمة متاحة للجميع دون تمييز.'
      },
      {
        icon: Clock,
        title: 'السرعة والكفاءة',
        desc: 'معالجة سريعة لطلباتك، تتبع شفاف وتقليل المهل.'
      },
      {
        icon: Users,
        title: 'إتاحة وشمولية',
        desc: 'منصة متعددة اللغات، دعم مخصص ومراكز فعلية في جميع أنحاء البلاد.'
      }
    ]
  }
};

const CommitmentsSection = () => {
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

export default CommitmentsSection;
