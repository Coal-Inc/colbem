<!-- src/lib/components/marketing/Features.svelte -->
<script lang="ts">
	import { ChatCircleDots, UsersThree, ShieldCheck, Sparkle, DeviceMobile, Stack } from 'phosphor-svelte';
</script>

<section id="features" class="bg-blue-500 py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 class="mb-16 text-center text-3xl font-bold text-white sm:text-4xl">All features</h2>

		<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
			<div class="col-span-1 rounded-[15px] bg-blue-600 p-6 text-center">
				<ChatCircleDots size={40} class="mx-auto text-white" />
				<h3 class="mt-4 text-sm font-semibold text-white">Instant DMs</h3>
			</div>
			<div class="col-span-1 rounded-[15px] bg-blue-600 p-6 text-center">
				<UsersThree size={40} class="mx-auto text-white" />
				<h3 class="mt-4 text-sm font-semibold text-white">Servers</h3>
			</div>
			<div class="col-span-1 rounded-[15px] bg-blue-600 p-6 text-center">
				<ShieldCheck size={40} class="mx-auto text-white" />
				<h3 class="mt-4 text-sm font-semibold text-white">Private by default</h3>
			</div>
			<div class="col-span-1 rounded-[15px] bg-blue-600 p-6 text-center">
				<Sparkle size={40} class="mx-auto text-white" />
				<h3 class="mt-4 text-sm font-semibold text-white">Reusable roles</h3>
			</div>
			<div class="col-span-2 flex flex-col items-center justify-center rounded-[15px] bg-blue-600 p-8 text-center sm:col-span-1">
				<DeviceMobile size={40} class="text-white" />
				<h3 class="mt-4 text-sm font-semibold text-white">Mobile ready</h3>
			</div>
			<div class="col-span-2 flex items-center gap-6 rounded-[15px] bg-blue-600 p-8">
				<Stack size={48} class="shrink-0 text-white" />
				<div>
					<h3 class="text-sm font-semibold text-white">Built for every screen</h3>
					<p class="mt-1 text-xs text-white/70">Colbe adapts from desktop to mobile without missing a beat.</p>
				</div>
			</div>
		</div>
	</div>
</section>