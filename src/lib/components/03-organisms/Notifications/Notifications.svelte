<script lang="ts">
	import { Toast } from '$lib/components/02-molecules';

	type Notification = {
		id: string;
		message: string;
		variant?: 'success' | 'error' | 'warning' | 'info';
	};

	type Props = {
		class?: string;
		notifications: Notification[];
		onclose?: (id: string) => void;
	};

	let { class: customClass, notifications, onclose }: Props = $props();
</script>

<div class="fixed top-4 right-4 z-50 space-y-2 {customClass}">
	{#each notifications as notification}
		<Toast
			variant={notification.variant || 'info'}
			message={notification.message}
			onclose={() => onclose?.(notification.id)}
		/>
	{/each}
</div>

