import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const translations = {
  fr: {
    title: 'Recevez l’actualité de la DGDI',
    desc: 'Inscrivez-vous à notre newsletter pour rester informé des nouveautés, démarches et actualités officielles.',
    placeholder: 'Votre adresse email',
    button: 'S’inscrire',
    success: 'Merci pour votre inscription !',
    error: 'Veuillez entrer un email valide.'
  },
  en: {
    title: 'Get DGDI News',
    desc: 'Subscribe to our newsletter to stay informed about news, procedures, and official updates.',
    placeholder: 'Your email address',
    button: 'Subscribe',
    success: 'Thank you for subscribing!',
    error: 'Please enter a valid email.'
  },
  es: {
    title: 'Reciba las noticias de la DGDI',
    desc: 'Suscríbase a nuestro boletín para mantenerse informado sobre novedades, trámites y noticias oficiales.',
    placeholder: 'Su dirección de correo electrónico',
    button: 'Suscribirse',
    success: '¡Gracias por su suscripción!',
    error: 'Por favor, introduzca un correo electrónico válido.'
  },
  ar: {
    title: 'استلم أخبار المديرية العامة للتوثيق والهجرة',
    desc: 'اشترك في النشرة الإخبارية للبقاء على اطلاع على المستجدات والإجراءات والأخبار الرسمية.',
    placeholder: 'بريدك الإلكتروني',
    button: 'اشترك',
    success: 'شكراً لاشتراكك!',
    error: 'يرجى إدخال بريد إلكتروني صالح.'
  }
};

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { lang } = useLanguage();
  const t = translations[lang] || translations.fr;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError(t.error);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-emerald-700 mb-4">{t.title}</h2>
        <p className="text-slate-600 mb-8">{t.desc}</p>
        {submitted ? (
          <div className="text-emerald-700 text-lg font-semibold py-8">{t.success}</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t.placeholder}
              className="w-full sm:w-auto px-5 py-3 rounded-lg border border-emerald-200 focus:ring-2 focus:ring-emerald-400 text-lg"
              required
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all text-lg"
            >
              {t.button}
            </button>
          </form>
        )}
        {error && <div className="text-red-600 mt-3">{error}</div>}
      </div>
    </section>
  );
};

export default NewsletterSection;
