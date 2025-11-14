<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { DatePicker } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

let dateValue1 = $state('');

let dateValue2 = $state('');

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<DatePicker bind:value={date} />'
		},
		{
			title: 'With Change Handler',
			component: () => {},
			code: '<DatePicker bind:value={date} onchange={(v) => console.log(v)} />'
		}
	];

const props = [
		{
			name: 'value',
			type: 'string',
			default: "''",
			required: false,
			description: 'Valor de la fecha (bindable)'
		},
		{
			name: 'onchange',
			type: '(value: string) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando cambia la fecha'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

let date = $state('');

const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withChangeVariant }
	];

	const codeExample = `<script lang="ts">
  import { DatePicker } from '$lib/components/02-molecules';
  
  let date = $state('');
<\/script>

<DatePicker bind:value={date} />

<DatePicker bind:value={date} onchange={(v) => console.log('Fecha:', v)} />`;
</script>

{#snippet defaultVariant()}
		<DatePicker bind:value={dateValue1} />
	{/snippet}

{#snippet withChangeVariant()}
		<DatePicker bind:value={dateValue2} onchange={(v) => console.log('Fecha:', v)} />
	{/snippet}

{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Ejemplos</h3>
				<VariantsGrid variants={variantsWithComponents} />
			</section>
		</div>
	{/snippet}

{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Selector de Fecha</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<div>
						<Text class="mb-2 block">Fecha de nacimiento</Text>
						<DatePicker bind:value={dateValue1} />
						<Text class="text-sm text-text-muted mt-2">Seleccionado: {dateValue1 || 'Ninguna'}</Text>
					</div>
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'DatePicker' }
		]}
	/>

	<ComponentShowcase
		name="DatePicker"
		category="Molecules"
		description="Componente de selector de fecha con soporte para binding reactivo y callbacks."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>