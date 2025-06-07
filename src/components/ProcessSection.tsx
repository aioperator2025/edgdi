import React from 'react';
import { FileText, Upload, CheckCircle, Download } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const translations = {
	fr: {
		title: 'Comment ça marche',
		desc: '4 étapes simples pour obtenir vos documents officiels en toute sérénité.',
		steps: [
			{
				title: 'Remplissez le Formulaire',
				desc: 'Complétez votre demande en ligne avec vos informations personnelles.',
			},
			{
				title: 'Téléchargez vos Documents',
				desc: 'Joignez les pièces justificatives requises en format numérique.',
			},
			{
				title: 'Validation & Traitement',
				desc: 'Nos équipes vérifient et traitent votre demande rapidement.',
			},
			{
				title: 'Récupération',
				desc: 'Récupérez votre document ou recevez-le par courrier sécurisé.',
			},
		],
		cta: 'Commencer ma Demande Maintenant',
	},
	en: {
		title: 'How it works',
		desc: '4 simple steps to get your official documents with peace of mind.',
		steps: [
			{
				title: 'Fill the Form',
				desc: 'Complete your application online with your personal information.',
			},
			{
				title: 'Upload Documents',
				desc: 'Attach the required supporting documents in digital format.',
			},
			{
				title: 'Validation & Processing',
				desc: 'Our teams verify and process your request quickly.',
			},
			{
				title: 'Collection',
				desc: 'Collect your document or receive it by secure mail.',
			},
		],
		cta: 'Start My Application Now',
	},
	es: {
		title: '¿Cómo funciona?',
		desc: '4 pasos sencillos para obtener sus documentos oficiales con total tranquilidad.',
		steps: [
			{
				title: 'Rellene el Formulario',
				desc: 'Complete su solicitud en línea con su información personal.',
			},
			{
				title: 'Suba sus Documentos',
				desc: 'Adjunte los documentos requeridos en formato digital.',
			},
			{
				title: 'Validación y Tramitación',
				desc: 'Nuestros equipos verifican y procesan su solicitud rápidamente.',
			},
			{
				title: 'Recogida',
				desc: 'Recoja su documento o recíbalo por correo seguro.',
			},
		],
		cta: 'Iniciar mi Solicitud Ahora',
	},
	ar: {
		title: 'كيف تعمل؟',
		desc: '4 خطوات بسيطة للحصول على مستنداتك الرسمية بكل سهولة.',
		steps: [
			{
				title: 'املأ النموذج',
				desc: 'أكمل طلبك عبر الإنترنت بمعلوماتك الشخصية.',
			},
			{
				title: 'حمّل مستنداتك',
				desc: 'أرفق المستندات المطلوبة بصيغة رقمية.',
			},
			{
				title: 'التحقق والمعالجة',
				desc: 'تقوم فرقنا بالتحقق من طلبك ومعالجته بسرعة.',
			},
			{
				title: 'الاستلام',
				desc: 'استلم مستندك أو استلمه عبر البريد الآمن.',
			},
		],
		cta: 'ابدأ طلبي الآن',
	},
};

const steps = [
	{
		icon: FileText,
		title: 'Remplissez le Formulaire',
		desc: 'Complétez votre demande en ligne avec vos informations personnelles.',
	},
	{
		icon: Upload,
		title: 'Téléchargez vos Documents',
		desc: 'Joignez les pièces justificatives requises en format numérique.',
	},
	{
		icon: CheckCircle,
		title: 'Validation & Traitement',
		desc: 'Nos équipes vérifient et traitent votre demande rapidement.',
	},
	{
		icon: Download,
		title: 'Récupération',
		desc: 'Récupérez votre document ou recevez-le par courrier sécurisé.',
	},
];

const ProcessSection = () => {
	const { lang } = useLanguage();
	const t = translations[lang];
	return (
		<section className="relative py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
			{/* Timeline décorative réduite */}
			<div
				className="hidden lg:block absolute left-1/2 top-44 w-0.5 h-[38%] bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-100 rounded-full z-0"
				style={{ transform: 'translateX(-50%)' }}
			/>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
						<span className="text-emerald-600">{t.title}</span>
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
						{t.desc}
					</p>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 relative">
					{t.steps.map((step, idx) => {
						const Icon = steps[idx].icon;
						return (
							<div key={idx} className="relative flex-1 flex flex-col items-center group">
								{/* Ligne de connexion horizontale réduite */}
								{idx < t.steps.length - 1 && (
									<div
										className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gradient-to-r from-emerald-200 to-emerald-400 z-0"
										style={{
											left: '100%',
											width: '60px',
											transform: 'translateY(-50%)',
										}}
									/>
								)}
								{/* Step Number */}
								<div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white text-lg font-bold shadow-lg mb-4 border-2 border-white group-hover:scale-110 transition-transform duration-300">
									{idx + 1}
								</div>
								{/* Icon réduite */}
								<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl mb-4 border border-emerald-100 group-hover:scale-105 transition-transform duration-300">
									<Icon className="w-6 h-6 text-emerald-600" />
								</div>
								{/* Content */}
								<h3 className="text-base font-bold text-slate-800 mb-1 text-center">
									{step.title}
								</h3>
								<p className="text-slate-600 text-center max-w-xs text-sm">
									{step.desc}
								</p>
							</div>
						);
					})}
				</div>
				{/* Call to Action */}
				<div className="text-center mt-16">
					<button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-7 py-3 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
						{t.cta}
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProcessSection;
