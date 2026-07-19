<!-- src/lib/components/marketing/Hero.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { Sparkle, ArrowRight, Phone, Users, ChatCircle } from 'phosphor-svelte';
</script>

<section class="relative w-full pt-40 pb-24 px-6 bg-background">
	<div class="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
		<div class="flex flex-col gap-6 text-left">
			<span class="inline-flex w-fit items-center gap-2 px-4 py-1.5 text-sm text-primary bg-secondary rounded-[15px] border border-border">
				<Sparkle size={16} weight="fill" />
				Early access is open
			</span>

			<h1 class="text-5xl font-bold text-foreground leading-tight">
				One home for every
				<span class="text-primary">conversation</span>, call, and community
			</h1>

			<p class="text-lg text-muted-foreground max-w-md">
				Colbe brings messaging, calls, and communities into a single, fast platform — built for groups that actually want to stick around.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 mt-2">
				<a href={resolve('/register')} class="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity rounded-[15px]">
					Create your space
					<ArrowRight size={16} weight="bold" />
				</a>
				<a href={resolve('/discover')} class="px-6 py-3 text-sm font-medium text-foreground bg-secondary hover:bg-accent transition-colors rounded-[15px] border border-border text-center">
					Discover communities
				</a>
			</div>
		</div>

		<div class="relative">
			<div class="rounded-[24px] border border-border bg-card overflow-hidden shadow-2xl">
				<div class="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary">
					<div class="w-2.5 h-2.5 rounded-full bg-destructive"></div>
					<div class="w-2.5 h-2.5 rounded-full bg-accent"></div>
					<div class="w-2.5 h-2.5 rounded-full bg-muted"></div>
				</div>
				<div class="p-5 flex flex-col gap-3">
					<div class="flex items-center gap-2 px-4 py-3 rounded-[15px] bg-secondary">
						<ChatCircle size={18} weight="fill" class="text-primary" />
						<div class="flex-1 h-2 rounded-full bg-muted"></div>
					</div>
					<div class="flex items-center gap-2 px-4 py-3 rounded-[15px] bg-secondary self-end w-3/4 ml-auto">
						<div class="flex-1 h-2 rounded-full bg-muted"></div>
					</div>
					<div class="flex items-center gap-2 mt-2 px-4 py-3 rounded-[15px] bg-secondary">
						<Phone size={18} weight="fill" class="text-primary" />
						<span class="text-sm text-foreground">Voice call active</span>
					</div>
					<div class="flex items-center gap-2 px-4 py-3 rounded-[15px] border border-border">
						<Users size={18} class="text-muted-foreground" />
						<span class="text-sm text-muted-foreground">Community members online</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>