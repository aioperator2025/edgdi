import React, { useState } from 'react';
import { CreditCard, MapPin, FileText, Clock, ArrowRight, Users, Shield, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';

const translations = {
  fr: {
    title: 'Nos Services Disponibles',
    desc: 'Accédez à tous vos documents officiels depuis une plateforme unique, sécurisée et disponible 24h/24.',
    cards: [
      {
        icon: MapPin,
        title: 'Passeport Biométrique',
        short: 'Voyagez partout dans le monde avec notre passeport biométrique.',
        details: 'Procédure simplifiée, suivi en ligne, retrait rapide. Documents requis : CNIE, acte de naissance, justificatif de domicile.'
      },
      {
        icon: CreditCard,
        title: 'Carte Nationale d’Identité Électronique',
        short: 'Demandez ou renouvelez votre CNIE en ligne.',
        details: 'Première demande, renouvellement, duplicata. Délai : 5-7 jours ouvrés. Documents requis : acte de naissance, justificatif de domicile.'
      },
      {
        icon: Users,
        title: 'Carte de Séjour',
        short: 'Obtenez ou renouvelez votre carte de séjour facilement.',
        details: 'Pour les résidents étrangers. Démarches simplifiées, notifications par email. Documents requis : passeport, justificatif d’emploi, photos.'
      }
    ],
    action: {
      request: 'Demande',
      renewal: 'Renouvellement',
      track: 'Suivi'
    }
  },
  en: {
    title: 'Our Available Services',
    desc: 'Access all your official documents from a single, secure platform available 24/7.',
    cards: [
      {
        icon: MapPin,
        title: 'Biometric Passport',
        short: 'Travel worldwide with our biometric passport.',
        details: 'Simplified process, online tracking, fast pickup. Required: National ID, birth certificate, proof of address.'
      },
      {
        icon: CreditCard,
        title: 'National Electronic ID Card',
        short: 'Apply or renew your National ID online.',
        details: 'First request, renewal, duplicate. Time: 5-7 business days. Required: birth certificate, proof of address.'
      },
      {
        icon: Users,
        title: 'Residence Permit',
        short: 'Get or renew your residence permit easily.',
        details: 'For foreign residents. Simplified steps, email notifications. Required: passport, proof of employment, photos.'
      }
    ],
    action: {
      request: 'Request',
      renewal: 'Renewal',
      track: 'Track'
    }
  },
  es: {
    title: 'Nuestros Servicios Disponibles',
    desc: 'Acceda a todos sus documentos oficiales desde una plataforma única, segura y disponible 24/7.',
    cards: [
      {
        icon: MapPin,
        title: 'Pasaporte Biométrico',
        short: 'Viaje por todo el mundo con nuestro pasaporte biométrico.',
        details: 'Procedimiento simplificado, seguimiento en línea, retiro rápido. Requiere: DNI, acta de nacimiento, comprobante de domicilio.'
      },
      {
        icon: CreditCard,
        title: 'Cédula Nacional Electrónica',
        short: 'Solicite o renueve su DNI en línea.',
        details: 'Primera solicitud, renovación, duplicado. Plazo: 5-7 días hábiles. Requiere: acta de nacimiento, comprobante de domicilio.'
      },
      {
        icon: Users,
        title: 'Tarjeta de Residencia',
        short: 'Obtenga o renueve su tarjeta de residencia fácilmente.',
        details: 'Para residentes extranjeros. Trámites simplificados, notificaciones por email. Requiere: pasaporte, comprobante de empleo, fotos.'
      }
    ],
    action: {
      request: 'Solicitud',
      renewal: 'Renovación',
      track: 'Seguimiento'
    }
  },
  ar: {
    title: 'خدماتنا المتاحة',
    desc: 'احصل على جميع مستنداتك الرسمية من منصة واحدة آمنة ومتاحة 24/7.',
    cards: [
      {
        icon: MapPin,
        title: 'جواز السفر البيومتري',
        short: 'سافر حول العالم بجواز السفر البيومتري الخاص بنا.',
        details: 'إجراءات مبسطة، تتبع عبر الإنترنت، استلام سريع. الوثائق المطلوبة: بطاقة الهوية، شهادة الميلاد، إثبات السكن.'
      },
      {
        icon: CreditCard,
        title: 'بطاقة الهوية الوطنية الإلكترونية',
        short: 'قدّم أو جدّد بطاقة هويتك الوطنية عبر الإنترنت.',
        details: 'طلب أول، تجديد، بدل فاقد. المدة: 5-7 أيام عمل. الوثائق المطلوبة: شهادة الميلاد، إثبات السكن.'
      },
      {
        icon: Users,
        title: 'بطاقة الإقامة',
        short: 'احصل أو جدّد بطاقة الإقامة بسهولة.',
        details: 'للمقيمين الأجانب. إجراءات مبسطة، إشعارات بالبريد الإلكتروني. الوثائق المطلوبة: جواز السفر، إثبات العمل، صور.'
      }
    ],
    action: {
      request: 'طلب',
      renewal: 'تجديد',
      track: 'تتبع'
    }
  }
};

const ServicesSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-8 lg:py-10 bg-slate-50">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.desc}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.cards.map((card, idx) => {
            const Icon = card.icon;
            // Desktop: toutes les cartes sont ouvertes/agrandies, Mobile: une seule
            const isOpen = isMobile ? openIndex === idx : true;
            return (
              <div
                key={card.title}
                className={`group bg-white rounded-2xl p-6 shadow-lg border border-slate-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative cursor-pointer ${isOpen ? 'ring-2 ring-emerald-400 scale-105 z-10' : ''}`}
                onClick={e => {
                  if (isMobile) {
                    e.stopPropagation();
                    setOpenIndex(openIndex === idx ? null : idx);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                aria-label={card.title}
                onKeyDown={e => {
                  if (isMobile && (e.key === 'Enter' || e.key === ' ')) {
                    setOpenIndex(openIndex === idx ? null : idx);
                  }
                }}
                style={{ zIndex: isOpen ? 10 : 1 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{card.title}</h3>
                    <p className="text-slate-500 text-sm">{card.short}</p>
                  </div>
                  <span className="ml-2">
                    {/* Desktop: ChevronUp toujours, Mobile: dépend de l'état */}
                    {isMobile ? (
                      isOpen ? <ChevronUp className="w-5 h-5 text-emerald-500" /> : <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronUp className="w-5 h-5 text-emerald-500" />
                    )}
                  </span>
                </div>
                {/* Desktop: détails toujours visibles, Mobile: seulement si ouvert */}
                {(isOpen || !isMobile) && (
                  <div className="mt-4 p-4 bg-emerald-50 rounded-xl text-slate-700 text-sm animate-fade-in">
                    {card.details}
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400">
                        {t.action.request}
                      </button>
                      <button className="flex-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold py-2 px-4 rounded-lg border border-emerald-200 shadow transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400">
                        {t.action.renewal}
                      </button>
                      <button className="flex-1 bg-white hover:bg-emerald-50 text-emerald-600 font-semibold py-2 px-4 rounded-lg border border-emerald-100 shadow transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400">
                        {t.action.track}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
