<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Authentication } from '$lib/components/04-templates';
	import { Logo, Heading, Text, Input, Button } from '$lib/components/01-atoms';
	import { Field } from '$lib/components/02-molecules';
	import { Breadcrumb } from '$lib/components/02-molecules';

const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Authentication children={form} />'
		},
		{
			title: 'With Logo',
			component: () => {},
			code: '<Authentication logo={logo} children={form} />'
		}
	];

const props = [
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Formulario de autenticación'
		},
		{
			name: 'logo',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Logo de la página'
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
		{ ...variants[1], component: withLogoVariant }
	];

	const codeExample = `<script lang="ts">
  import { Authentication } from '$lib/components/04-templates';
  import { Logo, Heading, Input, Button } from '$lib/components/01-atoms';
  import { Field } from '$lib/components/02-molecules';
  
  {#snippet logo()}
    <Logo>AD</Logo>
  {/snippet}

  {#snippet form()}
    <Heading level="h2">Iniciar Sesión</Heading>
    <Field label="Email">
      <Input type="email" />
    </Field>
    <Button intent="primary">Iniciar Sesión</Button>
  {/snippet}
<\/script>

<Authentication logo={logo}>
  {@render form()}
</Authentication>`;
</script>

{#snippet logo()}
		<Logo>AD</Logo>
	{/snippet}

{#snippet loginForm()}
		<Heading level="h2" class="mb-4">Iniciar Sesión</Heading>
		<Field label="Email">
			<Input type="email" placeholder="tu@email.com" />
		</Field>
		<Field label="Contraseña">
			<Input type="password" placeholder="Contraseña" />
		</Field>
		<Button intent="primary" class="w-full">Iniciar Sesión</Button>
	{/snippet}

{#snippet defaultForm()}
		<Heading level="h2" class="mb-4">Iniciar Sesión</Heading>
		<Field label="Email">
			<Input type="email" placeholder="tu@email.com" />
		</Field>
		<Button intent="primary" class="w-full">Iniciar Sesión</Button>
	{/snippet}

{#snippet defaultVariant()}
		<div class="border border-border-default rounded-lg overflow-hidden h-96">
			<Authentication>
				{@render defaultForm()}
			</Authentication>
		</div>
	{/snippet}

{#snippet withLogoForm()}
		<Heading level="h2" class="mb-4">Iniciar Sesión</Heading>
		<Field label="Email">
			<Input type="email" placeholder="tu@email.com" />
		</Field>
		<Button intent="primary" class="w-full">Iniciar Sesión</Button>
	{/snippet}

{#snippet withLogoVariant()}
		<div class="border border-border-default rounded-lg overflow-hidden h-96">
			<Authentication logo={logo}>
				{@render withLogoForm()}
			</Authentication>
		</div>
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
				<h4 class="font-semibold mb-3 text-text-default">Página de Autenticación</h4>
				<div class="border border-border-default rounded-lg overflow-hidden bg-surface-card h-96">
					<Authentication logo={logo}>
						{@render loginForm()}
					</Authentication>
				</div>
			</div>
		</div>
	{/snippet}

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Templates', href: '/showcase/templates' },
			{ label: 'Authentication' }
		]}
	/>

	<ComponentShowcase
		name="Authentication"
		category="Templates"
		description="Plantilla de layout para páginas de autenticación (login, registro) con logo opcional y formulario centrado."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>