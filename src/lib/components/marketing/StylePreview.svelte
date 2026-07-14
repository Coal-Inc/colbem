<!-- src/lib/components/marketing/StylePreview.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section id="style" class="bg-[#121016] py-24">
	<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
		<div>
			<h2 class="text-3xl font-bold text-white sm:text-4xl">Clean by default</h2>
			<p class="mt-4 text-zinc-400">One accent color, one radius, one font. Colbe stays consistent so your conversations stay the focus.</p>
			<a href={resolve('/register')} class="mt-6 inline-block rounded-full bg-blue-500 px-6 py-3 text-white hover:bg-blue-400">Try it now</a>
		</div>
		<div class="rounded-[15px] bg-white/5 p-6">
			<div class="flex items-center gap-3">
				<div class="h-10 w-10 rounded-[15px] bg-blue-500"></div>
				<div class="h-10 w-10 rounded-[15px] bg-blue-400"></div>
				<div class="h-10 w-10 rounded-[15px] bg-white/10"></div>
			</div>
			<div class="mt-5 space-y-2">
				<div class="h-3 w-3/4 rounded-full bg-white/10"></div>
				<div class="h-3 w-1/2 rounded-full bg-white/10"></div>
			</div>
			<button class="mt-5 rounded-full bg-blue-500 px-5 py-2 text-sm text-white">Primary button</button>
		</div>
	</div>
</section>