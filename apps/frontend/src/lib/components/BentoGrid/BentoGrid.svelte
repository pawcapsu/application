<script lang="ts">
	import { cn } from '$lib/utils';

	export let className: string | undefined = undefined;
</script>

<div
	class={cn(
		'mx-auto grid grid-cols-1 gap-4 md:auto-rows-[18rem] lg:grid-cols-3 xl:grid-cols-6',
		className
	)}
>
	<slot />
</div>