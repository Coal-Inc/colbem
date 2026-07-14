<!-- src/lib/components/marketing/CTA.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="bg-[#121016] py-24 text-center">
	<div class="mx-auto max-w-2xl px-6">
		<h2 class="text-4xl font-bold text-white">Live now.</h2>
		<p class="mt-4 text-zinc-400">Colbe is in early access — jump in before your friends do.</p>
		<a href={resolve('/register')} class="mt-8 inline-block rounded-full bg-blue-500 px-8 py-4 text-base text-white hover:bg-blue-400">
			Create your space
		</a>
	</div>
</section>