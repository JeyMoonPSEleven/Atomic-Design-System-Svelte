<script lang="ts">
	import { Avatar, Heading, Text, Button } from '$lib/components/01-atoms';

	type Props = {
		class?: string;
		name: string;
		email?: string;
		avatar?: string;
		initials?: string;
		actions?: {
			label: string;
			onclick?: () => void;
		}[];
	};

	let { class: customClass, name, email, avatar, initials, actions = [] }: Props = $props();
</script>

<div class="flex items-center gap-4 p-4 {customClass}">
	<Avatar src={avatar} initials={initials} size="lg" />
	<div class="flex-1">
		<Heading level="h3">{name}</Heading>
		{#if email}
			<Text variant="muted" size="sm">{email}</Text>
		{/if}
	</div>
	{#if actions.length > 0}
		<div class="flex gap-2">
			{#each actions as action}
				<Button intent="secondary" size="sm" onclick={action.onclick}>
					{action.label}
				</Button>
			{/each}
		</div>
	{/if}
</div>

