<!-- src/routes/how-it-works/+page.svelte -->
<script lang="ts">
	import { Plug, ArrowsLeftRight, Broadcast, ShieldCheck } from 'phosphor-svelte';

	const sections = [
		{
			icon: Plug,
			title: 'Persistent connection',
			body: 'When you open Colbe, your client opens a WebSocket connection to our edge servers and keeps it alive. This replaces constant polling — instead of asking "any new messages?" every few seconds, the server pushes events to you the instant they happen.'
		},
		{
			icon: ArrowsLeftRight,
			title: 'Message routing',
			body: 'Sending a message writes it to the server, which fans it out over open WebSocket connections to every other member currently connected to that conversation. Members who are offline receive it on reconnect, pulled from storage rather than re-sent live.'
		},
		{
			icon: Broadcast,
			title: 'Calls and voice',
			body: 'Voice and video use WebRTC for peer-to-peer media streams where possible, falling back to a relay server (TURN) when a direct connection can\'t be established — common on strict NATs or corporate networks. Signaling (who\'s calling whom, negotiating connection details) still runs over the same WebSocket used for messaging.'
		},
		{
			icon: ShieldCheck,
			title: 'Communities and permissions',
			body: 'Each community is a set of channels with role-based permissions checked server-side on every action — posting, joining a call, managing members. The client never enforces permissions on its own; it just reflects what the server allows.'
		}
	];
</script>

<section class="w-full pt-40 pb-24 px-6 bg-background">
	<div class="max-w-3xl mx-auto flex flex-col gap-16">
		<div class="flex flex-col gap-4">
			<h1 class="text-4xl font-bold text-foreground">How Colbe works</h1>
			<p class="text-lg text-muted-foreground">
				A look at what actually happens under the hood when you send a message, join a call, or open a community.
			</p>
		</div>

		<div class="flex flex-col gap-10">
			{#each sections as section (section.title)}
				<div class="flex gap-5">
					<div class="shrink-0 w-11 h-11 rounded-[15px] bg-secondary border border-border flex items-center justify-center">
						<section.icon size={20} class="text-primary" />
					</div>
					<div class="flex flex-col gap-2">
						<h2 class="text-xl font-semibold text-foreground">{section.title}</h2>
						<p class="text-muted-foreground leading-relaxed">{section.body}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>