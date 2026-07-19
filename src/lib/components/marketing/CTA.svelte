<!-- src/lib/components/marketing/CTA.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="rounded-[15px] border border-border bg-card px-8 py-14 text-center sm:px-16">
		<h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Ready to bring your people together?</h2>
		<p class="mx-auto mt-3 max-w-xl text-muted-foreground">
			Create your account and have a server running in the next five minutes.
		</p>

		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a href={resolve('/register')} class="rounded-[15px] bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
				Create account
			</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- same-page hash anchor, not a SvelteKit route -->
			<a href="#how-it-works" class="rounded-[15px] bg-secondary px-6 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
				See how it works
			</a>
		</div>
	</div>
</section>