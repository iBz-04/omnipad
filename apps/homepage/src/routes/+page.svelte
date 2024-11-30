<script lang="ts">
	import Tooltip from '$lib/components/tooltip.svelte';
	import { Button } from '@haptic/ui/components/button';
	import banner from '$lib/assets/hero-dark.png';

	import { ArrowUpRight } from 'lucide-svelte';
</script>

<svelte:head>
	<link rel="preload" href={banner} as="image" />
</svelte:head>

<h1
	class="text-5xl sm:text-6xl font-medium text-foreground font-['Gambarino-Regular'] text-center z-10"
>
	Your Secure Haven for Notes
</h1>

<p class="text-secondary-foreground/70 text-center leading-relaxed text-sm sm:text-base z-10">
	The Omnipad application is a new generational and
	<Tooltip type="privacy">
		<span class="underline decoration-dotted cursor-not-allowed">localized</span>,
	</Tooltip>
	<!-- <Tooltip type="github">
		<span class="underline decoration-dotted cursor-help">lightweight</span>
	</Tooltip> -->
	notes editor<br class="hidden md:block" />
	It's sleek,
	<Tooltip type="lightweight">
		<span class="underline decoration-dotted cursor-copy">lightweight</span></Tooltip
	> &

	<Tooltip type="rust">
		<span class="underline decoration-dotted cursor-wait">fast.</span>
	</Tooltip>omnipad is designed to be simple plus <Tooltip type="shortcuts"
		><span class="underline decoration-dotted cursor-alias">distraction-free</span>.</Tooltip
	>
</p>

<div class="flex items-center justify-center gap-4 z-10 mt-2">
	<a href="https://omnipad-web.vercel.app/">
		<Button scale="sm" class="rounded-full select-none">Try it</Button>
	</a>
	<a href="https://github.com/OmniS0FT" target="_blank" rel="noopener noreferrer">
		<Button scale="sm" variant="secondary" class="rounded-full select-none">Learn More</Button>
	</a>
</div>

<div class="relative mx-auto w-full flex max-w-4xl flex-col items-center text-center mt-5">
	<span
		class="-inset-x-1/4 top-4 h-1/4 rounded-3xl bg-foreground/50 dark:bg-muted/30 blur-3xl absolute"
	/>
	<div class="relative xl:-mx-36">
		<div
			class="relative flex min-h-full h-full w-full items-center justify-center overflow-hidden rounded-lg md:rounded-xl bg-neutral-950 md:rounded-xl border"
		>
			<img src={banner} alt="Screenshot" class="rounded-[inherit] opacity-45 grayscale z-10" />
		</div>
		<div
			class="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-neutral-950 rounded-lg md:rounded-xl z-10"
		>
			<a
				href="https://omnipad-web.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				class="group overflow-hidden rounded-full border border-primary-foreground/10 dark:border-border bg-background/5 dark:bg-background dark:brightness-110 backdrop-blur-sm transition hover:scale-[1.05]"
			>
				<div
					class="m-2.5 sm:m-3.5 flex items-center justify-center rounded-full border border-primary-foreground/15 dark:border-border bg-gradient-to-b from-neutral-800 to-neutral-700 p-3.5 sm:p-5 shadow-xl transition group-hover:scale-[1.06] backdrop-blur-md"
				>
					<ArrowUpRight
						class="h-5 w-5 sm:w-6 sm:h-6 stroke-[1.5px] text-primary-foreground/50 dark:text-foreground/40 group-hover:text-primary-foreground/60 dark:group-hover:text-foreground/60 group-hover:scale-105 transition-all"
					/>
				</div>
			</a>
		</div>
	</div>
</div>
