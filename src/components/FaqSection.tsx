import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const faqData = {
  fr: [
    {
      question: "Qu'est-ce que la CNIE ?",
      answer: "La Carte Nationale d'Identité Électronique (CNIE) est un document officiel biométrique, sécurisé, délivré par la DGDI, qui atteste de l'identité d'une personne de nationalité gabonaise. Elle intègre une puce électronique et un NIP unique."
    },
    {
      question: "Comment obtenir la CNIE ?",
      answer: "Il faut d'abord obtenir un NIP (Numéro d'Identification Personnel) puis déposer un dossier complet (attestation NIP, acte de naissance légalisé, photo, formulaire, etc.) dans un centre DGDI ou en ligne si vous avez un passeport valide."
    },
    {
      question: "Quels sont les documents à fournir ?",
      answer: "Attestation du NIP, copie légalisée de l'acte de naissance, photo d'identité récente, formulaire rempli. Pour les cas particuliers : certificat de nationalité, décret de naturalisation, livret de famille, etc."
    },
    {
      question: "Combien coûte la CNIE ?",
      answer: "L'enregistrement du NIP et la première délivrance de la CNIE sont gratuits pour tous les citoyens gabonais."
    },
    {
      question: "Quel est le délai pour obtenir la CNIE ?",
      answer: "Après dépôt du dossier complet, la production de la carte est assurée par la DGDI. Le délai annoncé est de quelques semaines."
    },
    {
      question: "Que faire en cas de perte ou de vol ?",
      answer: "Il faut faire une déclaration de perte/vol auprès de la police, puis déposer une demande de duplicata auprès de la DGDI avec les justificatifs nécessaires."
    },
    {
      question: "La CNIE permet-elle de voyager ?",
      answer: "Oui, la CNIE est reconnue comme titre de voyage dans l’espace CEMAC, permettant de circuler librement dans plusieurs pays d’Afrique centrale."
    },
    {
      question: "Comment suivre l’avancement de ma demande ?",
      answer: "Un service de suivi en ligne est disponible sur le site de la DGDI pour vérifier l’état d’avancement de votre dossier."
    }
  ],
  en: [
    {
      question: "What is the CNIE?",
      answer: "The National Electronic ID Card (CNIE) is a secure biometric official document issued by the DGDI, certifying the identity of a Gabonese citizen. It contains an electronic chip and a unique NIP."
    },
    {
      question: "How to obtain the CNIE?",
      answer: "You must first obtain a NIP (Personal Identification Number) and then submit a complete file (NIP certificate, legalized birth certificate, photo, form, etc.) at a DGDI center or online if you have a valid passport."
    },
    {
      question: "Which documents are required?",
      answer: "NIP certificate, legalized birth certificate, recent ID photo, completed form. For special cases: nationality certificate, naturalization decree, family record book, etc."
    },
    {
      question: "How much does the CNIE cost?",
      answer: "NIP registration and the first issuance of the CNIE are free for all Gabonese citizens."
    },
    {
      question: "How long does it take to get the CNIE?",
      answer: "After submitting the complete file, the card is produced by the DGDI. The announced timeframe is a few weeks."
    },
    {
      question: "What to do in case of loss or theft?",
      answer: "You must file a loss/theft report with the police, then request a duplicate from the DGDI with the necessary documents."
    },
    {
      question: "Can the CNIE be used for travel?",
      answer: "Yes, the CNIE is recognized as a travel document in the CEMAC area, allowing free movement in several Central African countries."
    },
    {
      question: "How to track my application?",
      answer: "An online tracking service is available on the DGDI website to check the status of your application."
    }
  ],
  es: [
    {
      question: "¿Qué es la CNIE?",
      answer: "La Cédula Nacional de Identidad Electrónica (CNIE) es un documento oficial biométrico y seguro emitido por la DGDI, que certifica la identidad de un ciudadano gabonés. Incluye un chip electrónico y un NIP único."
    },
    {
      question: "¿Cómo obtener la CNIE?",
      answer: "Primero debe obtener un NIP (Número de Identificación Personal) y luego presentar un expediente completo (certificado NIP, acta de nacimiento legalizada, foto, formulario, etc.) en un centro DGDI o en línea si tiene pasaporte válido."
    },
    {
      question: "¿Qué documentos se requieren?",
      answer: "Certificado NIP, acta de nacimiento legalizada, foto reciente, formulario completo. Para casos especiales: certificado de nacionalidad, decreto de naturalización, libro de familia, etc."
    },
    {
      question: "¿Cuánto cuesta la CNIE?",
      answer: "El registro del NIP y la primera emisión de la CNIE son gratuitos para todos los ciudadanos gaboneses."
    },
    {
      question: "¿Cuánto tiempo tarda en obtenerse la CNIE?",
      answer: "Tras presentar el expediente completo, la DGDI produce la tarjeta. El plazo anunciado es de unas semanas."
    },
    {
      question: "¿Qué hacer en caso de pérdida o robo?",
      answer: "Debe presentar una denuncia ante la policía y luego solicitar un duplicado en la DGDI con los documentos necesarios."
    },
    {
      question: "¿La CNIE permite viajar?",
      answer: "Sí, la CNIE es reconocida como documento de viaje en la zona CEMAC, permitiendo la libre circulación en varios países de África Central."
    },
    {
      question: "¿Cómo seguir el estado de mi solicitud?",
      answer: "Hay un servicio de seguimiento en línea en el sitio web de la DGDI para verificar el estado de su expediente."
    }
  ],
  ar: [
    {
      question: "ما هي بطاقة الهوية الوطنية الإلكترونية (CNIE)؟",
      answer: "بطاقة الهوية الوطنية الإلكترونية (CNIE) هي وثيقة رسمية بيومترية وآمنة تصدرها المديرية العامة للتوثيق والهجرة (DGDI)، وتثبت هوية المواطن الغابوني. تحتوي على شريحة إلكترونية ورقم تعريف شخصي (NIP) فريد."
    },
    {
      question: "كيف أحصل على بطاقة CNIE؟",
      answer: "يجب أولاً الحصول على رقم تعريف شخصي (NIP) ثم تقديم ملف كامل (شهادة NIP، شهادة ميلاد موثقة، صورة، استمارة، إلخ) في مركز DGDI أو عبر الإنترنت إذا كان لديك جواز سفر ساري المفعول."
    },
    {
      question: "ما هي الوثائق المطلوبة؟",
      answer: "شهادة NIP، نسخة موثقة من شهادة الميلاد، صورة حديثة، استمارة مكتملة. للحالات الخاصة: شهادة الجنسية، مرسوم التجنيس، دفتر العائلة، إلخ."
    },
    {
      question: "كم تكلفة بطاقة CNIE؟",
      answer: "تسجيل NIP وإصدار بطاقة CNIE لأول مرة مجاني لجميع المواطنين الغابونيين."
    },
    {
      question: "ما هي مدة الحصول على بطاقة CNIE؟",
      answer: "بعد تقديم الملف الكامل، تتولى DGDI إنتاج البطاقة. المدة المعلنة هي بضعة أسابيع."
    },
    {
      question: "ماذا أفعل في حال فقدان أو سرقة البطاقة؟",
      answer: "يجب تقديم بلاغ فقدان/سرقة لدى الشرطة، ثم طلب نسخة بديلة من DGDI مع الوثائق اللازمة."
    },
    {
      question: "هل يمكن استخدام بطاقة CNIE للسفر؟",
      answer: "نعم، بطاقة CNIE معترف بها كوثيقة سفر في منطقة CEMAC، مما يسمح بحرية التنقل في عدة دول أفريقية."
    },
    {
      question: "كيف أتابع حالة طلبي؟",
      answer: "تتوفر خدمة تتبع عبر الإنترنت على موقع DGDI للتحقق من حالة ملفك."
    }
  ]
};

const sectionTitles = {
  fr: 'FAQ – Questions fréquentes',
  en: 'FAQ – Frequently Asked Questions',
  es: 'FAQ – Preguntas frecuentes',
  ar: 'الأسئلة الشائعة'
};

const FaqSection = () => {
  const { lang } = useLanguage();
  const t = lang in faqData ? lang : 'fr';
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl lg:text-5xl font-bold text-emerald-700 mb-8 text-center">{sectionTitles[t]}</h2>
        <div className="space-y-4">
          {faqData[t].map((item, idx) => (
            <div key={item.question} className="bg-white rounded-xl shadow p-5 border border-emerald-100">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-emerald-800 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                {item.question}
                <span className="ml-2 text-emerald-500">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div id={`faq-panel-${idx}`} className="mt-3 text-slate-700 text-base animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
