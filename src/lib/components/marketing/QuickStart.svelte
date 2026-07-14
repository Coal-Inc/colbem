<!-- src/lib/components/marketing/QuickStart.svelte -->
<script lang="ts">
	import { PlayCircle, ChatCircleDots, Phone, UsersThree } from 'phosphor-svelte';
</script>

<section class="bg-[#17141d] py-24">
	<div class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
		<div class="order-2 md:order-1">
			<h2 class="text-3xl font-bold text-white sm:text-4xl">Get set up in minutes</h2>
			<p class="mt-4 text-zinc-400">
				Create your account, snap together a server, and start talking. No configuration, no setup wizard — just Colbe.
			</p>
		</div>
		<div class="order-1 md:order-2">
			<div class="relative flex aspect-video items-center justify-center rounded-[15px] bg-white/5">
				<PlayCircle size={56} class="text-blue-400" weight="fill" />
				<div class="absolute bottom-4 left-4 flex gap-2">
					<div class="flex h-9 w-9 items-center justify-center rounded-[15px] bg-white/10"><ChatCircleDots size={16} class="text-white" /></div>
					<div class="flex h-9 w-9 items-center justify-center rounded-[15px] bg-white/10"><Phone size={16} class="text-white" /></div>
					<div class="flex h-9 w-9 items-center justify-center rounded-[15px] bg-white/10"><UsersThree size={16} class="text-white" /></div>
				</div>
			</div>
		</div>
	</div>
</section>