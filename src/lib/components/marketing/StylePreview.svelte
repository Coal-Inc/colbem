<script lang="ts">
	import Moon from 'phosphor-svelte/lib/index.js';
</script>

<section id="style" class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-10 max-w-2xl">
		<span
			class="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-400"
		>
			Style
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Dark by default, easy on the eyes.</h2>
		<p class="mt-3 text-zinc-400">One consistent look everywhere — no theme to configure.</p>
	</div>

	<div class="overflow-hidden rounded-[15px] border border-white/5 bg-[#1a1720] p-6 sm:p-10">
		<div class="mb-6 flex items-center gap-2 text-zinc-500">
			<Moon size={16} class="text-blue-400" />
			<span class="text-sm">Always dark mode</span>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			<div class="rounded-[15px] bg-[#121016] p-4">
				<div class="flex items-center gap-2">
					<div class="h-8 w-8 rounded-full bg-blue-500/20"></div>
					<div>
						<p class="text-sm font-medium text-white">Maya</p>
						<p class="text-xs text-zinc-500">online</p>
					</div>
				</div>
				<div class="mt-4 space-y-2">
					<div class="w-fit max-w-[80%] rounded-[15px] bg-white/5 px-3 py-2 text-sm text-zinc-300">
						pushed the update, check it out
					</div>
					<div class="ml-auto w-fit max-w-[80%] rounded-[15px] bg-blue-500 px-3 py-2 text-sm text-white">
						looks clean, love the accent
					</div>
				</div>
			</div>

			<div class="flex flex-col justify-center gap-3 rounded-[15px] bg-[#121016] p-4">
				<div class="flex items-center gap-3">
					<div class="h-3 w-3 rounded-full bg-blue-500"></div>
					<span class="text-sm text-zinc-400">blue-500 — primary accent</span>
				</div>
				<div class="flex items-center gap-3">
					<div class="h-3 w-3 rounded-full bg-blue-400"></div>
					<span class="text-sm text-zinc-400">blue-400 — hover / icons</span>
				</div>
				<div class="flex items-center gap-3">
					<div class="h-3 w-3 rounded-full border border-white/20 bg-[#1a1720]"></div>
					<span class="text-sm text-zinc-400">#1a1720 — surface</span>
				</div>
				<div class="flex items-center gap-3">
					<div class="h-3 w-3 rounded-full border border-white/20 bg-[#121016]"></div>
					<span class="text-sm text-zinc-400">#121016 — background</span>
				</div>
			</div>
		</div>
	</div>
</section>