<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const skeletonVariants = cva('animate-pulse bg-surface-tertiary rounded', {
		variants: {
			variant: {
				text: 'h-4',
				circular: 'rounded-full',
				rectangular: 'rounded',
				rounded: 'rounded-lg'
			},
			size: {
				sm: 'h-3',
				md: 'h-4',
				lg: 'h-6',
				xl: 'h-8'
			}
		},
		defaultVariants: {
			variant: 'rectangular',
			size: 'md'
		}
	});

	type Props = VariantProps<typeof skeletonVariants> & {
		class?: string;
		isLoading?: boolean;
		width?: string;
		height?: string;
	};

	let {
		variant,
		size,
		class: customClass,
		isLoading = true,
		width,
		height
	}: Props = $props();

	let style = $derived(
		`${width ? `width: ${width};` : ''} ${height ? `height: ${height};` : ''}`
	);
</script>

{#if isLoading}
	<div
		class={twMerge(skeletonVariants({ variant, size }), customClass)}
		style={style}
		role="status"
		aria-label="Cargando..."
	>
		<span class="sr-only">Cargando...</span>
	</div>
{/if}

