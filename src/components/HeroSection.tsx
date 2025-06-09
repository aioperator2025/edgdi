import { ArrowRight, Clock } from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const LANGUAGES = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' }
];

const translations = {
  fr: {
    digital: '100% Digital • Disponible 24h/7j',
    title: 'Vos Documents Officiels en Quelques Clics',
    desc: "Demandez votre Carte Nationale d'Identité Électronique ou votre passeport en ligne. Rapide, sécurisé et disponible où que vous soyez.",
    start: 'Commencer ma Demande',
    track: 'Suivre ma Demande',
  },
  en: {
    digital: '100% Digital • Available 24/7',
    title: 'Your Official Documents in a Few Clicks',
    desc: 'Apply for your National ID Card or passport online. Fast, secure and available wherever you are.',
    start: 'Start My Application',
    track: 'Track My Application',
  },
  es: {
    digital: '100% Digital • Disponible 24h/7d',
    title: 'Sus Documentos Oficiales en Pocos Clics',
    desc: 'Solicite su Cédula Nacional o pasaporte en línea. Rápido, seguro y disponible donde sea.',
    start: 'Iniciar mi Solicitud',
    track: 'Rastrear mi Solicitud',
  },
  ar: {
    digital: 'رقمي 100% • متاح 24/7',
    title: 'وثائقك الرسمية في بضع نقرات',
    desc: 'قدّم طلب بطاقة الهوية الوطنية أو جواز السفر عبر الإنترنت. سريع وآمن ومتاح أينما كنت.',
    start: 'ابدأ طلبي',
    track: 'تتبع طلبي',
  },
};

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/uploads/bg.jpg" 
          alt="Arrière-plan Gabon" 
          className="w-full h-full object-cover opacity-20" 
          style={{ filter: 'blur(2px)' }}
        />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q25,25 50,50 T100,50 V100 H0 Z" fill="currentColor" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>
      </div>

      <div className="relative container mx-auto px-3 sm:px-4 lg:px-6 py-8 lg:py-6">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <img src="/uploads/ico.png" alt="DGDI Gabon" className="w-5 h-5" />
              <span>{t.digital}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              {t.title}
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-emerald-100 mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-xl">
              {t.desc}
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none justify-center lg:justify-start mb-6">
              <button className="group bg-yellow-400 hover:bg-yellow-300 text-emerald-900 px-5 py-3 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto">
                <span>{t.start}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 px-5 py-3 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                <Clock className="w-4 h-4" />
                <span>{t.track}</span>
              </button>
            </div>
          </div>
          {/* Visual Element */}
          <div className="relative items-center justify-center mb-6 lg:mb-0 hidden sm:flex">
            <img 
              src="/uploads/Passport.png" 
              alt="Passeport Gabonais" 
              className="max-w-[80vw] sm:max-w-[350px] lg:max-w-[120%] h-auto drop-shadow-xl rounded-2xl lg:rounded-none" 
              style={{ transform: 'rotate(-8deg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
