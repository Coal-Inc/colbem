import { betterAuth } from 'better-auth/minimal';
import type { BetterAuthPlugin } from 'better-auth/types';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '$lib/server/db/index.js';

let ORIGIN: string = process.env.ORIGIN ?? '';
let BETTER_AUTH_SECRET: string | undefined = process.env.BETTER_AUTH_SECRET;
let plugins: BetterAuthPlugin[] = [];

try {
	const { ORIGIN: envOrigin, BETTER_AUTH_SECRET: envSecret } = await import('$app/env/private');
	const { sveltekitCookies } = await import('better-auth/svelte-kit');
	const { getRequestEvent } = await import('$app/server');

	ORIGIN = envOrigin;
	BETTER_AUTH_SECRET = envSecret;
	plugins = [sveltekitCookies(getRequestEvent)]; // must stay last in the array
} catch {
	// Running outside SvelteKit (e.g. `better-auth generate`) — fall back to process.env, skip cookie plugin.
}

export const auth = betterAuth({
	baseURL: ORIGIN,
	secret: BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, { provider: 'sqlite' }),
	emailAndPassword: { enabled: true },
	plugins
});