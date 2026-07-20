<!-- src/routes/(auth)/+layout.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { ArrowLeft } from 'phosphor-svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
	<a href={resolve('/')} class="fixed top-6 left-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-[15px] px-3 py-2">
		<ArrowLeft size={16} />
		Back to Colbe
	</a>

	{@render children()}
</div>