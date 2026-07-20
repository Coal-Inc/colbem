<!-- src/lib/components/app/shell/ServerRail.svelte -->
<script lang="ts">
	import { Plus } from 'phosphor-svelte';
	import type { ServerSummary } from './index.js';

	let { servers, activeServerId }: { servers: ServerSummary[]; activeServerId: string | null } = $props();
</script>

<nav class="flex w-[72px] shrink-0 flex-col items-center gap-2 border-r border-border bg-card py-3">
	{#each servers as server (server.id)}
		{@const active = server.id === activeServerId}
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- dynamic nested route, resolve() can't type-check runtime params in this version -->
		<a href={`/servers/${server.id}/${server.defaultChannelId}`} class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[15px] text-sm font-semibold transition-colors {active ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground hover:bg-accent'}">
			{#if server.iconUrl}
				<img src={server.iconUrl} alt={server.name} class="h-full w-full object-cover" />
			{:else}
				{server.name.slice(0, 2).toUpperCase()}
			{/if}
		</a>
	{/each}

	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- /servers/new route not confirmed to exist yet -->
	<a href="/servers/new" class="flex h-12 w-12 items-center justify-center rounded-[15px] bg-secondary text-primary hover:bg-accent transition-colors" aria-label="Create a server">
		<Plus size={20} />
	</a>
</nav>