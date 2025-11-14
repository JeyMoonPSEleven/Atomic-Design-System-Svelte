<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Calendar } from '$lib/components/03-organisms';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

let selectedDate = $state<Date | undefined>(undefined);

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Calendar onselect={(date) => ...} />'
		},
		{
			title: 'With Selected Date',
			component: () => {},
			code: '<Calendar selectedDate={date} onselect={(date) => ...} />'
		}
	];

const props = [
		{
			name: 'selectedDate',
			type: 'Date',
			default: 'undefined',
			required: false,
			description: 'Fecha seleccionada inicialmente'
		},
		{
			name: 'onselect',
			type: '(date: Date) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando se selecciona una fecha'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withSelectedVariant }
	];

	const codeExample = `<script lang="ts">
  import { Calendar } from '$lib/components/03-organisms';
  
  let selectedDate = $state<Date | null>(null);
<\/script>

<Calendar onselect={(date) => {
  selectedDate = date;
  console.log('Fecha seleccionada:', date);
}} />

<Calendar selectedDate={new Date()} onselect={(date) => console.log('Fecha:', date)} />`;
</script>

{#snippet withSelectedVariant()}
		<Calendar selectedDate={new Date()} onselect={(date) => console.log('Fecha:', date)} />
	{/snippet}

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
				<h4 class="font-semibold mb-3 text-text-default">Selector de Fecha</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<Calendar onselect={(date) => selectedDate = date} />
					<Text class="text-sm text-text-muted">
						Fecha seleccionada: {selectedDate ? selectedDate.toLocaleDateString() : 'Ninguna'}
					</Text>
				</div>
			</div>
		</div>
	{/snippet}

{#snippet defaultVariant()}
	<Calendar onselect={(date) => console.log('Fecha:', date)} />
{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Calendar' }
		]}
	/>

	<ComponentShowcase
		name="Calendar"
		category="Organisms"
		description="Componente de calendario para seleccionar fechas con navegación entre meses."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>