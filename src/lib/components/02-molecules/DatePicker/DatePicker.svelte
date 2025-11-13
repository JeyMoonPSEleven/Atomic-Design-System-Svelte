<script lang="ts">
	import { Input } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		value?: string;
		onchange?: (value: string) => void;
	};

	let { class: customClass, value = $bindable(''), onchange }: Props = $props();
</script>

<Input
	type="date"
	bindValue={value}
	class={customClass}
	oninput={(e) => {
		const newValue = (e.target as HTMLInputElement).value;
		value = newValue;
		onchange?.(newValue);
	}}
/>

