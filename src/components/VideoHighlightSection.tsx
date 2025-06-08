import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const translations = {
  fr: {
    title: 'Découvrez la CNIE en vidéo',
    desc: 'Regardez notre vidéo officielle pour comprendre tous les avantages de la nouvelle Carte Nationale d’Identité Électronique et la modernisation des démarches au Gabon.'
  },
  en: {
    title: 'Discover the e-ID in video',
    desc: 'Watch our official video to understand all the benefits of the new National Electronic ID Card and the modernization of procedures in Gabon.'
  },
  es: {
    title: 'Descubra la CNIE en vídeo',
    desc: 'Vea nuestro vídeo oficial para conocer todas las ventajas de la nueva Cédula Nacional de Identidad Electrónica y la modernización de los trámites en Gabón.'
  },
  ar: {
    title: 'اكتشف بطاقة CNIE بالفيديو',
    desc: 'شاهد الفيديو الرسمي لتتعرف على مزايا بطاقة الهوية الوطنية الإلكترونية الجديدة وتحديث الإجراءات في الغابون.'
  }
};

const VideoHighlightSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-emerald-700 mb-4">{t.title}</h2>
        <p className="text-slate-600 mb-8">{t.desc}</p>
        <div className="flex justify-center">
          <video
            src="/uploads/E-DGDIGAB.mp4"
            controls
            autoPlay
            muted
            playsInline
            poster="/uploads/Logo.png"
            className="rounded-2xl shadow-lg w-full max-w-2xl aspect-video border border-emerald-100 bg-white"
            style={{ background: '#fff', objectFit: 'cover' }}
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlightSection;
