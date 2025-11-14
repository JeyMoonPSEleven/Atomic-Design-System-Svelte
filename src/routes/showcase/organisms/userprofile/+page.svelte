<script lang="ts">
import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { UserProfile } from '$lib/components/03-organisms';
	import { Breadcrumb } from '$lib/components/02-molecules';

const userActions = [
		{ label: 'Editar', onclick: () => console.log('Editar') },
		{ label: 'Eliminar', onclick: () => console.log('Eliminar') }
	];

const variants = [
		{
			title: 'With Avatar Image',
			component: () => {},
			code: '<UserProfile name="Juan" email="juan@example.com" avatar="url" />'
		},
		{
			title: 'With Initials',
			component: () => {},
			code: '<UserProfile name="Juan" initials="JP" />'
		},
		{
			title: 'With Actions',
			component: () => {},
			code: '<UserProfile name="Juan" actions={actions} />'
		}
	];

const props = [
		{
			name: 'name',
			type: 'string',
			default: 'required',
			required: true,
			description: 'Nombre del usuario'
		},
		{
			name: 'email',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Email del usuario'
		},
		{
			name: 'avatar',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'URL del avatar'
		},
		{
			name: 'initials',
			type: 'string',
			default: 'undefined',
			required: false,
			description: 'Iniciales del usuario (si no hay avatar)'
		},
		{
			name: 'actions',
			type: '{label: string, onclick?: () => void}[]',
			default: '[]',
			required: false,
			description: 'Array de acciones del perfil'
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
		{ ...variants[0], component: withAvatarVariant },
		{ ...variants[1], component: withInitialsVariant },
		{ ...variants[2], component: withActionsVariant }
	];

	const codeExample = `<script lang="ts">
  import { UserProfile } from '$lib/components/03-organisms';
<\/script>

<UserProfile
  name="Juan Pérez"
  email="juan@example.com"
  avatar="https://i.pravatar.cc/150?img=1"
/>

<UserProfile name="Juan Pérez" initials="JP" />

<UserProfile 
  name="Juan Pérez" 
  actions={[
    { label: 'Editar', onclick: () => {} },
    { label: 'Eliminar', onclick: () => {} }
  ]} 
/>`;
</script>

{#snippet withAvatarVariant()}
	<UserProfile
		name="Juan Pérez"
		email="juan@example.com"
		avatar="https://i.pravatar.cc/150?img=1"
	/>
{/snippet}

{#snippet withInitialsVariant()}
	<UserProfile name="Juan Pérez" initials="JP" />
{/snippet}

{#snippet withActionsVariant()}
	<UserProfile name="Juan Pérez" email="juan@example.com" initials="JP" actions={userActions} />
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
			<h4 class="font-semibold mb-3 text-text-default">Perfil de Usuario</h4>
			<div class="max-w-md p-6 border border-border-default rounded-lg bg-surface-card">
				<UserProfile
					name="Juan Pérez"
					email="juan@example.com"
					initials="JP"
					actions={userActions}
				/>
			</div>
		</div>
	</div>
{/snippet}


<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Organisms', href: '/showcase/organisms' },
			{ label: 'UserProfile' }
		]}
	/>

	<ComponentShowcase
		name="UserProfile"
		category="Organisms"
		description="Componente de perfil de usuario con avatar, nombre, email y acciones personalizables."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>