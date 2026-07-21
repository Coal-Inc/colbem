// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = ({ locals }) => {
	return {
		user: locals.user,
		session: locals.session
	};
};