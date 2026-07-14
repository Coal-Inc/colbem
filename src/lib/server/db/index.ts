// src/lib/server/db/index.ts
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema.js';

let DATABASE_URL: string | undefined = process.env.DATABASE_URL;
let DATABASE_AUTH_TOKEN: string | undefined = process.env.DATABASE_AUTH_TOKEN;

try {
	const env = await import('$app/env/private');
	DATABASE_URL = env.DATABASE_URL;
	DATABASE_AUTH_TOKEN = env.DATABASE_AUTH_TOKEN;
} catch {
	// Running outside SvelteKit (e.g. `better-auth generate`) — fall back to process.env.
}

if (!DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');

const client = createClient({ url: DATABASE_URL, authToken: DATABASE_AUTH_TOKEN });

export const db = drizzle(client, { schema });