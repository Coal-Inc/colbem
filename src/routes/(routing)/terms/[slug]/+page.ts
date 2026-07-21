// src/routes/(routing)/terms/[slug]/+page.ts
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

// TODO: move this to a CMS/markdown source once content is finalized
const sections: Record<string, { title: string; body: string }> = {
	acceptance: {
		title: 'Acceptance of Terms',
		body: 'By accessing or using Colbe, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.'
	},
	accounts: {
		title: 'Accounts & Eligibility',
		body: 'You must provide accurate information when creating an account. You are responsible for maintaining the security of your account and any activity under it.'
	},
	conduct: {
		title: 'User Conduct',
		body: 'You agree not to use Colbe for unlawful purposes, harassment, or to distribute harmful or infringing content.'
	},
	content: {
		title: 'Content & Ownership',
		body: 'You retain ownership of content you post. By posting, you grant Colbe a license to host and display it as part of the platform.'
	},
	termination: {
		title: 'Termination',
		body: 'We may suspend or terminate accounts that violate these terms. You may stop using Colbe at any time.'
	},
	liability: {
		title: 'Limitation of Liability',
		body: 'Colbe is provided "as is" without warranties of any kind. We are not liable for indirect or consequential damages arising from use of the platform.'
	}
};

export const load: PageLoad = ({ params }) => {
	const section = sections[params.slug];
	if (!section) {
		error(404, 'Section not found');
	}
	return { slug: params.slug, ...section };
};