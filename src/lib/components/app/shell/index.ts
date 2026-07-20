// src/lib/components/app/shell/index.ts
export interface ServerSummary {
	id: string;
	name: string;
	iconUrl: string | null;
}

export interface ChannelSummary {
	id: string;
	name: string;
	type: 'text' | 'voice';
}

export interface MemberSummary {
	id: string;
	name: string;
	status: 'online' | 'idle' | 'offline';
}