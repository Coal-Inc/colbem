// src/routes/(routing)/privacy/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

// TODO: move this to a CMS/markdown source once content is finalized
const sections: Record<string, { title: string; body: string }> = {
	collection: {
		title: 'Information We Collect',
		body: 'We collect information you provide directly, such as your email, phone number, and profile details, as well as usage data like device information and interaction logs.'
	},
	use: {
		title: 'How We Use Information',
		body: 'We use your information to operate and improve Colbe, personalize your experience, communicate with you, and keep the platform secure.'
	},
	sharing: {
		title: 'Sharing of Information',
		body: 'We do not sell your personal data. We may share information with service providers who help us operate the platform, or when required by law.'
	},
	security: {
		title: 'Data Security',
		body: 'We use industry-standard measures to protect your data, including encryption in transit and access controls. No system is perfectly secure, and we continuously work to improve our protections.'
	},
	rights: {
		title: 'Your Rights',
		body: 'You may access, update, or delete your account information at any time. Contact us if you need help exercising these rights.'
	}
};

export const load: PageLoad = ({ params }) => {
	const section = sections[params.slug];
	if (!section) {
		error(404, 'Section not found');
	}
	return { slug: params.slug, ...section };
};