<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/marketing/Navbar.svelte';
	import Hero from '$lib/components/marketing/Hero.svelte';
	import QuickStart from '$lib/components/marketing/QuickStart.svelte';
	import ValueProposition from '$lib/components/marketing/ValueProposition.svelte';
	import CommunityGrid from '$lib/components/marketing/CommunityGrid.svelte';
	import StylePreview from '$lib/components/marketing/StylePreview.svelte';
	import Features from '$lib/components/marketing/Features.svelte';
	import CTA from '$lib/components/marketing/CTA.svelte';
	import Footer from '$lib/components/marketing/Footer.svelte';

	let ready = $state(false);

	onMount(() => {
		const timer = setTimeout(() => {
			ready = true;
		}, 15500);

		return () => clearTimeout(timer);
	});
</script>

{#if ready}
	<Navbar />
	<Hero />
	<QuickStart />
	<ValueProposition />
	<CommunityGrid />
	<StylePreview />
	<Features />
	<CTA />
	<Footer />
{/if}