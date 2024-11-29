<script lang="ts">
	import { collection } from '$lib/store';
	import Button from '@haptic/ui/components/button/button.svelte';
</script>

<header
	class="absolute top-0 w-full flex justify-between items-center h-9 border-b pl-20 bg-background z-40 px-1.5"
>
	<div />
	<p
		class="pointer-events-none text-sm text-foreground/85 hover:text-foreground/100 transition-all cursor-default outline-none -mr-[159px]"
	>
		{$collection?.split('/').pop() || ''}
	</p>
	<div class="flex gap-1">
		<a href="https://github.com/iBz-04" target="_blank" rel="noopener noreferrer">
			<Button variant="secondary" size="sm" scale="sm" class="rounded-full h-[27px] px-2.5"
				>Github</Button
			>
		</a>
		<a href="https://omnipad-home.vercel.app" target="_blank" rel="noopener noreferrer">
			<Button size="sm" scale="sm" class="rounded-full h-[27px] px-2.5">Home</Button>
		</a>
	</div>
</header>
