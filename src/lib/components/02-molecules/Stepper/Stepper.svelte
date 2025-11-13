<script lang="ts">
	type Step = {
		label: string;
		completed?: boolean;
	};

	type Props = {
		class?: string;
		steps: Step[];
		currentStep?: number;
	};

	let { class: customClass, steps, currentStep = 0 }: Props = $props();
</script>

<div class="flex items-center {customClass}">
	{#each steps as step, index}
		<div class="flex items-center">
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full border-2 {
					index < currentStep || step.completed
						? 'border-primary bg-primary text-text-on-primary'
						: index === currentStep
							? 'border-primary text-primary'
							: 'border-gray-300 text-gray-400'
				}"
			>
				{#if index < currentStep || step.completed}
					✓
				{:else}
					{index + 1}
				{/if}
			</div>
			<span
				class="ml-2 text-sm {
					index <= currentStep ? 'text-text-default font-medium' : 'text-text-muted'
				}"
			>
				{step.label}
			</span>
		</div>
		{#if index < steps.length - 1}
			<div
				class="mx-4 h-0.5 w-16 {
					index < currentStep ? 'bg-primary' : 'bg-gray-300'
				}"
			></div>
		{/if}
	{/each}
</div>

