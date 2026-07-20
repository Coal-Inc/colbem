<!-- src/lib/components/onboarding/AuthCard.svelte -->
<script lang="ts">
	let { title, subtitle, children }: { title: string; subtitle?: string; children: import('svelte').Snippet } = $props();
</script>

<div class="w-full max-w-md rounded-[15px] border border-border bg-card p-8">
	<h1 class="text-2xl font-bold text-foreground">{title}</h1>
	{#if subtitle}
		<p class="mt-2 text-sm text-muted-foreground">{subtitle}</p>
	{/if}
	<div class="mt-6 flex flex-col gap-4">
		{@render children()}
	</div>
</div>