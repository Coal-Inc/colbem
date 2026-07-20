<!-- src/lib/components/app/shell/ChannelSidebar.svelte -->
<script lang="ts">
	import { page } from '$app/state';
	import { Hash, SpeakerHigh } from 'phosphor-svelte';
	import type { ChannelSummary } from './index.js';

	let { channels, serverName, serverId }: { channels: ChannelSummary[]; serverName: string; serverId: string } = $props();
</script>

<aside class="flex w-60 shrink-0 flex-col border-r border-border bg-card">
	<div class="border-b border-border p-4">
		<h2 class="truncate font-semibold text-foreground">{serverName}</h2>
	</div>

	<nav class="flex flex-1 flex-col gap-0.5 overflow-y-auto p-2">
		{#each channels as channel (channel.id)}
			{@const active = page.url.pathname.includes(channel.id)}
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- dynamic nested route, resolve() can't type-check runtime params in this version -->
			<a href={`/servers/${serverId}/${channel.id}`} class="flex items-center gap-2 rounded-[15px] px-2.5 py-2 text-sm transition-colors {active ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}">
				{#if channel.type === 'voice'}
					<SpeakerHigh size={16} />
				{:else}
					<Hash size={16} />
				{/if}
				{channel.name}
			</a>
		{/each}
	</nav>
</aside>