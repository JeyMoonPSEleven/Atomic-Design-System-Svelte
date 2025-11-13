<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Timeline } from '$lib/components/02-molecules';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const timelineItems = [
		{
			title: 'Evento 1',
			description: 'Descripción del evento 1',
			date: '2024-01-01'
		},
		{
			title: 'Evento 2',
			description: 'Descripción del evento 2',
			date: '2024-02-01'
		},
		{
			title: 'Evento 3',
			description: 'Descripción del evento 3',
			date: '2024-03-01'
		}
	];

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Timeline items={items} />'
		},
		{
			title: 'Without Dates',
			component: () => {},
			code: '<Timeline items={itemsWithoutDates} />'
		}
	];

	const props = [
		{
			name: 'items',
			type: 'TimelineItem[]',
			default: 'required',
			required: true,
			description: 'Array de items con title, description opcional y date opcional'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet defaultVariant()}
		<Timeline items={timelineItems} />
	{/snippet}

	{#snippet withoutDatesVariant()}
		<Timeline items={[
			{ title: 'Evento 1', description: 'Descripción 1' },
			{ title: 'Evento 2', description: 'Descripción 2' }
		]} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withoutDatesVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Variantes</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Historial de Eventos</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card">
					<Timeline items={[
						{
							title: 'Registro creado',
							description: 'El usuario se registró en el sistema',
							date: '2024-01-01'
						},
						{
							title: 'Primer acceso',
							description: 'Primer inicio de sesión exitoso',
							date: '2024-01-02'
						},
						{
							title: 'Perfil completado',
							description: 'El usuario completó su perfil',
							date: '2024-01-05'
						}
					]} />
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Timeline } from '$lib/components/02-molecules';
</script>

<Timeline items={[
  {
    title: 'Evento 1',
    description: 'Descripción del evento 1',
    date: '2024-01-01'
  },
  {
    title: 'Evento 2',
    description: 'Descripción del evento 2',
    date: '2024-02-01'
  }
]} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Timeline' }
		]}
	/>

	<ComponentShowcase
		name="Timeline"
		category="Molecules"
		description="Componente de línea de tiempo para mostrar eventos cronológicos con título, descripción y fecha opcional."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

