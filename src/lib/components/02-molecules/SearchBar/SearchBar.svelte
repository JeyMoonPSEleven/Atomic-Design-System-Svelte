<script lang="ts">
	import { Input, Button } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		placeholder?: string;
		value?: string;
		onsubmit?: (value: string) => void;
	};

	let { class: customClass, placeholder = 'Buscar...', value = $bindable(''), onsubmit }: Props = $props();
</script>

<form
	class="flex items-center gap-2 {customClass}"
	onsubmit={(e) => {
		e.preventDefault();
		onsubmit?.(value);
	}}
>
	<Input placeholder={placeholder} bindValue={value} class="flex-1" />
	<Button type="submit">Buscar</Button>
</form>

