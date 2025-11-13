<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { FileUpload } from '$lib/components/02-molecules';
	import { Breadcrumb } from '$lib/components/02-molecules';

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<FileUpload />'
		},
		{
			title: 'With Accept',
			component: () => {},
			code: '<FileUpload accept="image/*" />'
		},
		{
			title: 'Multiple',
			component: () => {},
			code: '<FileUpload multiple />'
		}
	];

	const props = [
		{
			name: 'accept',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Tipos de archivo aceptados (ej: "image/*", ".pdf")'
		},
		{
			name: 'multiple',
			type: 'boolean',
			default: 'false',
			required: false,
			description: 'Permitir selección múltiple de archivos'
		},
		{
			name: 'onchange',
			type: '(files: FileList | null) => void',
			default: 'undefined',
			required: false,
			description: 'Callback cuando se seleccionan archivos'
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
		<FileUpload />
	{/snippet}

	{#snippet withAcceptVariant()}
		<FileUpload accept="image/*" />
	{/snippet}

	{#snippet multipleVariant()}
		<FileUpload multiple />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withAcceptVariant },
		{ ...variants[2], component: multipleVariant }
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
				<h4 class="font-semibold mb-3 text-text-default">Subida de Archivos</h4>
				<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<div>
						<p class="text-sm text-text-muted mb-2">Subir imagen</p>
						<FileUpload accept="image/*" onchange={(files) => console.log('Archivos:', files)} />
					</div>
					<div>
						<p class="text-sm text-text-muted mb-2">Subir múltiples archivos</p>
						<FileUpload multiple onchange={(files) => console.log('Archivos:', files)} />
					</div>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { FileUpload } from '$lib/components/02-molecules';
</script>

<FileUpload />

<FileUpload accept="image/*" />
<FileUpload multiple />
<FileUpload accept=".pdf,.doc" multiple onchange={(files) => console.log(files)} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'FileUpload' }
		]}
	/>

	<ComponentShowcase
		name="FileUpload"
		category="Molecules"
		description="Componente para subir archivos con soporte para tipos específicos y selección múltiple."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

