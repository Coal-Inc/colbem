<script lang="ts">
	import ChatCircleDots from 'phosphor-svelte/lib/index.js';
	import VideoCamera from 'phosphor-svelte/lib/index.js';
	import Broadcast from 'phosphor-svelte/lib/index.js';
	import ShieldCheck from 'phosphor-svelte/lib/index.js';
	import BellSimple from 'phosphor-svelte/lib/index.js';
	import RoundCarousel from '$lib/components/shared/Roundcarousel.svelte';

	// TODO(isaac): swap these for real product screenshots once captured.
	const screenshots = [
		{ src: '/screens/chat.png' },
		{ src: '/screens/calls.png' },
		{ src: '/screens/server.png' },
		{ src: '/screens/updates.png' }
	];

	const smallFeatures = [
		{ icon: VideoCamera, title: 'HD video calls', body: 'Group calls up to 50 people, no plugin required.' },
		{ icon: Broadcast, title: 'Live channels', body: 'Broadcast to a whole community in one tap.' },
		{ icon: ShieldCheck, title: 'Role-based permissions', body: 'Granular control over who can post, mute, or manage.' },
		{ icon: BellSimple, title: 'Smart notifications', body: 'Mentions and DMs surface first, noise stays quiet.' }
	];
</script>

<section id="features" class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-10 max-w-2xl">
		<span
			class="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-400"
		>
			Features
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
			Everything a chat platform needs. Nothing it doesn't.
		</h2>
	</div>

	<div class="grid gap-6 lg:grid-cols-5">
		<div class="overflow-hidden rounded-[15px] border border-white/5 bg-[#1a1720] p-6 lg:col-span-3">
			<div class="mb-6 flex items-center gap-3">
				<div class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-blue-500/10">
					<ChatCircleDots size={20} class="text-blue-400" />
				</div>
				<div>
					<h3 class="font-semibold text-white">See Colbe in motion</h3>
					<p class="text-sm text-zinc-500">Drag to spin, or let it run.</p>
				</div>
			</div>
			<div class="h-72">
				<RoundCarousel images={screenshots} imageWidth={220} imageHeight={220} background="transparent" />
			</div>
		</div>

		<div class="grid gap-6 lg:col-span-2">
			{#each smallFeatures as { icon, title, body } (title)}
				{@const Icon = icon}
				<div class="rounded-[15px] border border-white/5 bg-[#1a1720] p-5">
					<div class="flex items-start gap-3">
						<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-blue-500/10">
							<Icon size={18} class="text-blue-400" />
						</div>
						<div>
							<p class="font-semibold text-white">{title}</p>
							<p class="mt-1 text-sm text-zinc-500">{body}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>