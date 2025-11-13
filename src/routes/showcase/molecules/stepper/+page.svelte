<script lang="ts">
	import { ComponentShowcase, VariantsGrid } from '$lib/components/showcase';
	import { Stepper } from '$lib/components/02-molecules';
	import { Button } from '$lib/components/01-atoms';
	import { Breadcrumb } from '$lib/components/02-molecules';

	let stepperStep1 = $state(0);
	let stepperStep2 = $state(2);

	const variants = [
		{
			title: 'Default',
			component: () => {},
			code: '<Stepper steps={steps} currentStep={step} />'
		},
		{
			title: 'With Completed Steps',
			component: () => {},
			code: '<Stepper steps={stepsWithCompleted} currentStep={step} />'
		}
	];

	const props = [
		{
			name: 'steps',
			type: 'Step[]',
			default: 'required',
			required: true,
			description: 'Array de pasos con label y completed opcional'
		},
		{
			name: 'currentStep',
			type: 'number',
			default: '0',
			required: false,
			description: 'Paso actual'
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
		<Stepper steps={[
			{ label: 'Paso 1' },
			{ label: 'Paso 2' },
			{ label: 'Paso 3' }
		]} currentStep={stepperStep1} />
	{/snippet}

	{#snippet withCompletedVariant()}
		<Stepper steps={[
			{ label: 'Paso 1', completed: true },
			{ label: 'Paso 2', completed: true },
			{ label: 'Paso 3' },
			{ label: 'Paso 4' }
		]} currentStep={stepperStep2} />
	{/snippet}

	const variantsWithComponents = [
		{ ...variants[0], component: defaultVariant },
		{ ...variants[1], component: withCompletedVariant }
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
				<h4 class="font-semibold mb-3 text-text-default">Proceso Multi-Paso</h4>
				<div class="max-w-2xl p-6 border border-border-default rounded-lg bg-surface-card space-y-4">
					<Stepper steps={[
						{ label: 'Paso 1', completed: stepperStep1 > 0 },
						{ label: 'Paso 2', completed: stepperStep1 > 1 },
						{ label: 'Paso 3', completed: stepperStep1 > 2 },
						{ label: 'Paso 4' }
					]} currentStep={stepperStep1} />
					<div class="flex gap-2 mt-4">
						<Button size="sm" onclick={() => stepperStep1 = Math.max(0, stepperStep1 - 1)}>
							Anterior
						</Button>
						<Button size="sm" onclick={() => stepperStep1 = Math.min(3, stepperStep1 + 1)}>
							Siguiente
						</Button>
					</div>
				</div>
			</div>
		</div>
	{/snippet}

	const codeExample = `<script lang="ts">
  import { Stepper } from '$lib/components/02-molecules';
  
  let currentStep = $state(0);
</script>

<Stepper steps={[
  { label: 'Paso 1', completed: currentStep > 0 },
  { label: 'Paso 2', completed: currentStep > 1 },
  { label: 'Paso 3' }
]} currentStep={currentStep} />`;
</script>

<div class="space-y-6">
	<Breadcrumb
		items={[
			{ label: 'Showcase', href: '/showcase' },
			{ label: 'Molecules', href: '/showcase/molecules' },
			{ label: 'Stepper' }
		]}
	/>

	<ComponentShowcase
		name="Stepper"
		category="Molecules"
		description="Componente de stepper para procesos multi-paso con indicadores visuales de progreso."
		{preview}
		code={codeExample}
		{props}
		{examples}
	/>
</div>

