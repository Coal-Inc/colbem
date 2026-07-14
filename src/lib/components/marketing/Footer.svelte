<!-- src/lib/components/marketing/Footer.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import { TwitterLogo, DiscordLogo, GithubLogo } from 'phosphor-svelte';

	type Link = {
		id: string;
		label: string;
		href: string;
		internal?: true;
	};

	const columns: {
		title: string;
		links: Link[];
	}[] = [
		{
			title: 'Product',
			links: [
				{ id: 'features', label: 'Features', href: '#features' },
				{ id: 'pricing', label: 'Pricing', href: '#pricing' }
			]
		},
		{
			title: 'Company',
			links: [
				{ id: 'about', label: 'About', href: '/about', internal: true },
				{ id: 'careers', label: 'Careers', href: '/careers', internal: true }
			]
		},
		{
			title: 'Legal',
			links: [
				{ id: 'privacy', label: 'Privacy', href: '/privacy', internal: true },
				{ id: 'terms', label: 'Terms', href: '/terms', internal: true }
			]
		}
	];
</script>

<footer class="bg-[#17141d] py-16">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid grid-cols-2 gap-10 sm:grid-cols-4">
			<div class="col-span-2 sm:col-span-1">
				<div class="flex items-center gap-2">
					<img src="/thumbnail/Colbe.png" alt="Colbe" class="h-7 w-7 rounded-[15px]" />
					<span class="font-semibold text-white">Colbe</span>
				</div>
				<p class="mt-3 text-sm text-zinc-500">Built like blocks.</p>
				<div class="mt-4 flex gap-4">
					<a href="https://twitter.com" class="text-zinc-500 hover:text-white"><TwitterLogo size={18} /></a>
					<a href="https://discord.com" class="text-zinc-500 hover:text-white"><DiscordLogo size={18} /></a>
					<a href="https://github.com/Coal-Inc" class="text-zinc-500 hover:text-white"><GithubLogo size={18} /></a>
				</div>
			</div>

			{#each columns as col (col.title)}
				<div>
					<h4 class="text-sm font-semibold text-white">{col.title}</h4>
					<ul class="mt-4 space-y-3">
						{#each col.links as link (link.id)}
							<li>
								<a
									href={link.internal ? resolve(link.href as never) : link.href}
									class="text-sm text-zinc-500 hover:text-white"
								>
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="mt-12 pt-6 text-center text-xs text-zinc-600">
			© {new Date().getFullYear()} Coal-Inc. All rights reserved.
		</div>
	</div>
</footer>