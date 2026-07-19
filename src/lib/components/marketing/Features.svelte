<!-- src/lib/components/marketing/Features.svelte -->
<script lang="ts">
	import { ChatCircleDots, VideoCamera, Broadcast, ShieldCheck, BellSimple } from 'phosphor-svelte';

	const smallFeatures = [
		{ icon: VideoCamera, title: 'Video calls', body: 'Group calls over WebRTC, directly from a channel or DM.' },
		{ icon: Broadcast, title: 'Live channels', body: 'One channel, everyone in the community sees it update in real time.' },
		{ icon: ShieldCheck, title: 'Role-based permissions', body: 'Server-side control over who can post, mute, or manage a channel.' },
		{ icon: BellSimple, title: 'Notification routing', body: 'Mentions and DMs are prioritized separately from general channel activity.' }
	];

	const previewCards = Array.from({ length: 8 }, (_, i) => i);
</script>

<section id="features" class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-10 max-w-2xl">
		<span class="inline-flex items-center rounded-[15px] border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
			Features
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			Everything a chat platform needs.
		</h2>
	</div>

	<div class="mb-10 overflow-hidden rounded-[15px] border border-border bg-card">
		<div class="flex items-center gap-3 border-b border-border p-5">
			<div class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary">
				<ChatCircleDots size={20} class="text-primary" />
			</div>
			<div>
				<h3 class="font-semibold text-foreground">See Colbe in motion</h3>
				<p class="text-sm text-muted-foreground">A look at the interface.</p>
			</div>
		</div>

		<div class="marquee-mask flex flex-col gap-4 py-6">
			<div class="marquee-track marquee-left flex w-max gap-4">
				{#each [...previewCards, ...previewCards] as i (i + '-a')}
					<div class="h-32 w-52 shrink-0 rounded-[15px] border border-border bg-secondary p-4">
						<div class="h-2.5 w-3/4 rounded-full bg-muted"></div>
						<div class="mt-2 h-2 w-1/2 rounded-full bg-muted opacity-60"></div>
						<div class="mt-6 h-6 w-6 rounded-full bg-primary/30"></div>
					</div>
				{/each}
			</div>
			<div class="marquee-track marquee-right flex w-max gap-4">
				{#each [...previewCards, ...previewCards] as i (i + '-b')}
					<div class="h-32 w-52 shrink-0 rounded-[15px] border border-border bg-secondary p-4">
						<div class="h-2.5 w-2/3 rounded-full bg-muted"></div>
						<div class="mt-2 h-2 w-1/3 rounded-full bg-muted opacity-60"></div>
						<div class="mt-6 h-6 w-6 rounded-full bg-accent"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each smallFeatures as { icon, title, body } (title)}
			{@const Icon = icon}
			<div class="rounded-[15px] border border-border bg-card p-5">
				<div class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-secondary">
					<Icon size={18} class="text-primary" />
				</div>
				<p class="mt-4 font-semibold text-foreground">{title}</p>
				<p class="mt-1 text-sm text-muted-foreground">{body}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.marquee-mask {
		mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
	}

	.marquee-track {
		animation-duration: 35s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.marquee-left {
		animation-name: scroll-left;
	}

	.marquee-right {
		animation-name: scroll-right;
	}

	@keyframes scroll-left {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@keyframes scroll-right {
		from {
			transform: translateX(-50%);
		}
		to {
			transform: translateX(0);
		}
	}
</style>