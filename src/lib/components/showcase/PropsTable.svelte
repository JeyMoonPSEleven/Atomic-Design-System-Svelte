<script lang="ts">
	type Prop = {
		name: string;
		type: string;
		default?: string;
		required?: boolean;
		description: string;
	};

	type Props = {
		props: Prop[];
		class?: string;
	};

	let { props, class: customClass }: Props = $props();
</script>

<div class="overflow-x-auto {customClass}">
	<table class="min-w-full divide-y divide-border-default">
		<thead>
			<tr class="bg-surface-header">
				<th class="px-4 py-3 text-left text-xs font-medium uppercase text-text-muted">
					Prop
				</th>
				<th class="px-4 py-3 text-left text-xs font-medium uppercase text-text-muted">
					Tipo
				</th>
				<th class="px-4 py-3 text-left text-xs font-medium uppercase text-text-muted">
					Default
				</th>
				<th class="px-4 py-3 text-left text-xs font-medium uppercase text-text-muted">
					Descripción
				</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-border-default bg-surface-card">
			{#each props as prop}
				<tr>
					<td class="px-4 py-3 font-mono text-sm text-text-default">
						{prop.name}
						{#if prop.required}
							<span class="text-danger ml-1">*</span>
						{/if}
					</td>
					<td class="px-4 py-3 font-mono text-xs text-text-muted">{prop.type}</td>
					<td class="px-4 py-3 font-mono text-xs text-text-muted">
						{prop.default || '-'}
					</td>
					<td class="px-4 py-3 text-sm text-text-default">{prop.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

