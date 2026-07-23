<!-- src/lib/components/app/shell/AppLayout.svelte -->
<script lang="ts">
	import ServerRail from './ServerRail.svelte';
	import ChannelSidebar from './ChannelSidebar.svelte';
	import TopBar from './TopBar.svelte';
	import MemberList from './MemberList.svelte';
	import type { ServerSummary, ChannelSummary, MemberSummary } from './index.js';

	let {
		servers,
		activeServerId,
		channels,
		serverName,
		channelTitle,
		members,
		user,
		children
	}: {
		servers: ServerSummary[];
		activeServerId: string | null;
		channels: ChannelSummary[];
		serverName: string;
		channelTitle: string;
		members: MemberSummary[];
		user: { name: string; username?: string | null; image?: string | null };
		children: import('svelte').Snippet;
	} = $props();

	let scrollEl = $state<HTMLElement | null>(null);
</script>

<div class="flex h-screen overflow-hidden bg-background">
	<ServerRail {servers} {activeServerId} />
	<ChannelSidebar {channels} {serverName} serverId={activeServerId ?? ''} {user} />

	<div class="flex flex-1 flex-col overflow-hidden">
		<TopBar title={channelTitle} scrollContainer={scrollEl} />
		<main bind:this={scrollEl} class="flex-1 overflow-y-auto">
			{@render children()}
		</main>
	</div>

	<MemberList {members} />
</div>