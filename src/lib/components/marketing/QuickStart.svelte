<script lang="ts">
	import UserPlus from 'phosphor-svelte/lib/index.js';
	import UsersThree from 'phosphor-svelte/lib/index.js';
	import PaperPlaneTilt from 'phosphor-svelte/lib/index.js';

	const steps = [
		{ icon: UserPlus, title: 'Create your account', body: 'Sign up with your phone number in under a minute.' },
		{ icon: UsersThree, title: 'Join or start a server', body: 'Pick a category, invite people, and set your roles.' },
		{ icon: PaperPlaneTilt, title: 'Start talking', body: 'Message, call, or go live — it all works the moment you land.' }
	];
</script>

<section id="how-it-works" class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-14 max-w-2xl">
		<span
			class="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-400"
		>
			How it works
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Three steps in, no setup wizard.</h2>
	</div>

	<div class="grid gap-8 sm:grid-cols-3">
		{#each steps as { icon, title, body }, i (title)}
			{@const Icon = icon}
			<div class="relative">
				<div class="flex items-center gap-3">
					<span class="font-mono text-sm text-blue-400">0{i + 1}</span>
					<div class="h-px flex-1 bg-white/10"></div>
				</div>
				<div class="mt-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-blue-500/10">
					<Icon size={20} class="text-blue-400" />
				</div>
				<h3 class="mt-4 text-lg font-semibold text-white">{title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
			</div>
		{/each}
	</div>
</section>