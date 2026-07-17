<script lang="ts">
	import { resolve } from '$app/paths';
	import { Tooltip } from 'bits-ui';
	import { UsersThree, PhoneCall, Broadcast, CaretRight, Sparkle } from 'phosphor-svelte';

	const pillars = [
		{ icon: UsersThree, label: 'Communities', hint: 'Spaces built around what you care about' },
		{ icon: PhoneCall, label: 'Calls', hint: 'Low-latency voice and video, no drops' },
		{ icon: Broadcast, label: 'Signals', hint: 'Live status and presence across every space' }
	];
</script>

<section class="relative overflow-hidden bg-[#121016] px-6 pb-24 pt-40">
	<div
		class="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]"
	></div>

	<div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
		<span
			class="mb-6 inline-flex items-center gap-1.5 rounded-[15px] border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-blue-400"
		>
			<Sparkle size={14} weight="fill" />
			Early access is open
		</span>

		<h1 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
			One home for every
			<span class="text-blue-400">conversation</span>, call, and community
		</h1>

		<p class="mt-6 max-w-xl text-balance text-base text-white/60 sm:text-lg">
			Colbe brings messaging, calls, and communities into a single, fast platform — built for
			groups that actually want to stick around.
		</p>

		<div class="mt-9 flex flex-col items-center gap-3 sm:flex-row">
			<a
				href={resolve('/register')}
				class="group flex items-center gap-1.5 rounded-[15px] bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400"
			>
				Create your space
				<CaretRight size={14} weight="bold" class="transition-transform group-hover:translate-x-0.5" />
			</a>
			<a
				href="#communities"
				class="rounded-[15px] border border-white/10 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
			>
				Discover communities
			</a>
		</div>

		<Tooltip.Provider>
			<div class="mt-14 flex flex-wrap items-center justify-center gap-2">
				{#each pillars as pillar (pillar.label)}
					<Tooltip.Root delayDuration={150}>
						<Tooltip.Trigger
							class="flex items-center gap-2 rounded-[15px] border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
						>
							<pillar.icon size={16} weight="bold" class="text-blue-400" />
							{pillar.label}
						</Tooltip.Trigger>
						<Tooltip.Portal>
							<Tooltip.Content
								sideOffset={8}
								class="rounded-[15px] border border-white/10 bg-[#1a1720] px-3 py-2 text-xs text-white/70 shadow-lg"
							>
								{pillar.hint}
								<Tooltip.Arrow class="fill-[#1a1720]" />
							</Tooltip.Content>
						</Tooltip.Portal>
					</Tooltip.Root>
				{/each}
			</div>
		</Tooltip.Provider>
	</div>

	<div class="relative mx-auto mt-20 max-w-4xl">
		<div class="rounded-[15px] border border-white/10 bg-[#17141d] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
			<div class="flex items-center gap-1.5 px-2 pb-3">
				<span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
				<span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
				<span class="h-2.5 w-2.5 rounded-full bg-white/15"></span>
			</div>
			<div class="grid grid-cols-[minmax(0,180px)_1fr] gap-3">
				<div class="flex flex-col gap-2 rounded-[15px] bg-[#121016] p-3">
					{#each [0, 1, 2, 3, 4] as i (i)}
						<div class="h-8 rounded-[15px] bg-white/5" style="width: {60 + ((i * 13) % 35)}%"></div>
					{/each}
				</div>
				<div class="flex flex-col gap-3 rounded-[15px] bg-[#121016] p-4">
					{#each { length: 4 } as _, i (i)}
						<div
							class="h-4 rounded-full bg-white/5"
							style="width: {35 + ((i * 17) % 45)}%"
						></div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>