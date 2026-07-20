<!-- src/lib/components/app/shell/TopBar.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { Hash } from 'phosphor-svelte';

	let { title, scrollContainer }: { title: string; scrollContainer?: HTMLElement | null } = $props();

	let visible = $state(true);
	let lastScrollTop = $state(0);

	onMount(() => {
		const target = scrollContainer ?? window;

		const getScrollTop = () =>
			target === window ? window.scrollY : (target as HTMLElement).scrollTop;

		lastScrollTop = getScrollTop();

		const handleScroll = () => {
			const current = getScrollTop();

			if (current < 10) {
				visible = true;
			} else if (current > lastScrollTop) {
				visible = false;
			} else {
				visible = true;
			}

			lastScrollTop = current;
		};

		target.addEventListener('scroll', handleScroll, { passive: true });
		return () => target.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="sticky top-0 z-10 flex h-12 shrink-0 items-center gap-2 border-b border-border bg-card px-4 transition-transform duration-200"
	class:-translate-y-full={!visible}
>
	<Hash size={18} class="text-muted-foreground" />
	<h1 class="text-sm font-semibold text-foreground">{title}</h1>
</header>