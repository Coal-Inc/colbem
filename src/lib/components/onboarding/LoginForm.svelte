<!-- src/lib/components/onboarding/LoginForm.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { User, LockKey } from 'phosphor-svelte';
	import { Label } from 'bits-ui';

	let { identifier = $bindable(''), password = $bindable(''), onsubmit }: {
		identifier: string;
		password: string;
		onsubmit: (e: SubmitEvent) => void;
	} = $props();
</script>

<form {onsubmit} class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<Label.Root for="identifier" class="text-sm text-muted-foreground">Username or email</Label.Root>
		<div class="flex items-center gap-2 rounded-[15px] border border-border bg-secondary px-4 py-2.5">
			<User size={16} class="text-muted-foreground" />
			<input
				id="identifier"
				type="text"
				bind:value={identifier}
				class="flex-1 bg-transparent text-sm text-foreground outline-none"
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
				class="flex-1 bg-transparent text-sm text-foreground outline-none"
			/>
		</div>
	</div>

	<button type="submit" class="mt-2 rounded-[15px] bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
		Login
	</button>

	<p class="text-center text-sm text-muted-foreground">
		Don't have an account?
		<a href={resolve('/register')} class="text-primary hover:underline">Register</a>
	</p>
</form>