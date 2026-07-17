<script lang="ts">
	import { PaintBrush, GameController, Code, MusicNotes, BookOpen, Barbell } from 'phosphor-svelte';

	// Illustrative categories — not real communities or user data.
	const categories = [
		{ icon: PaintBrush, name: 'Design & Art' },
		{ icon: GameController, name: 'Gaming' },
		{ icon: Code, name: 'Dev & Tech' },
		{ icon: MusicNotes, name: 'Music' },
		{ icon: BookOpen, name: 'Study Groups' },
		{ icon: Barbell, name: 'Fitness' }
	];
</script>

<section class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-10 max-w-2xl">
		<span
			class="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-400"
		>
			Communities
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
			A server for whatever you're into.
		</h2>
		<p class="mt-3 text-zinc-400">Channels, roles, and permissions ready out of the box — pick a category to start.</p>
	</div>

	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
		{#each categories as { icon, name } (name)}
			{@const Icon = icon}
			<div
				class="group flex flex-col items-start gap-3 rounded-[15px] border border-white/5 bg-[#1a1720] p-5 transition hover:border-blue-500/30"
			>
				<div
					class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-blue-500/10 transition group-hover:bg-blue-500/20"
				>
					<Icon size={20} class="text-blue-400" />
				</div>
				<p class="font-semibold text-white">{name}</p>
			</div>
		{/each}
	</div>
</section>