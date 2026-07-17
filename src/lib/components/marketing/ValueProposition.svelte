<script lang="ts">
	import { ChatCircleDots, Phone, UsersThree } from 'phosphor-svelte';

	const values = [
		{
			icon: ChatCircleDots,
			title: 'One thread, not three apps',
			body: 'DMs, group chats, and channels live in the same place, so a conversation never has to jump apps to keep going.'
		},
		{
			icon: Phone,
			title: 'Calls that pick up where chat left off',
			body: 'Jump from a message straight into a call without losing the context that got you there.'
		},
		{
			icon: UsersThree,
			title: 'Communities with real structure',
			body: 'Channels, roles, and permissions that scale from a five-person group chat to a five-thousand-person server.'
		}
	];
</script>

<section class="mx-auto w-[90%] max-w-7xl py-20">
	<div class="mb-14 max-w-2xl">
		<span
			class="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-blue-400"
		>
			Why Colbe
		</span>
		<h2 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
			Built like blocks, not bolted together.
		</h2>
	</div>

	<div class="grid gap-6 sm:grid-cols-3">
		{#each values as { icon, title, body } (title)}
			{@const Icon = icon}
			<div class="rounded-[15px] border border-white/5 bg-[#1a1720] p-6">
				<div class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-blue-500/10">
					<Icon size={20} class="text-blue-400" />
				</div>
				<h3 class="mt-4 text-lg font-semibold text-white">{title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
			</div>
		{/each}
	</div>
</section>