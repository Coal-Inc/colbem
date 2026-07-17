<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="rounded-[15px] border border-white/5 bg-[#1a1720] px-8 py-14 text-center sm:px-16">
		<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to bring your people together?</h2>
		<p class="mx-auto mt-3 max-w-xl text-zinc-400">
			Create your account and have a server running in the next five minutes.
		</p>

		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href={resolve('/register')}
				class="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white hover:bg-blue-400"
			>
				Create account
			</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- same-page hash anchor, not a SvelteKit route -->
			<a
				href="#how-it-works"
				class="rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-zinc-300 hover:bg-white/10 hover:text-white"
			>
				See how it works
			</a>
		</div>
	</div>
</section>