<!-- src/lib/components/marketing/CommunityGrid.svelte -->
<script lang="ts">
	import { Hash, SpeakerHigh } from 'phosphor-svelte';

	let showGrid = $state(false);
	const channels = [
		{ id: 'general', name: 'general', type: 'text' },
		{ id: 'intros', name: 'introductions', type: 'text' },
		{ id: 'off-topic', name: 'off-topic', type: 'text' },
		{ id: 'announcements', name: 'announcements', type: 'text' },
		{ id: 'voice-lounge', name: 'voice-lounge', type: 'voice' },
		{ id: 'memes', name: 'memes', type: 'text' }
	];
</script>

<section class="bg-[#17141d] py-24">
	<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
		<div>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">Servers that organize themselves</h2>
			<p class="mt-4 text-zinc-400">
				Snap channels into place, assign roles, and keep every conversation exactly where it belongs.
			</p>
			<button
				onclick={() => (showGrid = !showGrid)}
				class="mt-6 rounded-full bg-white/5 px-5 py-2 text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
			>
				{showGrid ? 'Hide' : 'Show'} channel layout
			</button>
		</div>
		<div class="rounded-[15px] bg-white/5 p-6">
			<div class="grid grid-cols-2 gap-3">
				{#each channels as ch (ch.id)}
					<div class="relative flex items-center gap-2 rounded-[15px] bg-white/5 p-3 {showGrid ? 'ring-1 ring-blue-400/40' : ''}">
						{#if ch.type === 'voice'}
							<SpeakerHigh size={16} class="text-blue-400" />
						{:else}
							<Hash size={16} class="text-blue-400" />
						{/if}
						<span class="text-sm text-zinc-300">{ch.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>