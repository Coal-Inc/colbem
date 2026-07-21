<!-- src/routes/(routing)/terms/+page.svelte -->
<script lang="ts">
	import { FileText } from 'phosphor-svelte';
	import { resolve } from '$app/paths';

	const sections = [
		{
			slug: 'acceptance',
			title: 'Acceptance of Terms',
			body: 'By accessing or using Colbe, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.'
		},
		{
			slug: 'accounts',
			title: 'Accounts & Eligibility',
			body: 'You must provide accurate information when creating an account. You are responsible for maintaining the security of your account and any activity under it.'
		},
		{
			slug: 'conduct',
			title: 'User Conduct',
			body: 'You agree not to use Colbe for unlawful purposes, harassment, or to distribute harmful or infringing content.'
		},
		{
			slug: 'content',
			title: 'Content & Ownership',
			body: 'You retain ownership of content you post. By posting, you grant Colbe a license to host and display it as part of the platform.'
		},
		{
			slug: 'termination',
			title: 'Termination',
			body: 'We may suspend or terminate accounts that violate these terms. You may stop using Colbe at any time.'
		},
		{
			slug: 'liability',
			title: 'Limitation of Liability',
			body: 'Colbe is provided "as is" without warranties of any kind. We are not liable for indirect or consequential damages arising from use of the platform.'
		}
	];

	let activeSlug = $state(sections[0].slug);
	let sectionEls: Record<string, HTMLElement> = {};

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeSlug = entry.target.getAttribute('data-slug') ?? activeSlug;
					}
				}
			},
			{ rootMargin: '-20% 0px -70% 0px' }
		);

		for (const el of Object.values(sectionEls)) observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<div class="mx-auto flex max-w-4xl gap-8 px-4 py-16">
	<!-- Scroll sidebar -->
	<aside class="hidden w-56 shrink-0 md:block">
		<div class="sticky top-16 flex flex-col gap-1">
			<p class="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
				<FileText size={16} class="text-primary" />
				Terms of Service
			</p>
			{#each sections as section (section.slug)}
				<a
					href={resolve('/terms') + '#' + section.slug}
					class="rounded-[15px] px-3 py-2 text-sm transition-colors {activeSlug === section.slug
						? 'bg-secondary text-foreground'
						: 'text-muted-foreground hover:text-foreground'}"
				>
					{section.title}
				</a>
			{/each}
		</div>
	</aside>

	<!-- Main content -->
	<div class="flex min-w-0 flex-1 flex-col gap-6">
		<div class="flex items-center gap-2 md:hidden">
			<FileText size={20} class="text-primary" />
			<h1 class="text-2xl font-semibold text-foreground">Terms of Service</h1>
		</div>
		<p class="text-sm text-muted-foreground">
			Last updated July 21, 2026. Browse sections using the menu.
		</p>

		<div class="flex flex-col gap-4">
			{#each sections as section (section.slug)}
				<section
					id={section.slug}
					data-slug={section.slug}
					bind:this={sectionEls[section.slug]}
					class="scroll-mt-16 rounded-[15px] border border-border bg-card p-6"
				>
					<h2 class="text-lg font-semibold text-foreground">{section.title}</h2>
					<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
				</section>
			{/each}
		</div>
	</div>
</div>