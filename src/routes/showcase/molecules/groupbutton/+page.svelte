<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { GroupButton } from '$lib/components/02-molecules';
	import { Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	let groupValue1 = $state('');
	let groupValue2 = $state('center');

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<GroupButton buttons={buttons} bind:value={value} />'
		},
		{
			title: 'With Change Handler',
			component: () => {},
			code: '<GroupButton buttons={buttons} bind:value={value} onchange={(v) => console.log(v)} />'
		}
	];

	const props = [
		{
			name: 'buttons',
			type: 'ButtonItem[]',
			default: 'required',
			required: true,
			description: 'Array de objetos con label y value'
		},
		{
			name: 'value',
			type: 'string',
			default: "''",
			required: false,
			description: 'Valor seleccionado (bindable)'
		},
		{
			name: 'onchange',
			type: '(value: string) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando cambia la selección'
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
		<GroupButton buttons={[
			{ label: 'Izquierda', value: 'left' },
			{ label: 'Centro', value: 'center' },
			{ label: 'Derecha', value: 'right' }
		]} bind:value={groupValue1} />
	{/snippet}

	{#snippet withChangeVariant()}
		<GroupButton buttons={[
			{ label: 'Izquierda', value: 'left' },
			{ label: 'Centro', value: 'center' },
			{ label: 'Derecha', value: 'right' }
		]} bind:value={groupValue2} onchange={(v) => console.log('Seleccionado:', v)} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withChangeVariant }
	];

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
				<h4 class="font-semibold mb-3 text-text-default">Alineación de Texto</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<GroupButton buttons={[
						{ label: 'Izquierda', value: 'left' },
						{ label: 'Centro', value: 'center' },
						{ label: 'Derecha', value: 'right' }
					]} bind:value={groupValue2} />
					<Text class="text-sm text-text-muted">Seleccionado: {groupValue2 || 'Ninguno'}</Text>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { GroupButton } from '$lib/components/02-molecules';
  
  let value = $state('');
</script>

<GroupButton buttons={[
  { label: 'Izquierda', value: 'left' },
  { label: 'Centro', value: 'center' },
  { label: 'Derecha', value: 'right' }
]} bind:value={value} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'GroupButton' }
		]}
	/>

	<ComponentShowcase
		name="GroupButton"
		category="Molecules"
		description="Componente de grupo de botones para selección múltiple con binding reactivo."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

