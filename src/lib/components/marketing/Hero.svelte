<!-- src/lib/components/marketing/Hero.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowRight, ChatCircleDots, Phone, UsersThree, Broadcast, Hash, Microphone } from 'phosphor-svelte';

	const whiteBlocks = [
		{ id: 'chat', icon: ChatCircleDots, pos: 'top-4 left-[8%] rotate-[-6deg]', size: 'h-20 w-20' },
		{ id: 'hash', icon: Hash, pos: 'top-20 left-[32%] rotate-[3deg]', size: 'h-14 w-14' },
		{ id: 'users', icon: UsersThree, pos: 'top-2 right-[20%] rotate-[5deg]', size: 'h-16 w-16' }
	];
	const blueBlocks = [
		{ id: 'phone', icon: Phone, pos: 'bottom-6 left-[18%] rotate-[4deg]', size: 'h-16 w-16' },
		{ id: 'mic', icon: Microphone, pos: 'bottom-16 left-[45%] rotate-[-5deg]', size: 'h-12 w-12' },
		{ id: 'broadcast', icon: Broadcast, pos: 'bottom-2 right-[12%] rotate-[-3deg]', size: 'h-20 w-20' }
	];
</script>

<section class="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#121016] px-6 text-center">
	<h1 class="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
		The chat platform<br />built like blocks
	</h1>
	<p class="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
		Snap DMs, calls, and communities together into one space that fits exactly how you and your people talk.
	</p>
	<a href={resolve('/register')} class="mt-10 flex items-center gap-2 rounded-full bg-blue-500 px-6 py-4 text-base font-medium text-white hover:bg-blue-400">
		Create your space <ArrowRight size={18} />
	</a>
</section>

<section class="relative overflow-hidden bg-[#121016] py-16">
	<div class="relative mx-auto h-64 max-w-5xl">
		{#each whiteBlocks as b (b.id)}
			{@const Icon = b.icon}
			<div class="absolute {b.pos} {b.size} flex items-center justify-center rounded-[15px] bg-white shadow-lg">
				<Icon size={28} class="text-[#121016]" />
			</div>
		{/each}
		{#each blueBlocks as b (b.id)}
			{@const Icon = b.icon}
			<div class="absolute {b.pos} {b.size} flex items-center justify-center rounded-[15px] bg-blue-500 shadow-lg">
				<Icon size={28} class="text-white" />
			</div>
		{/each}
	</div>
</section>