<script lang="ts">
	import { Heading, Text } from '$lib/components/01-atoms';

	type ComponentItem = {
		name: string;
		href: string;
	};

	type Category = {
		name: string;
		icon: string;
		items: ComponentItem[];
	};

	type Props = {
		searchQuery?: string;
		class?: string;
	};

	let { searchQuery = '', class: customClass }: Props = $props();

	const categories: Category[] = [
		{
			name: 'Átomos',
			icon: '🔴',
			items: [
				{ name: 'Button', href: '/showcase/atoms/button' },
				{ name: 'Input', href: '/showcase/atoms/input' },
				{ name: 'Checkbox', href: '/showcase/atoms/checkbox' },
				{ name: 'Radio', href: '/showcase/atoms/radio' },
				{ name: 'Select', href: '/showcase/atoms/select' },
				{ name: 'Slider', href: '/showcase/atoms/slider' },
				{ name: 'Switch', href: '/showcase/atoms/switch' },
				{ name: 'Avatar', href: '/showcase/atoms/avatar' },
				{ name: 'Badge', href: '/showcase/atoms/badge' },
				{ name: 'ColorSwatch', href: '/showcase/atoms/colorswatch' },
				{ name: 'Divider', href: '/showcase/atoms/divider' },
				{ name: 'Heading', href: '/showcase/atoms/heading' },
				{ name: 'Icon', href: '/showcase/atoms/icon' },
				{ name: 'Image', href: '/showcase/atoms/image' },
				{ name: 'Link', href: '/showcase/atoms/link' },
				{ name: 'Logo', href: '/showcase/atoms/logo' },
				{ name: 'Progress', href: '/showcase/atoms/progress' },
				{ name: 'Skeleton', href: '/showcase/atoms/skeleton' },
				{ name: 'Spinner', href: '/showcase/atoms/spinner' },
				{ name: 'Text', href: '/showcase/atoms/text' },
				{ name: 'Video', href: '/showcase/atoms/video' }
			]
		},
		{
			name: 'Moléculas',
			icon: '🟠',
			items: [
				{ name: 'Accordion', href: '/showcase/molecules/accordion' },
				{ name: 'Alert', href: '/showcase/molecules/alert' },
				{ name: 'Breadcrumb', href: '/showcase/molecules/breadcrumb' },
				{ name: 'Card', href: '/showcase/molecules/card' },
				{ name: 'DatePicker', href: '/showcase/molecules/datepicker' },
				{ name: 'Dropdown', href: '/showcase/molecules/dropdown' },
				{ name: 'Field', href: '/showcase/molecules/field' },
				{ name: 'FileUpload', href: '/showcase/molecules/fileupload' },
				{ name: 'GroupButton', href: '/showcase/molecules/groupbutton' },
				{ name: 'Menu', href: '/showcase/molecules/menu' },
				{ name: 'Modal', href: '/showcase/molecules/modal' },
				{ name: 'Pagination', href: '/showcase/molecules/pagination' },
				{ name: 'Rating', href: '/showcase/molecules/rating' },
				{ name: 'SearchBar', href: '/showcase/molecules/searchbar' },
				{ name: 'SearchForm', href: '/showcase/molecules/searchform' },
				{ name: 'Stepper', href: '/showcase/molecules/stepper' },
				{ name: 'Tabs', href: '/showcase/molecules/tabs' },
				{ name: 'Timeline', href: '/showcase/molecules/timeline' },
				{ name: 'Toast', href: '/showcase/molecules/toast' },
				{ name: 'Tooltip', href: '/showcase/molecules/tooltip' }
			]
		},
		{
			name: 'Organismos',
			icon: '🟢',
			items: [
				{ name: 'Calendar', href: '/showcase/organisms/calendar' },
				{ name: 'Carousel', href: '/showcase/organisms/carousel' },
				{ name: 'Chart', href: '/showcase/organisms/chart' },
				{ name: 'Dashboard', href: '/showcase/organisms/dashboard' },
				{ name: 'DataTable', href: '/showcase/organisms/datatable' },
				{ name: 'Filters', href: '/showcase/organisms/filters' },
				{ name: 'Footer', href: '/showcase/organisms/footer' },
				{ name: 'Form', href: '/showcase/organisms/form' },
				{ name: 'Gallery', href: '/showcase/organisms/gallery' },
				{ name: 'Header', href: '/showcase/organisms/header' },
				{ name: 'Hero', href: '/showcase/organisms/hero' },
				{ name: 'Navigation', href: '/showcase/organisms/navigation' },
				{ name: 'Notifications', href: '/showcase/organisms/notifications' },
				{ name: 'Settings', href: '/showcase/organisms/settings' },
				{ name: 'Sidebar', href: '/showcase/organisms/sidebar' },
				{ name: 'Table', href: '/showcase/organisms/table' },
				{ name: 'Toolbar', href: '/showcase/organisms/toolbar' },
				{ name: 'UserProfile', href: '/showcase/organisms/userprofile' }
			]
		},
		{
			name: 'Templates',
			icon: '🔵',
			items: [
				{ name: 'Admin', href: '/showcase/templates/admin' },
				{ name: 'ArticleLayout', href: '/showcase/templates/articlelayout' },
				{ name: 'Authentication', href: '/showcase/templates/authentication' },
				{ name: 'Blog', href: '/showcase/templates/blog' },
				{ name: 'Dashboard', href: '/showcase/templates/dashboard' },
				{ name: 'Documentation', href: '/showcase/templates/documentation' },
				{ name: 'Error', href: '/showcase/templates/error' },
				{ name: 'Landing', href: '/showcase/templates/landing' },
				{ name: 'Maintenance', href: '/showcase/templates/maintenance' },
				{ name: 'Profile', href: '/showcase/templates/profile' },
				{ name: 'Settings', href: '/showcase/templates/settings' }
			]
		}
	];

	let openCategories = $state(new Set(['Átomos']));

	const filteredCategories = $derived(
		categories.map((category) => ({
			...category,
			items: category.items.filter((item) =>
				item.name.toLowerCase().includes(searchQuery.toLowerCase())
			)
		}))
	);

	function toggleCategory(categoryName: string) {
		if (openCategories.has(categoryName)) {
			openCategories.delete(categoryName);
		} else {
			openCategories.add(categoryName);
		}
		openCategories = new Set(openCategories);
	}
</script>

<nav class="space-y-2 {customClass}">
	{#each filteredCategories as category}
		{#if category.items.length > 0}
			<div>
				<button
					class="flex items-center justify-between w-full p-2 hover:bg-surface-tertiary rounded transition-colors"
					onclick={() => toggleCategory(category.name)}
					aria-expanded={openCategories.has(category.name)}
				>
					<span class="flex items-center gap-2">
						<span>{category.icon}</span>
						<span class="font-medium text-text-default">{category.name}</span>
					</span>
					<span class="text-xs text-text-muted bg-surface-card px-2 py-0.5 rounded">
						{category.items.length}
					</span>
				</button>

				{#if openCategories.has(category.name)}
					<ul class="ml-4 mt-1 space-y-1">
						{#each category.items as item}
							<li>
								<a
									href={item.href}
									class="block p-2 text-sm hover:bg-surface-tertiary rounded text-text-muted hover:text-text-default transition-colors"
								>
									{item.name}
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		{/if}
	{/each}
</nav>

