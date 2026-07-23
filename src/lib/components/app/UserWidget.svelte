<!-- src/lib/components/app/UserWidget.svelte -->
<script lang="ts">
	import { Microphone, MicrophoneSlash, GearSix } from 'phosphor-svelte';
	import { resolve } from '$app/paths';

	let {
		user
	}: {
		user: { name: string; username?: string | null; image?: string | null };
	} = $props();

	let muted = $state(false);

	function toggleMute() {
		muted = !muted;
	}
</script>

<div class="flex items-center gap-2 rounded-[15px] bg-secondary px-2 py-2">
	<a href={resolve('/@me')} class="flex min-w-0 flex-1 items-center gap-2 rounded-[10px] px-1 py-1 transition-colors hover:bg-accent">
		{#if user.image}
			<img src={user.image} alt={user.name} class="h-8 w-8 shrink-0 rounded-full object-cover" />
		{:else}
			<div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
				{user.name.charAt(0).toUpperCase()}
			</div>
		{/if}

		<div class="min-w-0 flex-1 text-left">
			<p class="truncate text-sm font-medium text-foreground">{user.name}</p>
			{#if user.username}
				<p class="truncate text-xs text-muted-foreground">@{user.username}</p>
			{/if}
		</div>
	</a>

	<div class="flex shrink-0 items-center gap-1">
		<button type="button" onclick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'} class="flex h-8 w-8 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
			{#if muted}
				<MicrophoneSlash size={16} />
			{:else}
				<Microphone size={16} />
			{/if}
		</button>

		<a href={resolve('/settings')} aria-label="Settings" class="flex h-8 w-8 items-center justify-center rounded-[10px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
			<GearSix size={16} />
		</a>
	</div>
</div>