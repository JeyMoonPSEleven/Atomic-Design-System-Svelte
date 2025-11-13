<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Form } from '$lib/components/03-organisms';
	import { Field } from '$lib/components/02-molecules';
	import { Input, Button } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	{#snippet formFields()}
		<Field label="Nombre">
			<Input placeholder="Tu nombre" />
		</Field>
		<Field label="Email">
			<Input type="email" placeholder="tu@email.com" />
		</Field>
		<Field label="Mensaje">
			<Input placeholder="Tu mensaje" />
		</Field>
		<Button intent="primary" type="submit">Enviar</Button>
	{/snippet}

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Form><Field>...</Field></Form>'
		},
		{
			title: 'With Submit Handler',
			component: () => {},
			code: '<Form onsubmit={(e) => ...}><Field>...</Field></Form>'
		}
	];

	const props = [
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Campos del formulario'
		},
		{
			name: 'onsubmit',
			type: '(e: SubmitEvent) => void',
			default: 'undefined',
			required: false,
			description: 'Handler del evento submit'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet defaultFields()}
		<Field label="Nombre">
			<Input placeholder="Tu nombre" />
		</Field>
		<Button intent="primary" type="submit">Enviar</Button>
	{/snippet}

	{#snippet defaultVariant()}
		<Form>
			{@render defaultFields()}
		</Form>
	{/snippet}

	{#snippet withSubmitFields()}
		<Field label="Email">
			<Input type="email" placeholder="tu@email.com" />
		</Field>
		<Button intent="primary" type="submit">Enviar</Button>
	{/snippet}

	{#snippet withSubmitVariant()}
		<Form onsubmit={(e) => {
			e.preventDefault();
			console.log('Formulario enviado');
		}}>
			{@render withSubmitFields()}
		</Form>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withSubmitVariant }
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
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
					<Form onsubmit={(e) => {
						e.preventDefault();
						console.log('Formulario enviado');
					}}>
						{@render formFields()}
					</Form>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Form } from '$lib/components/03-organisms';
  import { Field } from '$lib/components/02-molecules';
  import { Input, Button } from '$lib/components/01-atoms';
  
  {#snippet fields()}
    <Field label="Nombre">
      <Input placeholder="Tu nombre" />
    </Field>
    <Button intent="primary" type="submit">Enviar</Button>
  {/snippet}
</script>

<Form onsubmit={(e) => {
  e.preventDefault();
  console.log('Formulario enviado');
}}>
  {@render fields()}
</Form>`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'Form' }
		]}
	/>

	<ComponentShowcase
		name="Form"
		category="Organisms"
		description="Componente de formulario que envuelve campos con soporte para handler de submit."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

