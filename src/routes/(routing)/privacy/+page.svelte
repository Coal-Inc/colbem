<!-- src/routes/(routing)/privacy/+page.svelte -->
<script lang="ts">
	import { CaretRight, LockKey } from 'phosphor-svelte';
	import { resolve } from '$app/paths';

	const sections = [
		{ slug: 'collection', title: 'Information We Collect' },
		{ slug: 'use', title: 'How We Use Information' },
		{ slug: 'sharing', title: 'Sharing of Information' },
		{ slug: 'security', title: 'Data Security' },
		{ slug: 'rights', title: 'Your Rights' }
	];
</script>

<div class="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-16">
	<div class="flex items-center gap-2">
		<LockKey size={20} class="text-primary" />
		<h1 class="text-2xl font-semibold text-foreground">Privacy Policy</h1>
	</div>
	<p class="text-sm text-muted-foreground">
		Last updated July 21, 2026. Select a section below to read more.
	</p>

	<div class="flex flex-col gap-2">
		{#each sections as section (section.slug)}
			<a
				href={resolve('/privacy/[slug]', { slug: section.slug })}
				class="flex items-center justify-between rounded-[15px] border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-primary"
			>
				<span>{section.title}</span>
				<CaretRight size={14} class="text-muted-foreground" />
			</a>
		{/each}
	</div>
</div>