<!-- src/lib/components/marketing/ValueProposition.svelte -->
<script lang="ts">
	import { ChatCircleDots, Phone, UsersThree } from 'phosphor-svelte';

	const values = [
		{
			icon: ChatCircleDots,
			title: 'One thread, not three apps',
			body: 'DMs, group chats, and channels share the same message pipeline, so a conversation never has to jump apps to keep going.'
		},
		{
			icon: Phone,
			title: 'Calls that pick up where chat left off',
			body: 'Voice and video share the same connection as your messages, so joining a call from a thread keeps the context that got you there.'
		},
		{
			icon: UsersThree,
			title: 'Communities with real structure',
			body: 'Channels, roles, and permissions enforced server-side, scaling from a five-person group chat to a large community.'
		}
	];
</script>

<section class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-14 max-w-2xl">
		<span class="inline-flex items-center rounded-[15px] border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
			Why Colbe
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			Built like blocks, not bolted together.
		</h2>
	</div>

	<div class="grid gap-6 sm:grid-cols-3">
		{#each values as { icon, title, body } (title)}
			{@const Icon = icon}
			<div class="rounded-[15px] border border-border bg-card p-6">
				<div class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary">
					<Icon size={20} class="text-primary" />
				</div>
				<h3 class="mt-4 text-lg font-semibold text-foreground">{title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
			</div>
		{/each}
	</div>
</section>