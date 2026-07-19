<!-- src/lib/components/marketing/Features.svelte -->
<script lang="ts">
	import { ChatCircleDots, VideoCamera, Broadcast, ShieldCheck, BellSimple, Plus } from 'phosphor-svelte';
	import { Accordion } from 'bits-ui';

	const smallFeatures = [
		{ icon: VideoCamera, title: 'Video calls', body: 'Group calls over WebRTC, directly from a channel or DM.' },
		{ icon: Broadcast, title: 'Live channels', body: 'One channel, everyone in the community sees it update in real time.' },
		{ icon: ShieldCheck, title: 'Role-based permissions', body: 'Server-side control over who can post, mute, or manage a channel.' },
		{ icon: BellSimple, title: 'Notification routing', body: 'Mentions and DMs are prioritized separately from general channel activity.' }
	];

	const doubledCards = [...Array(8).keys(), ...Array(8).keys()];
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
				{#each doubledCards as card, idx (idx + '-a')}
					<div class="h-32 w-52 shrink-0 rounded-[15px] border border-border bg-secondary p-4">
						<span class="text-xs text-muted-foreground">Panel {card + 1}</span>
						<div class="mt-3 h-2.5 w-3/4 rounded-full bg-muted"></div>
						<div class="mt-2 h-2 w-1/2 rounded-full bg-muted opacity-60"></div>
						<div class="mt-6 h-6 w-6 rounded-full bg-primary/30"></div>
					</div>
				{/each}
			</div>
			<div class="marquee-track marquee-right flex w-max gap-4">
				{#each doubledCards as card, idx (idx + '-b')}
					<div class="h-32 w-52 shrink-0 rounded-[15px] border border-border bg-secondary p-4">
						<span class="text-xs text-muted-foreground">Panel {card + 1}</span>
						<div class="mt-3 h-2.5 w-2/3 rounded-full bg-muted"></div>
						<div class="mt-2 h-2 w-1/3 rounded-full bg-muted opacity-60"></div>
						<div class="mt-6 h-6 w-6 rounded-full bg-accent"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<Accordion.Root type="single" class="flex flex-col gap-3">
		{#each smallFeatures as { icon, title, body } (title)}
			{@const Icon = icon}
			<Accordion.Item value={title} class="overflow-hidden rounded-[15px] border border-border bg-card">
				<Accordion.Header>
					<Accordion.Trigger class="group flex w-full items-center gap-3 p-5 text-left">
						<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-secondary">
							<Icon size={18} class="text-primary" />
						</div>
						<span class="flex-1 font-semibold text-foreground">{title}</span>
						<Plus size={16} class="text-muted-foreground transition-transform group-data-[state=open]:rotate-45" />
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content class="px-5 pb-5 pl-17">
					<p class="text-sm text-muted-foreground">{body}</p>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
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