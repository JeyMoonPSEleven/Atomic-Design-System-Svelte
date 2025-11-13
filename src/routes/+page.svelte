<script lang="ts">
	import {
		Button,
		Input,
		Checkbox,
		Radio,
		Select,
		Slider,
		Switch,
		Avatar,
		Badge,
		ColorSwatch,
		Divider,
		Heading,
		Icon,
		Image,
		Link,
		Logo,
		Progress,
		Spinner,
		Text,
		Video,
	} from "$lib/components/01-atoms";

	import {
		Accordion,
		Alert,
		Breadcrumb,
		Card,
		DatePicker,
		Dropdown,
		Field,
		FileUpload,
		GroupButton,
		Menu,
		Modal,
		Pagination,
		Rating,
		SearchBar,
		SearchForm,
		Stepper,
		Tabs,
		Timeline,
		Toast,
		Tooltip,
	} from "$lib/components/02-molecules";

	import {
		Header,
		Footer,
		Hero,
		Navigation,
		Sidebar,
		Form,
		Table,
		Toolbar,
		Notifications,
		Calendar,
		Carousel,
		Chart,
		Dashboard,
		DataTable,
		Filters,
		Gallery,
		Settings,
		UserProfile,
	} from "$lib/components/03-organisms";

	import { ArticleLayout } from "$lib/components/04-templates";
	import { toggleTheme, theme } from "$lib/stores/theme";

	let inputValue = $state("");
	let checkboxValue = $state(false);
	let radioGroup = $state("");
	let selectValue = $state("");
	let sliderValue = $state(50);
	let switchValue = $state(false);
	let modalOpen = $state(false);
	let toastVisible = $state(false);
	let ratingValue = $state(3);
	let currentPage = $state(1);
	let dateValue = $state("");
	let stepperStep = $state(0);
</script>

