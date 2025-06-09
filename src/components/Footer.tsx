import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { MapPin, Phone, Mail, Clock, User, Facebook, Linkedin, Instagram } from 'lucide-react';

const translations = {
  fr: {
    brand: 'Direction Générale de la Documentation et de l\'Immigration',
    desc: 'Votre partenaire pour tous vos documents officiels.',
    address: 'BP 1019, Libreville, République Gabonaise',
    phone: '+241 011 76 24 24',
    email: 'contact@dgdi.ga',
    hours: 'Lun - Ven: 07h30 - 16h00',
    online: 'Service en ligne: 24h/7j',
    copyright: '© 2025 DGDI - République Gabonaise. Tous droits réservés.',
    dev: 'Développé par',
    devName: 'Ogoula Jesse. (Mostclient)',
    devRole: 'Product and Growth manager',
    devContact: 'adirignoogoula@gmail.com',
    devPhone: '+241 066 19 57 86'
  },
  en: {
    brand: 'General Directorate of Documentation and Immigration',
    desc: 'Your partner for all your official documents.',
    address: 'BP 1019, Libreville, Gabonese Republic',
    phone: '+241 011 76 24 24',
    email: 'contact@dgdi.ga',
    hours: 'Mon - Fri: 07:30am - 4:00pm',
    online: 'Online service: 24/7',
    copyright: '© 2025 DGDI - Gabonese Republic. All rights reserved.',
    dev: 'Developed by',
    devName: 'Ogoula Jesse. (Mostclient)',
    devRole: 'Product and Growth manager',
    devContact: 'adirignoogoula@gmail.com',
    devPhone: '+241 066 19 57 86'
  },
  es: {
    brand: 'Dirección General de Documentación e Inmigración',
    desc: 'Su socio para todos sus documentos oficiales.',
    address: 'BP 1019, Libreville, República Gabonesa',
    phone: '+241 011 76 24 24',
    email: 'contact@dgdi.ga',
    hours: 'Lun - Vie: 07:30 - 16:00',
    online: 'Servicio en línea: 24/7',
    copyright: '© 2025 DGDI - República Gabonesa. Todos los derechos reservados.',
    dev: 'Desarrollado por',
    devName: 'Ogoula Jesse. (Mostclient)',
    devRole: 'Product and Growth manager',
    devContact: 'adirignoogoula@gmail.com',
    devPhone: '+241 066 19 57 86'
  },
  ar: {
    brand: 'المديرية العامة للتوثيق والهجرة',
    desc: 'شريكك لجميع مستنداتك الرسمية.',
    address: 'ص.ب 1019، ليبرفيل، جمهورية الغابون',
    phone: '+241 011 76 24 24',
    email: 'contact@dgdi.ga',
    hours: 'الإثنين - الجمعة: 07:30 - 16:00',
    online: 'الخدمة عبر الإنترنت: 24/7',
    copyright: '© 2025 DGDI - جمهورية الغابون. جميع الحقوق محفوظة.',
    dev: 'تم التطوير بواسطة',
    devName: 'Ogoula Jesse. (Mostclient)',
    devRole: 'Product and Growth manager',
    devContact: 'adirignoogoula@gmail.com',
    devPhone: '+241 066 19 57 86'
  }
};

const Footer = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        {/* Bloc gauche : infos DGDI sans logo */}
        <div className="flex-1 flex flex-col justify-center min-w-[220px]">
          <h3 className="text-lg font-bold">E-DGDI</h3>
          <p className="text-xs text-slate-400 mb-1">{t.brand}</p>
          <p className="text-xs text-slate-400 mb-1">{t.desc}</p>
          <div className="flex flex-col gap-1 text-xs text-slate-300">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-emerald-400" />{t.address}</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4 text-emerald-400" />{t.phone}</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-emerald-400" />{t.email}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-emerald-400" />{t.hours}</span>
            <span>{t.online}</span>
          </div>
          {/* Réseaux sociaux DGDI */}
          <div className="flex gap-3 mt-2">
            <a href="https://www.facebook.com/dgdiga/" target="_blank" rel="noopener noreferrer" aria-label="DGDI Facebook" className="hover:text-emerald-400 text-slate-300"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
        {/* Bloc droit : infos développeur */}
        <div className="flex-1 flex flex-col items-end text-xs text-slate-300 min-w-[180px]">
          <div className="flex items-center gap-2 mb-1">
            <User className="w-4 h-4 text-emerald-400" />
            <span>{t.dev} <span className="font-semibold text-white">{t.devName}</span></span>
          </div>
          <span className="mb-1">{t.devRole}</span>
          <a href="mailto:adirignoogoula@gmail.com" className="text-emerald-400 hover:underline">{t.devContact}</a>
          <span className="flex items-center gap-1 mt-1"><Phone className="w-4 h-4 text-emerald-400" />{t.devPhone}</span>
          {/* Réseaux sociaux développeur */}
          <div className="flex gap-3 mt-2">
            <a href="https://www.facebook.com/OgoulaJesse/" target="_blank" rel="noopener noreferrer" aria-label="Facebook développeur" className="hover:text-emerald-400 text-slate-300"><Facebook className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/ogoula-jesse/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn développeur" className="hover:text-emerald-400 text-slate-300"><Linkedin className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/mostclient/" target="_blank" rel="noopener noreferrer" aria-label="Instagram développeur" className="hover:text-emerald-400 text-slate-300"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 mt-8">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
