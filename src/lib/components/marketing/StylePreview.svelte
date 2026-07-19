<!-- src/lib/components/marketing/StylePreview.svelte -->
<script lang="ts">
	import { Moon, Circle } from 'phosphor-svelte';

	const swatches = [
		{ label: 'Primary accent', varName: '--primary' },
		{ label: 'Card surface', varName: '--card' },
		{ label: 'Secondary surface', varName: '--secondary' },
		{ label: 'Background', varName: '--background' }
	];
</script>

<section id="style" class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-10 max-w-2xl">
		<span class="inline-flex items-center rounded-[15px] border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
			Style
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			Dark by default, easy on the eyes.
		</h2>
		<p class="mt-3 text-muted-foreground">One consistent look everywhere — no theme to configure.</p>
	</div>

	<div class="overflow-hidden rounded-[15px] border border-border bg-card p-6 sm:p-10">
		<div class="mb-6 flex items-center gap-2 text-muted-foreground">
			<Moon size={16} class="text-primary" />
			<span class="text-sm">Always dark mode</span>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			<div class="rounded-[15px] bg-secondary p-4">
				<div class="flex items-center gap-2">
					<div class="h-8 w-8 rounded-full bg-primary/20"></div>
					<div class="flex-1 flex flex-col gap-1.5">
						<div class="h-2.5 w-16 rounded-full bg-muted"></div>
						<div class="h-2 w-10 rounded-full bg-muted opacity-60"></div>
					</div>
				</div>
				<div class="mt-4 space-y-2">
					<div class="w-3/4 rounded-[15px] bg-accent px-3 py-2.5">
						<div class="h-2 w-full rounded-full bg-muted-foreground/40"></div>
					</div>
					<div class="ml-auto w-3/5 rounded-[15px] bg-primary px-3 py-2.5">
						<div class="h-2 w-full rounded-full bg-primary-foreground/40"></div>
					</div>
				</div>
			</div>

			<div class="flex flex-col justify-center gap-3 rounded-[15px] bg-secondary p-4">
				{#each swatches as swatch (swatch.varName)}
					<div class="flex items-center gap-3">
						<Circle size={14} weight="fill" style="color: var({swatch.varName})" />
						<span class="text-sm text-muted-foreground">{swatch.label}</span>
						<code class="ml-auto text-xs text-muted-foreground/60">{swatch.varName}</code>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>