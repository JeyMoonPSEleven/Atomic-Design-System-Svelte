<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';

	const dividerVariants = cva('border-t border-border-default', {
		variants: {
			variant: {
				solid: 'border-t border-border-default',
				dashed: 'border-t border-dashed border-border-default',
				dotted: 'border-t border-dotted border-border-default'
			},
			spacing: {
				none: 'my-0',
				sm: 'my-2',
				md: 'my-4',
				lg: 'my-6',
				xl: 'my-8'
			}
		},
		defaultVariants: {
			variant: 'solid',
			spacing: 'md'
		}
	});

	type Props = VariantProps<typeof dividerVariants> & {
		class?: string;
	};

	let { variant, spacing, class: customClass }: Props = $props();
</script>

<hr class={twMerge(dividerVariants({ variant, spacing }), customClass)} />

