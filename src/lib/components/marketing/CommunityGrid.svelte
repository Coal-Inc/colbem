<!-- src/lib/components/marketing/CommunityGrid.svelte -->
<script lang="ts">
	import { PaintBrush, GameController, Code, MusicNotes, BookOpen, Barbell } from 'phosphor-svelte';

	// Illustrative categories — not real communities or user data.
	const categories = [
		{ icon: PaintBrush, name: 'Design & art' },
		{ icon: GameController, name: 'Gaming' },
		{ icon: Code, name: 'Dev & tech' },
		{ icon: MusicNotes, name: 'Music' },
		{ icon: BookOpen, name: 'Study groups' },
		{ icon: Barbell, name: 'Fitness' }
	];
</script>

<section class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-10 max-w-2xl">
		<span class="inline-flex items-center rounded-[15px] border border-border bg-secondary/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary backdrop-blur-sm">
			Communities
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			A server for every affinity.
		</h2>
		<p class="mt-3 text-muted-foreground">
			Channels, roles, and permissions provisioned out of the box — pick a domain to get started.
		</p>
	</div>

	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
		{#each categories as { icon, name }, i (name)}
			{@const Icon = icon}
			<div
				class="group relative flex flex-col items-start gap-3 overflow-hidden rounded-[15px] border border-border bg-secondary/30 p-5 backdrop-blur-sm transition hover:border-primary/40 hover:bg-secondary/50 {i === 0 ? 'col-span-2 sm:col-span-1 sm:row-span-2 justify-center' : ''}"
			>
				<div class="absolute inset-0 rounded-[15px] bg-primary/0 transition group-hover:bg-primary/5"></div>
				<div class="relative flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary/10 transition group-hover:bg-primary/20">
					<Icon size={i === 0 ? 26 : 20} class="text-primary" />
				</div>
				<p class="relative font-semibold text-foreground {i === 0 ? 'text-lg' : ''}">{name}</p>
				{#if i === 0}
					<p class="relative text-sm text-muted-foreground">The natural starting point for creative and expressive groups.</p>
				{/if}
			</div>
		{/each}
	</div>
</section>