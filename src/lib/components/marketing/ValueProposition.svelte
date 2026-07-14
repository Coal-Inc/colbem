<!-- src/lib/components/marketing/ValueProposition.svelte -->
<script lang="ts">
	import { ChatCircleDots, Phone, UsersThree, Broadcast, ShieldCheck, Lightning, Hash, Microphone } from 'phosphor-svelte';

	const pills = [
		{ id: 'dms', icon: ChatCircleDots, label: 'DMs' },
		{ id: 'voice', icon: Phone, label: 'Voice calls' },
		{ id: 'hd', icon: Microphone, label: 'HD audio' },
		{ id: 'servers', icon: UsersThree, label: 'Servers' },
		{ id: 'channels', icon: Hash, label: 'Channels' },
		{ id: 'status', icon: Broadcast, label: 'Status & reels' },
		{ id: 'encryption', icon: ShieldCheck, label: 'Encryption' },
		{ id: 'sync', icon: Lightning, label: 'Real-time sync' }
	];
</script>

<section class="bg-[#121016] py-24">
	<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
		<div class="flex items-center justify-center">
			<div class="grid grid-cols-3 gap-3">
				{#each pills.slice(0, 6) as p (p.id)}
					{@const Icon = p.icon}
					<div class="flex h-20 w-20 items-center justify-center rounded-[15px] bg-white/5">
						<Icon size={26} class="text-blue-400" />
					</div>
				{/each}
			</div>
		</div>
		<div>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">Everything you need to talk, call, and build a community</h2>
			<p class="mt-4 text-zinc-400">Every feature has been built for one purpose: making conversation feel effortless.</p>
			<div class="mt-8 flex flex-wrap gap-3">
				{#each pills as p (p.id)}
					<span class="rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300">{p.label}</span>
				{/each}
			</div>
		</div>
	</div>
</section>