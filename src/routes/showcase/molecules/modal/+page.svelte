<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Modal } from '$lib/components/02-molecules';
	import { Button, Text } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	let modalOpen1 = $state(false);
	let modalOpen2 = $state(false);
	let modalOpen3 = $state(false);

	const variants = [
		{
			title: 'Small',
			component: () => {},
			code: '<Modal size="sm" bind:open={open} title="Título">Contenido</Modal>'
		},
		{
			title: 'Medium',
			component: () => {},
			code: '<Modal size="md" bind:open={open} title="Título">Contenido</Modal>'
		},
		{
			title: 'Large',
			component: () => {},
			code: '<Modal size="lg" bind:open={open} title="Título">Contenido</Modal>'
		},
		{
			title: 'XL',
			component: () => {},
			code: '<Modal size="xl" bind:open={open} title="Título">Contenido</Modal>'
		},
		{
			title: 'With Footer',
			component: () => {},
			code: '<Modal bind:open={open} title="Título" footer={footerSnippet}>Contenido</Modal>'
		}
	];

	const props = [
		{
			name: 'size',
			type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
			default: "'md'",
			required: false,
			description: 'Tamaño del modal'
		},
		{
			name: 'open',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Estado de apertura del modal (bindable)'
		},
		{
			name: 'title',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Título del modal'
		},
		{
			name: 'children',
			type: 'Snippet',
			default: 'required',
			required: true,
			description: 'Contenido principal del modal'
		},
		{
			name: 'footer',
			type: 'Snippet',
			default: 'undefined',
			required: false,
			description: 'Contenido del footer del modal'
		},
		{
			name: 'onclose',
			type: '() => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando se cierra el modal'
		},
		{
			name: 'class',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Clases CSS adicionales'
		}
	];

	{#snippet smallContent()}
		<Text>Modal pequeño</Text>
	{/snippet}

	{#snippet smallVariant()}
		<Button onclick={() => (modalOpen1 = true)}>Abrir Small</Button>
		<Modal size="sm" bind:open={modalOpen1} title="Modal Small">
			{@render smallContent()}
		</Modal>
	{/snippet}

	{#snippet mediumContent()}
		<Text>Modal mediano (default)</Text>
	{/snippet}

	{#snippet mediumVariant()}
		<Button onclick={() => (modalOpen2 = true)}>Abrir Medium</Button>
		<Modal size="md" bind:open={modalOpen2} title="Modal Medium">
			{@render mediumContent()}
		</Modal>
	{/snippet}

	{#snippet largeContent()}
		<Text>Modal grande</Text>
	{/snippet}

	{#snippet largeVariant()}
		<Button onclick={() => (modalOpen3 = true)}>Abrir Large</Button>
		<Modal size="lg" bind:open={modalOpen3} title="Modal Large">
			{@render largeContent()}
		</Modal>
	{/snippet}

	{#snippet xlContent()}
		<Text>Modal extra grande</Text>
	{/snippet}

	let modalOpen4 = $state(false);

	{#snippet xlVariant()}
		<Button onclick={() => (modalOpen4 = true)}>Abrir XL</Button>
		<Modal size="xl" bind:open={modalOpen4} title="Modal XL">
			{@render xlContent()}
		</Modal>
	{/snippet}

	{#snippet footerContent()}
		<Text>Contenido con footer</Text>
	{/snippet}

	{#snippet footerSnippet()}
		<div class="flex justify-end gap-2">
			<Button intent="secondary" size="sm" onclick={() => (modalOpen5 = false)}>
				Cancelar
			</Button>
			<Button intent="primary" size="sm" onclick={() => (modalOpen5 = false)}>
				Confirmar
			</Button>
		</div>
	{/snippet}

	let modalOpen5 = $state(false);

	{#snippet withFooterVariant()}
		<Button onclick={() => (modalOpen5 = true)}>Abrir con Footer</Button>
		<Modal bind:open={modalOpen5} title="Modal con Footer" footer={footerSnippet}>
			{@render footerContent()}
		</Modal>
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: smallVariant },
		{ ...variants[1], component: mediumVariant },
		{ ...variants[2], component: largeVariant },
		{ ...variants[3], component: xlVariant },
		{ ...variants[4], component: withFooterVariant }
	];

	{#snippet preview()}
		<div class="space-y-8">
			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Tamaños</h3>
				<VariantsGrid variants={variantsWithComponents.slice(0, 4)} />
			</section>

			<section>
				<h3 class="text-lg font-semibold mb-4 text-text-default">Con Footer</h3>
				<VariantsGrid variants={variantsWithComponents.slice(4)} />
			</section>
		</div>
	{/snippet}

	{#snippet examples()}
		<div class="space-y-6">
			<div>
				<h4 class="font-semibold mb-3 text-text-default">Modal de Confirmación</h4>
				{#snippet confirmContent()}
					<Text>¿Estás seguro de que quieres eliminar este elemento?</Text>
				{/snippet}
				{#snippet confirmFooter()}
					<div class="flex justify-end gap-2">
						<Button intent="secondary" size="sm">Cancelar</Button>
						<Button intent="danger" size="sm">Eliminar</Button>
					</div>
				{/snippet}
				<Button onclick={() => (modalOpen5 = true)}>Abrir Modal</Button>
				<Modal bind:open={modalOpen5} title="Confirmar Eliminación" footer={confirmFooter}>
					{@render confirmContent()}
				</Modal>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Modal } from '$lib/components/02-molecules';
  import { Button, Text } from '$lib/components/01-atoms';
  
  let open = $state(false);
  
  {#snippet footer()}
    <Button onclick={() => open = false}>Cerrar</Button>
  {/snippet}
</script>

<Button onclick={() => open = true}>Abrir Modal</Button>

<Modal bind:open={open} title="Título del Modal" footer={footer}>
  <Text>Contenido del modal</Text>
</Modal>`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Modal' }
		]}
	/>

	<ComponentShowcase
		name="Modal"
		category="Molecules"
		description="Componente de modal/diálogo con diferentes tamaños, soporte para título y footer, y cierre automático al hacer clic fuera."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

