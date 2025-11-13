<script lang="ts">
	import { Button, Input, Select } from '$lib/components/01-atoms';
	import { Field } from '$lib/components/02-molecules';

	type FilterField = {
		label: string;
		type: 'text' | 'select' | 'date';
		options?: { label: string; value: string }[];
		value?: string;
	};

	type Props = {
		class?: string;
		fields: FilterField[];
		onchange?: (filters: Record<string, string>) => void;
		onreset?: () => void;
	};

	let { class: customClass, fields, onchange, onreset }: Props = $props();

	let filterValues = $state<Record<string, string>>({});
	
	function updateFilter(label: string, value: string) {
		filterValues[label] = value;
		filterValues = { ...filterValues };
	}
</script>

<div class="space-y-4 p-4 bg-surface-card rounded-lg border border-border-default {customClass}">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each fields as field}
			{@const fieldValue = filterValues[field.label] || ''}
			<Field label={field.label}>
				{#if field.type === 'text'}
					<Input value={fieldValue} oninput={(e) => updateFilter(field.label, (e.target as HTMLInputElement).value)} />
				{:else if field.type === 'select'}
					<Select value={fieldValue} onchange={(e) => updateFilter(field.label, (e.target as HTMLSelectElement).value)}>
						{#if field.options}
							{#each field.options as option}
								<option value={option.value}>{option.label}</option>
							{/each}
						{/if}
					</Select>
				{:else if field.type === 'date'}
					<Input type="date" value={fieldValue} oninput={(e) => updateFilter(field.label, (e.target as HTMLInputElement).value)} />
				{/if}
			</Field>
		{/each}
	</div>
	<div class="flex justify-end gap-2">
		<Button intent="ghost" onclick={onreset}>Limpiar</Button>
		<Button intent="primary" onclick={() => onchange?.(filterValues)}>Aplicar</Button>
	</div>
</div>

