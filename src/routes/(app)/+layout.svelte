<!-- src/routes/(app)/+layout.svelte -->
<script lang="ts">
	import ServerRail from '$lib/components/app/shell/ServerRail.svelte';
	import type { ServerSummary } from '$lib/components/app/shell/index.js';

	let { children }: { children: import('svelte').Snippet } = $props();

	// TODO: replace with real server list once you have a servers query/endpoint
	const servers: ServerSummary[] = [];
	const activeServerId: string | null = null;
</script>

<div class="flex h-screen overflow-hidden bg-background">
	<ServerRail {servers} {activeServerId} />

	<div class="flex flex-1 flex-col overflow-hidden">
		{@render children()}
	</div>
</div>