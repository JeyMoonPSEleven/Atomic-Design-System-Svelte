<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	// 1. Definir variantes de CVA
	const buttonVariants = cva(
		// Clases base (Tokens Semánticos)
		'inline-flex items-center justify-center rounded-button font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary',
		{
			variants: {
				intent: {
					primary:
						'bg-primary text-text-on-primary hover:bg-primary-hover',
					secondary:
						'bg-surface-card text-text-default border border-border-default hover:bg-gray-100 dark:hover:bg-gray-700',
					danger: 'bg-danger text-text-on-danger hover:bg-opacity-90',
					ghost: 'hover:bg-gray-100 dark:hover:bg-gray-700'
				},
				size: {
					sm: 'h-8 px-3 text-sm',
					md: 'h-10 px-4 text-base', // Usando token de sistema (text-base)
					lg: 'h-12 px-6 text-lg'
				}
			},
			defaultVariants: {
				intent: 'primary',
				size: 'md'
			}
		}
	);

	// 2. Definir tipos de props
	type Props = VariantProps<typeof buttonVariants> &
		HTMLButtonAttributes & {
			class?: string;
			children: import('svelte').Snippet;
		};

	// 3. Obtener $props (Svelte 5 Runes)
	let { intent, size, class: customClass, children, ...rest }: Props = $props();
</script>

<button
	class={twMerge(buttonVariants({ intent, size }), customClass)}
	{...rest}
>
	{@render children()}
</button>

