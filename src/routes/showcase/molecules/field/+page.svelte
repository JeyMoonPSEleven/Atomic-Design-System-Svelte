<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Field } from '$lib/components/02-molecules';
	import { Input } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'With Label',
			component: () => {},
			code: '<Field label="Campo"><Input /></Field>'
		},
		{
			title: 'With Error',
			component: () => {},
			code: '<Field label="Campo" error="Error"><Input /></Field>'
		},
		{
			title: 'With Help',
			component: () => {},
			code: '<Field label="Campo" help="Ayuda"><Input /></Field>'
		},
		{
			title: 'Required',
			component: () => {},
			code: '<Field label="Campo" required><Input /></Field>'
		}
	];

	const props = [
		{
			name: 'label',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Etiqueta del campo'
		},
		{
			name: 'error',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Mensaje de error'
		},
		{
			name: 'help',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Texto de ayuda'
		},
		{
			name: 'required',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Indica si el campo es requerido'
		},
		{
			name: 'id',
			type: 'string',
			default: 'auto-generated',
			required: false,
			description: 'ID del campo (se genera automáticamente si no se proporciona)'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Componente de input a envolver'
		}
	];

	{#snippet withLabelInput()}
		<Input placeholder="Escribe algo..." />
	{/snippet}

	{#snippet withLabelVariant()}
		<Field label="Campo Normal">
			{@render withLabelInput()}
		</Field>
	{/snippet}

	{#snippet withErrorInput()}
		<Input placeholder="Campo con error" variant="error" />
	{/snippet}

	{#snippet withErrorVariant()}
		<Field label="Campo con Error" error="Este campo es requerido">
			{@render withErrorInput()}
		</Field>
	{/snippet}

	{#snippet withHelpInput()}
		<Input placeholder="Campo con ayuda" />
	{/snippet}

	{#snippet withHelpVariant()}
		<Field label="Campo con Ayuda" help="Este texto te ayudará a completar el campo">
			{@render withHelpInput()}
		</Field>
	{/snippet}

	{#snippet requiredInput()}
		<Input placeholder="Campo requerido" />
	{/snippet}

	{#snippet requiredVariant()}
		<Field label="Campo Requerido" required>
			{@render requiredInput()}
		</Field>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: withLabelVariant },
		{ ...variants[1], component: withErrorVariant },
		{ ...variants[2], component: withHelpVariant },
		{ ...variants[3], component: requiredVariant }
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
				<h4 class="font-semibold mb-3 text-text-default">Formulario Completo</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<Field label="Nombre">
						<Input placeholder="Tu nombre" />
					</Field>
					<Field label="Email" required>
						<Input type="email" placeholder="tu@email.com" />
					</Field>
					<Field label="Mensaje" help="Escribe tu mensaje aquí">
						<Input placeholder="Tu mensaje" />
					</Field>
					<Field label="Campo con Error" error="Este campo es requerido">
						<Input placeholder="Campo con error" variant="error" />
					</Field>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Field } from '$lib/components/02-molecules';
  import { Input } from '$lib/components/01-atoms';
</script>

<Field label="Campo Normal">
  <Input placeholder="Escribe algo..." />
</Field>

<Field label="Campo con Error" error="Este campo es requerido">
  <Input placeholder="Campo con error" variant="error" />
</Field>

<Field label="Campo con Ayuda" help="Este texto te ayudará">
  <Input placeholder="Campo con ayuda" />
</Field>

<Field label="Campo Requerido" required>
  <Input placeholder="Campo requerido" />
</Field>`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Field' }
		]}
	/>

	<ComponentShowcase
		name="Field"
		category="Molecules"
		description="Componente de campo de formulario con label, mensaje de error y texto de ayuda."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

