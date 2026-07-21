<!-- src/routes/(routing)/terms/[slug]/+page.svelte -->
<script lang="ts">
	import { CaretLeft } from 'phosphor-svelte';
	import { Separator } from 'bits-ui';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types.js';

	let { data }: PageProps = $props();
</script>

<div class="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-16">
	<a
		href={resolve('/terms')}
		class="flex w-fit items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
	>
		<CaretLeft size={12} />
		Back to Terms
	</a>

	<div class="rounded-[15px] border border-border bg-card p-6">
		<h1 class="text-xl font-semibold text-foreground">{data.title}</h1>
		<Separator.Root class="my-4 h-px bg-border" />
		<p class="text-sm leading-relaxed text-muted-foreground">{data.body}</p>
	</div>
</div>