<!-- src/lib/components/marketing/Navbar.svelte -->
<script lang="ts">
	const navItems = [
		{ label: 'Product', href: '/product' },
		{ label: 'Documentation', href: '/docs' },
		{ label: 'Company', href: '/company' },
		{ label: 'Legal', href: '/legal' }
	];
</script>

<header class="w-full border-b border-border bg-background">
	<nav class="flex items-center justify-between px-6 py-4">
		<a href="/" class="flex items-center gap-2 text-foreground font-semibold">
			<img src="/download/favicon.svg" alt="Colbe" class="h-6 w-6" />
			<span>Colbe</span>
		</a>

		<ul class="flex items-center gap-8">
			{#each navItems as item}
				<li>
					
						href={item.href}
						class="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-3">
			
				href="/signin"
				class="px-4 py-2 text-sm text-foreground bg-secondary hover:bg-accent transition-colors"
			>
				Sign in
			</a>
			
				href="/register"
				class="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity rounded-[15px]"
			>
				Register
			</a>
		</div>
	</nav>
</header>