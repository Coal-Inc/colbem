<!-- src/lib/components/app/shell/MemberList.svelte -->
<script lang="ts">
	import type { MemberSummary } from './index.js';

	let { members }: { members: MemberSummary[] } = $props();

	const statusColor = {
		online: 'bg-primary',
		idle: 'bg-accent',
		offline: 'bg-muted'
	} as const;

	const grouped = $derived({
		online: members.filter((m) => m.status !== 'offline'),
		offline: members.filter((m) => m.status === 'offline')
	});
</script>

<aside class="hidden w-60 shrink-0 flex-col overflow-y-auto border-l border-border bg-card p-3 lg:flex">
	{#if grouped.online.length > 0}
		<p class="mb-1 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
			Online — {grouped.online.length}
		</p>
		{#each grouped.online as member (member.id)}
			<div class="flex items-center gap-2 rounded-[15px] px-2 py-1.5 hover:bg-secondary">
				<span class="relative flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-foreground">
					{member.name.slice(0, 2).toUpperCase()}
					<span class="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-card {statusColor[member.status]}"></span>
				</span>
				<span class="truncate text-sm text-foreground">{member.name}</span>
			</div>
		{/each}
	{/if}

	{#if grouped.offline.length > 0}
		<p class="mb-1 mt-4 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
			Offline — {grouped.offline.length}
		</p>
		{#each grouped.offline as member (member.id)}
			<div class="flex items-center gap-2 rounded-[15px] px-2 py-1.5 opacity-50 hover:bg-secondary hover:opacity-100">
				<span class="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-foreground">
					{member.name.slice(0, 2).toUpperCase()}
				</span>
				<span class="truncate text-sm text-foreground">{member.name}</span>
			</div>
		{/each}
	{/if}
</aside>