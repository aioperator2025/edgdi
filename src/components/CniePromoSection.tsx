import React from 'react';
import { ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const translations = {
  fr: {
    title: 'La nouvelle CNIE gabonaise : sécurité, modernité, simplicité',
    intro: "La Carte Nationale d'Identité Électronique (CNIE) révolutionne l'identité au Gabon. Plus sécurisée, gratuite, multiservices et conforme aux normes internationales, elle simplifie toutes vos démarches administratives.",
    highlights: [
      {
        icon: ShieldCheck,
        title: 'Sécurité maximale',
        desc: 'Puce électronique cryptée, NIP unique, protection avancée contre la fraude et la falsification.'
      },
      {
        icon: Zap,
        title: 'Démarches 100% en ligne',
        desc: 'Demande, suivi et renouvellement accessibles partout, sans déplacement. Procédure accélérée et gratuite.'
      },
      {
        icon: Globe2,
        title: 'Mobilité & Multiservices',
        desc: 'Utilisable comme titre de voyage CEMAC, accès simplifié à la CNAMGS, CNSS, impôts, permis, etc.'
      }
    ],
    cta: 'Tout savoir sur la CNIE',
  },
  en: {
    title: 'The new Gabonese e-ID: security, modernity, simplicity',
    intro: 'The National Electronic ID Card (CNIE) revolutionizes identity in Gabon. More secure, free, multi-service and internationally compliant, it simplifies all your administrative procedures.',
    highlights: [
      {
        icon: ShieldCheck,
        title: 'Maximum security',
        desc: 'Encrypted chip, unique NIP, advanced protection against fraud and forgery.'
      },
      {
        icon: Zap,
        title: '100% online process',
        desc: 'Apply, track and renew from anywhere, no travel needed. Fast and free.'
      },
      {
        icon: Globe2,
        title: 'Mobility & Multi-services',
        desc: 'Usable as a CEMAC travel document, easy access to health, social security, taxes, driving license, etc.'
      }
    ],
    cta: 'Learn more about the e-ID',
  }
};

const CniePromoSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-100 via-white to-emerald-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-emerald-700 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">{t.intro}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {t.highlights.map((item, idx) => {
            const Icon = item.icon;
            // Images associées à chaque point fort
            const images = [
              '/uploads/Logo.png',
              '/uploads/bg.jpg',
              '/uploads/Passport.png'
            ];
            return (
              <div key={item.title} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-emerald-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 mb-4">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <img src={images[idx]} alt={item.title} className="w-20 h-20 object-contain rounded-xl mb-4 shadow" />
                <h3 className="text-xl font-bold text-emerald-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <a href="#demarches-cnie" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all text-lg">{t.cta}</a>
        </div>
      </div>
    </section>
  );
};

export default CniePromoSection;
