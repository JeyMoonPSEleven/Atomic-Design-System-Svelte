<script lang="ts">
	import { cva, type VariantProps, twMerge } from '$lib/utils/cva';
	import type { ComponentType } from 'svelte';
	import { onMount } from 'svelte';

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

	type IconName =
		| 'arrow-right'
		| 'chevron-down'
		| 'chevron-up'
		| 'chevron-left'
		| 'chevron-right'
		| 'search'
		| 'menu'
		| 'close'
		| 'check'
		| 'plus'
		| 'minus'
		| 'edit'
		| 'trash'
		| 'info'
		| 'warning'
		| 'error'
		| 'success';

	type Props = VariantProps<typeof iconVariants> & {
		class?: string;
		name?: IconName;
		/** Componente de icono personalizado (opcional, sobreescribe name) */
		component?: ComponentType;
	};

	let { size, class: customClass, name, component }: Props = $props();

	let IconComponent = $state<ComponentType | null>(null);
	let isLoading = $state(true);
	let error = $state<string | null>(null);

	// Función para cargar icono dinámicamente
	async function loadIcon(iconName: IconName) {
		try {
			isLoading = true;
			error = null;
			
			// Por ahora, los iconos no están implementados como componentes separados
			// Usamos un fallback SVG genérico hasta que se configure una librería de iconos
			// como lucide-svelte o se creen los componentes de iconos
			
			// TODO: Cuando se implementen los iconos, usar importaciones dinámicas:
			// const iconPath = `./icons/${iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}.svelte`;
			// const mod = await import(iconPath);
			// IconComponent = mod.default;
			
			// Por ahora, siempre usamos el fallback
			throw new Error(`Icon "${iconName}" not yet implemented`);
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to load icon';
			// No mostrar warning en consola para iconos no implementados
			IconComponent = null;
		} finally {
			isLoading = false;
		}
	}

	// Cargar icono cuando cambia name o component
	$effect(() => {
		if (component) {
			IconComponent = component;
			isLoading = false;
		} else if (name) {
			loadIcon(name);
		} else {
			IconComponent = null;
			isLoading = false;
		}
	});
</script>

{#if component || IconComponent}
	<span
		class={twMerge(iconVariants({ size }), customClass)}
		aria-label={name || 'Icon'}
		role="img"
	>
		{#if component}
			<svelte:component this={component} />
		{:else if IconComponent}
			<svelte:component this={IconComponent} />
		{/if}
	</span>
{:else if isLoading}
	<div
		class={twMerge(
			iconVariants({ size }),
			'animate-pulse bg-surface-tertiary rounded',
			customClass
		)}
		role="status"
		aria-label="Cargando icono..."
	>
		<span class="sr-only">Cargando icono...</span>
	</div>
{:else if error}
	<!-- Fallback: icono SVG genérico -->
	<span
		class={twMerge(iconVariants({ size }), customClass)}
		aria-label={name || 'Icon'}
		role="img"
	>
		<svg
			class="h-full w-full"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
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

