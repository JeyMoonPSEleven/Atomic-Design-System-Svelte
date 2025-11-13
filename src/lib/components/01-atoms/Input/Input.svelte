<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { HTMLInputAttributes } from 'svelte/elements';

	// Definir variantes de CVA
	const inputVariants = cva(
		// Clases base (Tokens Semánticos)
		'w-full rounded-md border bg-surface-input px-3 py-2 text-text-default placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary',
		{
			variants: {
				variant: {
					default: 'border-border-default',
					error: 'border-danger focus:ring-danger'
				},
				size: {
					sm: 'h-8 text-sm',
					md: 'h-10 text-base',
					lg: 'h-12 text-lg'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'md'
			}
		}
	);

	// Definir tipos de props
	type Props = VariantProps<typeof inputVariants> &
		Omit<HTMLInputAttributes, 'value'> & {
			class?: string;
		} & (
			| { value?: string; bindValue?: never }
			| { value?: never; bindValue: string }
		);

	// Obtener $props (Svelte 5 Runes)
	let { variant, size, class: customClass, value, bindValue = $bindable(''), ...rest }: Props = $props();
	
	// Usar bindValue si está disponible, sino value
	let actualValue = bindValue !== undefined ? bindValue : (value ?? '');
</script>

<input
	class={twMerge(inputVariants({ variant, size }), customClass)}
	value={actualValue}
	oninput={(e) => {
		const newValue = (e.target as HTMLInputElement).value;
		if (bindValue !== undefined) {
			bindValue = newValue;
		}
	}}
	{...rest}
/>

