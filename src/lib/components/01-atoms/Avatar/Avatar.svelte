<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const avatarVariants = cva(
		'inline-flex items-center justify-center rounded-full bg-primary text-text-on-primary font-semibold',
		{
			variants: {
				size: {
					sm: 'h-8 w-8 text-sm',
					md: 'h-10 w-10 text-base',
					lg: 'h-12 w-12 text-lg',
					xl: 'h-16 w-16 text-xl'
				}
			},
			defaultVariants: {
				size: 'md'
			}
		}
	);

	type Props = VariantProps<typeof avatarVariants> & {
		class?: string;
		src?: string;
		alt?: string;
		initials?: string;
	};

	let { size, class: customClass, src, alt, initials }: Props = $props();
</script>

{#if src}
	<img
		src={src}
		alt={alt || 'Avatar'}
		class={twMerge(avatarVariants({ size }), customClass)}
	/>
{:else}
	<div class={twMerge(avatarVariants({ size }), customClass)}>
		{initials || '?'}
	</div>
{/if}

