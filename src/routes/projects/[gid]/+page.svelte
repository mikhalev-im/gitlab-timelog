<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { queryStore, gql, getContextClient } from '@urql/svelte';
	import { format } from 'date-fns';
	import { formatSpentTime } from './utils';
	import type { UserTimelog, TimelogNode } from './types.js';

	export let data;

	if (
		browser &&
		(data.start !== $page.url.searchParams.get('start') ||
			data.end !== $page.url.searchParams.get('end'))
	) {
		let query = new URLSearchParams($page.url.searchParams.toString());
		query.set('start', data.start);
		query.set('end', data.end);
		goto(`?${query.toString()}`);
	}

	const timelogs = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				timelogs(startTime:"${data.start}", endTime:"${data.end}", projectId: "${data.gid}") {
          nodes{
            issue{ id, title, webUrl },
            user { id, name },
            spentAt,
            timeSpent,
          }
        }
			}
		`
	});

	let logsByUser: Record<string, UserTimelog>;

	timelogs.subscribe((value) => {
		if (value.fetching || value.error) {
			logsByUser = {};
			return;
		}

		logsByUser = value.data.timelogs.nodes.reduce(
			(result: Record<string, UserTimelog>, timelog: TimelogNode) => {
				const { user, ...rest } = timelog;

				if (!result[user.id]) {
					result[user.id] = { ...user, timelogs: [], totalSpent: 0 };
				}

				result[user.id].timelogs.push(rest);
				result[user.id].totalSpent += rest.timeSpent;

				return result;
			},
			{}
		);
	});
</script>

<div class="flex justify-center items-center m-4">
	<div class="rounded-lg border bg-white p-6 w-2/3">
		<p class="px-10"><a class="hover:text-blue-500" href="/projects">Back to projects</a></p>

		{#if $timelogs.fetching}
			<p class="px-10 py-6">Loading...</p>
		{:else if $timelogs.error}
			<p class="px-10 py-6">Oops...</p>
		{:else}
			{#if !Object.keys(logsByUser).length}
				<p class="px-10 py-6">No timelogs in given time period</p>
			{/if}
			{#each Object.values(logsByUser) as user}
				<div class="px-4 py-6">
					<h2 class="mb-4 text-xl font-extrabold leading-none tracking-tight px-6 text-gray-900">
						{user.name} ({formatSpentTime(user.totalSpent)})
					</h2>
					<table class="text-sm font-light w-full table-fixed">
						<thead class="border-b font-medium text-left">
							<tr>
								<th scope="col" class="px-6 py-2 w-36">Spent At</th>
								<th scope="col" class="px-6 py-2 w-36">Spent</th>
								<th scope="col" class="px-6 py-2">Issue</th>
							</tr>
						</thead>
						<tbody>
							{#each user.timelogs as timelog}
								<tr class="border-b">
									<td class="whitespace-nowrap px-6 py-2"
										>{format(new Date(timelog.spentAt), 'dd MMM HH:mm')}</td
									>
									<td class="whitespace-nowrap px-6 py-2">{formatSpentTime(timelog.timeSpent)}</td>
									<td class="whitespace-nowrap px-6 py-2 max-w-md truncate"
										><a class="hover:text-blue-500" href={timelog.issue.webUrl}
											>{timelog.issue.title}</a
										></td
									>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/each}
		{/if}
	</div>
</div>
