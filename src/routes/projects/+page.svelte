<script>
	import Panel from '$lib/components/panel.svelte';

	import { queryStore, gql, getContextClient } from '@urql/svelte';

	const projects = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				projects(membership: true) {
					nodes {
						id
						name
						avatarUrl
						description
					}
				}
			}
		`
	});
</script>

<div class="flex items-center justify-center m-4 h-screen">
	<Panel>
		{#if $projects.fetching}
			<p>Loading...</p>
		{:else if $projects.error}
			<p>Oopsie! {$projects.error.message}</p>
		{:else}
			<h1 class="text-xl font-bold text-gray-900 mb-6 px-4">Select project</h1>
			<div class="mb-4 overflow-y-auto max-h-96">
				{#each $projects.data.projects.nodes as project}
					<a
						href="./projects/timelogs?project={encodeURIComponent(project.id)}"
						class="flex gap-2 border-b p-4 hover:bg-slate-50"
					>
						{#if project.avatarUrl}
							<img src={project.avatarUrl} alt="" class="w-12 h-12 flex-shrink-0 rounded border" />
						{:else}
							<div
								class="w-12 h-12 flex-shrink-0 rounded bg-gray-100 border flex items-center justify-center text-xl text-slate-500"
							>
								{project.name.slice(0, 1).toUpperCase()}
							</div>
						{/if}
						<div>
							<p class="font-medium text-slate-700 mb-2">{project.name}</p>
							<p class="text-sm">{project.description || ''}</p>
						</div>
					</a>
				{/each}
			</div>
		{/if}
	</Panel>
</div>