{#snippet logo()}
	<a href="/" class="text-xl font-bold text-text-default"
		>Atomic Design System</a
	>
{/snippet}

{#snippet navigation()}
	<nav class="flex gap-4">
		<a href="/" class="text-primary font-semibold">Inicio</a>
	</nav>
{/snippet}

{#snippet mobileMenuButton()}
	<Button intent="ghost" size="sm">☰</Button>
{/snippet}

{#snippet mobileNavigationPanel()}
	<div class="p-4 space-y-2">
		<a href="/" class="block text-primary font-semibold">Inicio</a>
	</div>
{/snippet}

{#snippet heading()}
	<div class="flex items-center justify-between mb-8">
		<div>
			<h1 class="text-4xl font-bold text-text-default mb-2">
				Sistema de Diseño Atomic
			</h1>
			<p class="text-text-muted">
				Todos los componentes del sistema Atomic Design con sus
				variantes
			</p>
		</div>
		<Button on:click={toggleTheme} intent="secondary">
			{$theme === "dark" ? "☀️" : "🌙"} Toggle Theme
		</Button>
	</div>
{/snippet}

{#snippet content()}
	<div class="space-y-16">
		<!-- ÁTOMOS: FORMULARIOS -->
		<section id="atoms-forms" class="scroll-mt-20">
			<Heading
				level="h2"
				class="text-3xl font-bold text-text-default mb-8 pb-4 border-b border-border-default"
			>
				Átomos - Formularios
			</Heading>

			<div class="space-y-12">
				<!-- Button -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Button</Heading
					>
					<div class="space-y-4">
						<div>
							<Text class="text-sm text-text-muted mb-2"
								>Variantes de Intent:</Text
							>
							<div class="flex flex-wrap gap-3">
								<Button intent="primary">Primary</Button>
								<Button intent="secondary">Secondary</Button>
								<Button intent="danger">Danger</Button>
								<Button intent="ghost">Ghost</Button>
							</div>
						</div>
						<div>
							<Text class="text-sm text-text-muted mb-2"
								>Tamaños:</Text
							>
							<div class="flex flex-wrap gap-3 items-center">
								<Button size="sm">Small</Button>
								<Button size="md">Medium</Button>
								<Button size="lg">Large</Button>
							</div>
						</div>
					</div>
				</div>

				<!-- Input -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Input</Heading
					>
					<div class="max-w-md space-y-4">
						<Input
							placeholder="Placeholder text"
							bindValue={inputValue}
						/>
						<Input
							placeholder="Error state"
							variant="error"
							value=""
						/>
						<Input placeholder="Small" size="sm" value="" />
						<Input
							placeholder="Medium (default)"
							size="md"
							value=""
						/>
						<Input placeholder="Large" size="lg" value="" />
					</div>
				</div>

				<!-- Checkbox -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Checkbox</Heading
					>
					<div class="space-y-2">
						<label class="flex items-center gap-2">
							<Checkbox bind:checked={checkboxValue} />
							<Text>Checkbox desmarcado</Text>
						</label>
						<label class="flex items-center gap-2">
							<Checkbox checked={true} />
							<Text>Checkbox marcado</Text>
						</label>
						<label class="flex items-center gap-2">
							<Checkbox disabled />
							<Text>Checkbox deshabilitado</Text>
						</label>
					</div>
				</div>

				<!-- Radio -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Radio</Heading
					>
					<div class="space-y-2">
						<label class="flex items-center gap-2">
							<Radio group={radioGroup} value="option1" />
							<Text>Opción 1</Text>
						</label>
						<label class="flex items-center gap-2">
							<Radio group={radioGroup} value="option2" />
							<Text>Opción 2</Text>
						</label>
						<label class="flex items-center gap-2">
							<Radio group={radioGroup} value="option3" />
							<Text>Opción 3</Text>
						</label>
						<Text class="text-sm text-text-muted mt-2"
							>Seleccionado: {radioGroup || "Ninguno"}</Text
						>
					</div>
				</div>

				<!-- Select -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Select</Heading
					>
					<div class="max-w-md">
						<Select
							value={selectValue}
							onchange={(e) =>
								(selectValue = (e.target as HTMLSelectElement)
									.value)}
						>
							{#snippet children()}
								<option value="">Selecciona una opción</option>
								<option value="1">Opción 1</option>
								<option value="2">Opción 2</option>
								<option value="3">Opción 3</option>
							{/snippet}
						</Select>
						<Text class="text-sm text-text-muted mt-2"
							>Seleccionado: {selectValue || "Ninguno"}</Text
						>
					</div>
				</div>

				<!-- Slider -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Slider</Heading
					>
					<div class="max-w-md">
						<Slider bind:value={sliderValue} min={0} max={100} />
						<Text class="text-sm text-text-muted mt-2"
							>Valor: {sliderValue}</Text
						>
					</div>
				</div>

				<!-- Switch -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Switch</Heading
					>
					<div class="space-y-4">
						<div class="flex items-center gap-2">
							<Switch bind:checked={switchValue} />
							<Text>Switch desactivado</Text>
						</div>
						<div class="flex items-center gap-2">
							<Switch checked={true} />
							<Text>Switch activado</Text>
						</div>
						<div class="flex items-center gap-2">
							<Switch disabled />
							<Text>Switch deshabilitado</Text>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ÁTOMOS: VISUALES -->
		<section id="atoms-visual" class="scroll-mt-20">
			<Heading
				level="h2"
				class="text-3xl font-bold text-text-default mb-8 pb-4 border-b border-border-default"
			>
				Átomos - Visuales
			</Heading>

			<div class="space-y-12">
				<!-- Avatar -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Avatar</Heading
					>
					<div class="flex gap-4 items-center">
						<Avatar
							src="https://i.pravatar.cc/150?img=1"
							alt="Avatar 1"
						/>
						<Avatar
							src="https://i.pravatar.cc/150?img=2"
							alt="Avatar 2"
							size="lg"
						/>
						<Avatar initials="JD" />
					</div>
				</div>

				<!-- Badge -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Badge</Heading
					>
					<div class="flex flex-wrap gap-3">
						<Badge variant="default">Default</Badge>
						<Badge variant="secondary">Secondary</Badge>
						<Badge variant="success">Success</Badge>
						<Badge variant="warning">Warning</Badge>
						<Badge variant="danger">Danger</Badge>
					</div>
					<div class="flex flex-wrap gap-3 mt-4">
						<Badge size="sm">Small</Badge>
						<Badge size="md">Medium</Badge>
						<Badge size="lg">Large</Badge>
					</div>
				</div>

				<!-- ColorSwatch -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>ColorSwatch</Heading
					>
					<div class="flex gap-4 items-center">
						<div class="flex flex-col items-center gap-2">
							<ColorSwatch color="#3b82f6" />
							<Text class="text-xs">Primary</Text>
						</div>
						<div class="flex flex-col items-center gap-2">
							<ColorSwatch color="#ef4444" />
							<Text class="text-xs">Danger</Text>
						</div>
						<div class="flex flex-col items-center gap-2">
							<ColorSwatch color="#10b981" />
							<Text class="text-xs">Success</Text>
						</div>
						<div class="flex flex-col items-center gap-2">
							<ColorSwatch color="#f59e0b" />
							<Text class="text-xs">Warning</Text>
						</div>
					</div>
				</div>

				<!-- Divider -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Divider</Heading
					>
					<div class="space-y-4">
						<Text>Texto arriba</Text>
						<Divider />
						<Text>Texto abajo</Text>
					</div>
				</div>

				<!-- Heading -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Heading</Heading
					>
					<div class="space-y-2">
						<Heading level="h1">Heading 1</Heading>
						<Heading level="h2">Heading 2</Heading>
						<Heading level="h3">Heading 3</Heading>
						<Heading level="h4">Heading 4</Heading>
					</div>
				</div>

				<!-- Icon -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Icon</Heading
					>
					<div class="flex gap-4">
						<Icon name="heart" size="sm" />
						<Icon name="star" size="md" />
						<Icon name="user" size="lg" />
					</div>
				</div>

				<!-- Image -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Image</Heading
					>
					<div class="max-w-md">
						<Image
							src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
							alt="Paisaje"
							class="rounded-lg"
						/>
					</div>
				</div>

				<!-- Link -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Link</Heading
					>
					<div class="flex gap-4">
						<Link href="/">Link interno</Link>
						<Link
							href="https://svelte.dev"
							target="_blank"
							rel="noopener noreferrer">Link externo</Link
						>
					</div>
				</div>

				<!-- Logo -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Logo</Heading
					>
					<Logo>AD</Logo>
				</div>

				<!-- Progress -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Progress</Heading
					>
					<div class="max-w-md space-y-4">
						<Progress value={25} />
						<Progress value={50} />
						<Progress value={75} />
						<Progress value={100} />
					</div>
				</div>

				<!-- Spinner -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Spinner</Heading
					>
					<div class="flex gap-4">
						<Spinner size="sm" />
						<Spinner size="md" />
						<Spinner size="lg" />
					</div>
				</div>

				<!-- Text -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Text</Heading
					>
					<div class="space-y-2">
						<Text>Texto normal</Text>
						<Text variant="muted">Texto muted</Text>
						<Text variant="danger">Texto danger</Text>
						<Text size="sm">Texto pequeño</Text>
						<Text size="lg">Texto grande</Text>
					</div>
				</div>

				<!-- Video -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Video</Heading
					>
					<div class="max-w-md">
						<Video
							src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
							poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
							controls
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- MOLÉCULAS -->
		<section id="molecules" class="scroll-mt-20">
			<Heading
				level="h2"
				class="text-3xl font-bold text-text-default mb-8 pb-4 border-b border-border-default"
			>
				Moléculas
			</Heading>

			<div class="space-y-12">
				<!-- Accordion -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Accordion</Heading
					>
					<div class="max-w-2xl">
						{#snippet accordionContent1()}
							<Text>Contenido del acordeón 1</Text>
						{/snippet}
						{#snippet accordionContent2()}
							<Text>Contenido del acordeón 2</Text>
						{/snippet}
						<Accordion
							items={[
								{ title: "Item 1", content: accordionContent1 },
								{ title: "Item 2", content: accordionContent2 },
							]}
						/>
					</div>
				</div>

				<!-- Alert -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Alert</Heading
					>
					<div class="max-w-2xl space-y-4">
						<Alert variant="info" title="Información">
							Este es un mensaje informativo.
						</Alert>
						<Alert variant="success" title="Éxito">
							Operación completada exitosamente.
						</Alert>
						<Alert variant="warning" title="Advertencia">
							Ten cuidado con esta acción.
						</Alert>
						<Alert variant="danger" title="Error">
							Ha ocurrido un error.
						</Alert>
					</div>
				</div>

				<!-- Breadcrumb -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Breadcrumb</Heading
					>
					<Breadcrumb
						items={[
							{ label: "Inicio", href: "/" },
							{ label: "Componentes" },
						]}
					/>
				</div>

				<!-- Card -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Card</Heading
					>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card padding="sm">
							{#snippet header()}
								<Heading level="h4">Card Small</Heading>
							{/snippet}
							{#snippet children()}
								<Text
									>Contenido de la tarjeta con padding
									pequeño.</Text
								>
							{/snippet}
						</Card>
						<Card padding="md">
							{#snippet header()}
								<Heading level="h4">Card Medium</Heading>
							{/snippet}
							{#snippet children()}
								<Text
									>Contenido de la tarjeta con padding medio.</Text
								>
							{/snippet}
							{#snippet footer()}
								<Button size="sm">Acción</Button>
							{/snippet}
						</Card>
					</div>
				</div>

				<!-- DatePicker -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>DatePicker</Heading
					>
					<div class="max-w-md">
						<DatePicker bind:value={dateValue} />
						<Text class="text-sm text-text-muted mt-2"
							>Fecha seleccionada: {dateValue || "Ninguna"}</Text
						>
					</div>
				</div>

				<!-- Dropdown -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Dropdown</Heading
					>
					{#snippet dropdownTrigger()}
						<Button>Menú Dropdown</Button>
					{/snippet}
					<Dropdown
						trigger={dropdownTrigger}
						items={[
							{ label: "Opción 1", href: "#" },
							{
								label: "Opción 2",
								onclick: () => console.log("Opción 2"),
							},
							{ label: "Divider", divider: true },
							{ label: "Opción 3", href: "#" },
						]}
					/>
				</div>

				<!-- Field -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Field</Heading
					>
					<div class="max-w-md space-y-4">
						<Field label="Campo Normal">
							<Input placeholder="Escribe algo..." />
						</Field>
						<Field
							label="Campo con Error"
							error="Este campo es requerido"
						>
							<Input
								placeholder="Campo con error"
								variant="error"
							/>
						</Field>
					</div>
				</div>

				<!-- FileUpload -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>FileUpload</Heading
					>
					<div class="max-w-md">
						<FileUpload accept="image/*" />
					</div>
				</div>

				<!-- GroupButton -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>GroupButton</Heading
					>
					<GroupButton
						buttons={[
							{ label: "Izquierda", value: "left" },
							{ label: "Centro", value: "center" },
							{ label: "Derecha", value: "right" },
						]}
						bind:value={selectValue}
					/>
					<Text class="text-sm text-text-muted mt-2"
						>Seleccionado: {selectValue || "Ninguno"}</Text
					>
				</div>

				<!-- Menu -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Menu</Heading
					>
					<Menu
						items={[
							{ label: "Item 1", href: "#" },
							{
								label: "Item 2",
								onclick: () => console.log("Item 2"),
							},
							{ label: "Divider", divider: true },
							{ label: "Item 3", href: "#" },
						]}
					/>
				</div>

				<!-- Modal -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Modal</Heading
					>
					<Button on:click={() => (modalOpen = true)}
						>Abrir Modal</Button
					>
					<Modal
						bind:open={modalOpen}
						title="Título del Modal"
						size="md"
					>
						{#snippet children()}
							<Text
								>Este es el contenido del modal. Puedes cerrarlo
								haciendo clic fuera o en el botón de cerrar.</Text
							>
						{/snippet}
						{#snippet footer()}
							<div class="flex justify-end gap-2">
								<Button
									intent="secondary"
									on:click={() => (modalOpen = false)}
									>Cancelar</Button
								>
								<Button
									intent="primary"
									on:click={() => (modalOpen = false)}
									>Confirmar</Button
								>
							</div>
						{/snippet}
					</Modal>
				</div>

				<!-- Pagination -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Pagination</Heading
					>
					<Pagination
						{currentPage}
						totalPages={10}
						onpagechange={(page) => (currentPage = page)}
					/>
					<Text class="text-sm text-text-muted mt-2"
						>Página actual: {currentPage}</Text
					>
				</div>

				<!-- Rating -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Rating</Heading
					>
					<Rating
						value={ratingValue}
						max={5}
						onchange={(val) => (ratingValue = val)}
					/>
					<Text class="text-sm text-text-muted mt-2"
						>Valor: {ratingValue}</Text
					>
				</div>

				<!-- SearchBar -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>SearchBar</Heading
					>
					<div class="max-w-md">
						<SearchBar
							placeholder="Buscar componentes..."
							onsubmit={(value) =>
								console.log("Búsqueda:", value)}
						/>
					</div>
				</div>

				<!-- SearchForm -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>SearchForm</Heading
					>
					<div class="max-w-2xl">
						<SearchForm>
							<Input
								type="search"
								placeholder="Buscar componentes..."
							/>
						</SearchForm>
					</div>
				</div>

				<!-- Stepper -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Stepper</Heading
					>
					<div class="max-w-2xl">
						<Stepper
							steps={[
								{ label: "Paso 1", completed: stepperStep > 1 },
								{ label: "Paso 2", completed: stepperStep > 2 },
								{ label: "Paso 3", completed: stepperStep > 3 },
								{ label: "Paso 4" },
							]}
							currentStep={stepperStep}
						/>
						<div class="mt-4 flex gap-2">
							<Button
								size="sm"
								on:click={() =>
									(stepperStep = Math.max(
										0,
										stepperStep - 1,
									))}>Anterior</Button
							>
							<Button
								size="sm"
								on:click={() =>
									(stepperStep = Math.min(
										3,
										stepperStep + 1,
									))}>Siguiente</Button
							>
						</div>
					</div>
				</div>

				<!-- Tabs -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Tabs</Heading
					>
					<div class="max-w-2xl">
						{#snippet tabContent1()}
							<div class="p-4">
								<Text>Contenido de la Tab 1</Text>
							</div>
						{/snippet}
						{#snippet tabContent2()}
							<div class="p-4">
								<Text>Contenido de la Tab 2</Text>
							</div>
						{/snippet}
						{#snippet tabContent3()}
							<div class="p-4">
								<Text>Contenido de la Tab 3</Text>
							</div>
						{/snippet}
						<Tabs
							tabs={[
								{ label: "Tab 1", content: tabContent1 },
								{ label: "Tab 2", content: tabContent2 },
								{ label: "Tab 3", content: tabContent3 },
							]}
						/>
					</div>
				</div>

				<!-- Timeline -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Timeline</Heading
					>
					<div class="max-w-2xl">
						<Timeline
							items={[
								{
									title: "Evento 1",
									description: "Descripción del evento 1",
									date: "2024-01-01",
								},
								{
									title: "Evento 2",
									description: "Descripción del evento 2",
									date: "2024-02-01",
								},
								{
									title: "Evento 3",
									description: "Descripción del evento 3",
									date: "2024-03-01",
								},
							]}
						/>
					</div>
				</div>

				<!-- Toast -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Toast</Heading
					>
					<div class="space-y-4">
						<Button on:click={() => (toastVisible = true)}
							>Mostrar Toast</Button
						>
						{#if toastVisible}
							<Toast
								message="Este es un mensaje toast"
								onclose={() => (toastVisible = false)}
							/>
						{/if}
						<div class="space-y-2">
							<Toast message="Toast de éxito" variant="success" />
							<Toast message="Toast de error" variant="error" />
							<Toast
								message="Toast de advertencia"
								variant="warning"
							/>
							<Toast message="Toast informativo" variant="info" />
						</div>
					</div>
				</div>

				<!-- Tooltip -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Tooltip</Heading
					>
					<Tooltip text="Este es un tooltip">
						<Button>Pasa el mouse aquí</Button>
					</Tooltip>
				</div>
			</div>
		</section>

		<!-- ORGANISMOS -->
		<section id="organisms" class="scroll-mt-20">
			<Heading
				level="h2"
				class="text-3xl font-bold text-text-default mb-8 pb-4 border-b border-border-default"
			>
				Organismos
			</Heading>

			<div class="space-y-12">
				<!-- Header -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Header</Heading
					>
					<Header
						{logo}
						{navigation}
						{mobileMenuButton}
						{mobileNavigationPanel}
					/>
				</div>

				<!-- Footer -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Footer</Heading
					>
					<Footer>
						{#snippet children()}
							<div class="text-center text-text-muted">
								<Text>© 2024 Atomic Design System</Text>
							</div>
						{/snippet}
					</Footer>
				</div>

				<!-- Hero -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Hero</Heading
					>
					<Hero
						title="Título Hero"
						subtitle="Descripción del hero section con llamada a la acción."
						primaryAction={{
							label: "Acción Principal",
							onclick: () => console.log("Principal"),
						}}
						secondaryAction={{
							label: "Acción Secundaria",
							onclick: () => console.log("Secundaria"),
						}}
					/>
				</div>

				<!-- Navigation -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Navigation</Heading
					>
					<Navigation
						items={[
							{ label: "Inicio", href: "/", active: true },
							{ label: "Acerca", href: "#" },
						]}
					/>
				</div>

				<!-- Sidebar -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Sidebar</Heading
					>
					<div
						class="border border-border-default rounded-lg max-w-xs"
					>
						{#snippet sidebarLogo()}
							<Text class="font-bold text-lg">Menú</Text>
						{/snippet}
						<Sidebar
							logo={sidebarLogo}
							items={[
								{ label: "Item 1", href: "#" },
								{ label: "Item 2", href: "#" },
								{ label: "Divider", divider: true },
								{ label: "Item 3", href: "#" },
							]}
						/>
					</div>
				</div>

				<!-- Form -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Form</Heading
					>
					<div class="max-w-md">
						{#snippet formFields()}
							<Field label="Nombre">
								<Input placeholder="Tu nombre" />
							</Field>
							<Field label="Email">
								<Input
									type="email"
									placeholder="tu@email.com"
								/>
							</Field>
							<Field label="Mensaje">
								<Input placeholder="Tu mensaje" />
							</Field>
							<Button intent="primary" type="submit"
								>Enviar</Button
							>
						{/snippet}
						<Form
							onsubmit={(e) => {
								e.preventDefault();
								console.log("Formulario enviado");
							}}
						>
							{@render formFields()}
						</Form>
					</div>
				</div>

				<!-- Table -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Table</Heading
					>
					<div class="max-w-2xl">
						<Table
							headers={["Nombre", "Email", "Rol"]}
							rows={[
								["Juan", "juan@example.com", "Admin"],
								["María", "maria@example.com", "Usuario"],
							]}
						/>
					</div>
				</div>

				<!-- Toolbar -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Toolbar</Heading
					>
					<Toolbar
						title="Herramientas"
						actions={[
							{
								label: "Nuevo",
								intent: "primary",
								onclick: () => console.log("Nuevo"),
							},
							{
								label: "Editar",
								intent: "secondary",
								onclick: () => console.log("Editar"),
							},
							{
								label: "Eliminar",
								intent: "danger",
								onclick: () => console.log("Eliminar"),
							},
						]}
					/>
				</div>

				<!-- Notifications -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Notifications</Heading
					>
					<Notifications
						notifications={[
							{
								id: "1",
								message: "Notificación informativa",
								variant: "info",
							},
							{
								id: "2",
								message: "Operación exitosa",
								variant: "success",
							},
							{
								id: "3",
								message: "Advertencia importante",
								variant: "warning",
							},
						]}
						onclose={(id) => console.log("Cerrar:", id)}
					/>
				</div>

				<!-- Calendar -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Calendar</Heading
					>
					<div class="max-w-md">
						<Calendar
							onselect={(date) =>
								console.log("Fecha seleccionada:", date)}
						/>
					</div>
				</div>

				<!-- Carousel -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Carousel</Heading
					>
					<div class="max-w-2xl">
						{#snippet carouselItem1()}
							<div
								class="h-64 bg-primary flex items-center justify-center text-text-on-primary"
							>
								<Text size="lg">Slide 1</Text>
							</div>
						{/snippet}
						{#snippet carouselItem2()}
							<div
								class="h-64 bg-danger flex items-center justify-center text-text-on-danger"
							>
								<Text size="lg">Slide 2</Text>
							</div>
						{/snippet}
						{#snippet carouselItem3()}
							<div
								class="h-64 bg-primary flex items-center justify-center text-text-on-primary"
							>
								<Text size="lg">Slide 3</Text>
							</div>
						{/snippet}
						<Carousel
							items={[
								carouselItem1,
								carouselItem2,
								carouselItem3,
							]}
						/>
					</div>
				</div>

				<!-- Chart -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Chart</Heading
					>
					<div class="max-w-2xl space-y-4">
						<Chart
							type="bar"
							data={[
								{ label: "Ene", value: 20 },
								{ label: "Feb", value: 35 },
								{ label: "Mar", value: 15 },
								{ label: "Abr", value: 40 },
							]}
						/>
						<Chart
							type="line"
							data={[
								{ label: "Ene", value: 20 },
								{ label: "Feb", value: 35 },
								{ label: "Mar", value: 15 },
								{ label: "Abr", value: 40 },
							]}
						/>
					</div>
				</div>

				<!-- DataTable -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>DataTable</Heading
					>
					<div class="max-w-2xl">
						<DataTable
							headers={["Nombre", "Email", "Rol"]}
							rows={[
								["Juan", "juan@example.com", "Admin"],
								["María", "maria@example.com", "Usuario"],
								["Pedro", "pedro@example.com", "Usuario"],
								["Ana", "ana@example.com", "Admin"],
							]}
							{currentPage}
							totalPages={2}
							onpagechange={(page) => (currentPage = page)}
						/>
					</div>
				</div>

				<!-- Filters -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Filters</Heading
					>
					<div class="max-w-2xl">
						<Filters
							fields={[
								{ label: "Nombre", type: "text" },
								{
									label: "Categoría",
									type: "select",
									options: [
										{ label: "Todas", value: "" },
										{ label: "Categoría 1", value: "cat1" },
										{ label: "Categoría 2", value: "cat2" },
									],
								},
								{ label: "Fecha", type: "date" },
							]}
							onchange={(filters) =>
								console.log("Filtros:", filters)}
							onreset={() => console.log("Reset")}
						/>
					</div>
				</div>

				<!-- Gallery -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Gallery</Heading
					>
					<div class="max-w-2xl">
						<Gallery
							columns={3}
							items={[
								{
									src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300",
									alt: "Imagen 1",
									caption: "Imagen 1",
								},
								{
									src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300",
									alt: "Imagen 2",
									caption: "Imagen 2",
								},
								{
									src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300",
									alt: "Imagen 3",
									caption: "Imagen 3",
								},
							]}
						/>
					</div>
				</div>

				<!-- Settings -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Settings</Heading
					>
					<div class="max-w-2xl">
						{#snippet settingsGeneral()}
							<Card>
								{#snippet children()}
									<Text>Configuración general</Text>
								{/snippet}
							</Card>
						{/snippet}
						{#snippet settingsAccount()}
							<Card>
								{#snippet children()}
									<Text>Configuración de cuenta</Text>
								{/snippet}
							</Card>
						{/snippet}
						<Settings
							sections={[
								{ label: "General", content: settingsGeneral },
								{ label: "Cuenta", content: settingsAccount },
							]}
						/>
					</div>
				</div>

				<!-- UserProfile -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>UserProfile</Heading
					>
					<div class="max-w-md">
						<UserProfile
							name="Juan Pérez"
							email="juan@example.com"
							initials="JP"
							actions={[
								{
									label: "Editar",
									onclick: () => console.log("Editar"),
								},
								{
									label: "Eliminar",
									onclick: () => console.log("Eliminar"),
								},
							]}
						/>
					</div>
				</div>

				<!-- Dashboard -->
				<div>
					<Heading
						level="h3"
						class="text-xl font-semibold text-text-default mb-4"
						>Dashboard</Heading
					>
					<div class="max-w-4xl">
						<Dashboard>
							{#snippet children()}
								<Card>
									{#snippet children()}
										<Text>Widget 1</Text>
									{/snippet}
								</Card>
								<Card>
									{#snippet children()}
										<Text>Widget 2</Text>
									{/snippet}
								</Card>
								<Card>
									{#snippet children()}
										<Text>Widget 3</Text>
									{/snippet}
								</Card>
							{/snippet}
						</Dashboard>
					</div>
				</div>
			</div>
		</section>

		<!-- PLANTILLAS -->
		<section id="templates" class="scroll-mt-20">
			<Heading
				level="h2"
				class="text-3xl font-bold text-text-default mb-8 pb-4 border-b border-border-default"
			>
				Plantillas
			</Heading>

			<div class="space-y-8">
				<Text class="text-text-muted">
					Las plantillas son estructuras de página completas. Esta
					página ya está usando la plantilla <code
						class="bg-surface-card px-2 py-1 rounded"
						>ArticleLayout</code
					>. Otras plantillas disponibles incluyen: Admin,
					Authentication, Blog, Dashboard, Documentation, Error,
					Landing, Maintenance, Profile, y Settings.
				</Text>
			</div>
		</section>
	</div>
{/snippet}

{#snippet footer()}
	<div class="text-center text-text-muted py-8">
		<Text>Sistema de Diseño Atomic - SvelteKit + Tailwind v4</Text>
		<Text class="text-sm mt-2"
			>Total: 71 componentes organizados en 4 niveles</Text
		>
	</div>
{/snippet}

<ArticleLayout
	{logo}
	{navigation}
	{mobileMenuButton}
	{mobileNavigationPanel}
	{heading}
	{content}
	{footer}
/>
