<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const iconVariants = cva('inline-block', {
		variants: {
			size: {
				sm: 'h-4 w-4',
				md: 'h-5 w-5',
				lg: 'h-6 w-6',
				xl: 'h-8 w-8'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	type Props = VariantProps<typeof iconVariants> & {
		class?: string;
		name?: string;
	};

	let { size, class: customClass, name }: Props = $props();
</script>

{#if name}
	<span class={twMerge(iconVariants({ size }), customClass)} aria-label={name}>
		<!-- Icon placeholder - usar librería de iconos como lucide-svelte -->
		<svg
			class="h-full w-full"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 6v6m0 0v6m0-6h6m-6 0H6"
			/>
		</svg>
	</span>
{/if}

