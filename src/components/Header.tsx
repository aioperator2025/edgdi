import React, { useState } from 'react';
import { useLanguage, LANGUAGES } from '@/hooks/useLanguage';
import { Menu, X, Globe, Facebook, Linkedin } from 'lucide-react';

const translations = {
  fr: {
    digital: '100% Digital • Disponible 24h/7j',
    title: 'Vos Documents Officiels en Quelques Clics',
    desc: "Demandez votre Carte Nationale d'Identité Électronique ou votre passeport en ligne. Rapide, sécurisé et disponible où que vous soyez.",
    start: 'Commencer ma Demande',
    track: 'Suivre ma Demande',
    services: 'Nos Services',
    help: 'Aide',
    contact: 'Contact',
    brand: 'Direction Générale de la Documentation et de l\'Immigration',
  },
  en: {
    digital: '100% Digital • Available 24/7',
    title: 'Your Official Documents in a Few Clicks',
    desc: 'Apply for your National ID Card or passport online. Fast, secure and available wherever you are.',
    start: 'Start My Application',
    track: 'Track My Application',
    services: 'Our Services',
    help: 'Help',
    contact: 'Contact',
    brand: 'General Directorate of Documentation and Immigration',
  },
  es: {
    digital: '100% Digital • Disponible 24h/7d',
    title: 'Sus Documentos Oficiales en Pocos Clics',
    desc: 'Solicite su Cédula Nacional o pasaporte en línea. Rápido, seguro y disponible donde sea.',
    start: 'Iniciar mi Solicitud',
    track: 'Rastrear mi Solicitud',
    services: 'Nuestros Servicios',
    help: 'Ayuda',
    contact: 'Contacto',
    brand: 'Dirección General de Documentación e Inmigración',
  },
  ar: {
    digital: 'رقمي 100% • متاح 24/7',
    title: 'وثائقك الرسمية في بضع نقرات',
    desc: 'قدّم طلب بطاقة الهوية الوطنية أو جواز السفر عبر الإنترنت. سريع وآمن ومتاح أينما كنت.',
    start: 'ابدأ طلبي',
    track: 'تتبع طلبي',
    services: 'خدماتنا',
    help: 'مساعدة',
    contact: 'اتصال',
    brand: 'المديرية العامة للتوثيق والهجرة',
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center gap-2 focus:outline-none" tabIndex={0} aria-label="Accueil DGDI Gabon">
              <img 
                src="/uploads/Logo.png" 
                alt="DGDI Gabon" 
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-lg"
              />
            </a>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-slate-800">E-DGDI</h1>
              <p className="text-xs lg:text-sm text-slate-600">{t.brand}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              {t.services}
            </a>
            <a href="#track" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              {t.track}
            </a>
            <a href="#help" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              {t.help}
            </a>
            <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              {t.contact}
            </a>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Sélecteur de langue */}
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 text-sm text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                aria-label="Changer la langue"
                onClick={() => setShowLangMenu((v) => !v)}
                type="button"
              >
                {/* Affichage du code langue en mobile, label complet en desktop */}
                <span className="sm:hidden font-bold uppercase">{lang}</span>
                <Globe className="w-5 h-5 mx-1 hidden sm:inline" />
                <span className="hidden sm:inline">{LANGUAGES.find(l => l.code === lang)?.label}</span>
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-50">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setShowLangMenu(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-emerald-100 ${lang === l.code ? 'font-bold text-emerald-700' : 'text-slate-700'}`}
                    >
                      <span className="font-bold uppercase sm:hidden">{l.code}</span>
                      <span className="hidden sm:inline">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-800 transition-colors"
              aria-label="Menu de navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 space-y-2">
            <a href="#services" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
              {t.services}
            </a>
            <a href="#track" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
              {t.track}
            </a>
            <a href="#help" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
              {t.help}
            </a>
            <a href="#contact" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
              {t.contact}
            </a>
            {/* Suppression des réseaux sociaux dans le menu mobile */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
