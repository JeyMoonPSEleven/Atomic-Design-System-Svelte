<script lang="ts">
	type Props = {
		class?: string;
		selectedDate?: Date;
		onselect?: (date: Date) => void;
	};

	let { class: customClass, selectedDate, onselect }: Props = $props();

	let currentDate = $state<Date>(selectedDate ? new Date(selectedDate) : new Date());
	let viewDate = $state<Date>(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1));

	let daysInMonth = $derived(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate());
	let firstDayOfMonth = $derived(viewDate.getDay());
	let days = $derived(Array.from({ length: daysInMonth }, (_, i) => i + 1));
</script>

<div class="bg-surface-card rounded-lg border border-border-default p-4 {customClass}">
	<div class="mb-4 flex items-center justify-between">
		<button
			class="text-text-default hover:text-primary"
			onclick={() => {
				viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
			}}
		>
			←
		</button>
		<span class="font-semibold text-text-default">
			{viewDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
		</span>
		<button
			class="text-text-default hover:text-primary"
			onclick={() => {
				viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1);
			}}
		>
			→
		</button>
	</div>
	<div class="grid grid-cols-7 gap-1">
		{#each ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'] as day}
			<div class="p-2 text-center text-xs font-medium text-text-muted">{day}</div>
		{/each}
		{#each Array(firstDayOfMonth) as _}
			<div></div>
		{/each}
		{#each days as day}
			{@const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)}
			{@const isSelected = date.toDateString() === currentDate.toDateString()}
			<button
				class="p-2 text-sm rounded {
					isSelected
						? 'bg-primary text-text-on-primary'
						: 'text-text-default hover:bg-gray-100 dark:hover:bg-gray-700'
				}"
				onclick={() => {
					currentDate = new Date(date);
					onselect?.(new Date(date));
				}}
			>
				{day}
			</button>
		{/each}
	</div>
</div>

