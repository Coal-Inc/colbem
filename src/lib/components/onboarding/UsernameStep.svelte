<!-- src/lib/components/onboarding/UsernameStep.svelte -->
<script lang="ts">
	import { User, LockKey } from 'phosphor-svelte';
	import { Label } from 'bits-ui';

	let { username = $bindable(''), password = $bindable('') }: {
		username: string;
		password: string;
	} = $props();
</script>

<div class="flex flex-col gap-2">
	<Label.Root for="username" class="text-sm text-muted-foreground">Username</Label.Root>
	<div class="flex items-center gap-2 rounded-[15px] border border-border bg-secondary px-4 py-2.5">
		<User size={16} class="text-muted-foreground" />
		<input
			id="username"
			type="text"
			bind:value={username}
			placeholder="Don't use your real name"
			class="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
		/>
	</div>
</div>

<div class="flex flex-col gap-2">
	<Label.Root for="password" class="text-sm text-muted-foreground">Password</Label.Root>
	<div class="flex items-center gap-2 rounded-[15px] border border-border bg-secondary px-4 py-2.5">
		<LockKey size={16} class="text-muted-foreground" />
		<input
			id="password"
			type="password"
			bind:value={password}
			placeholder="At least 8 characters"
			class="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
		/>
	</div>
</div>