<script>
  import { queryStore, gql, getContextClient } from '@urql/svelte';
  import { intervalToDuration, formatDuration } from 'date-fns';

  export let data;

  const formatSpentTime = (seconds) => {
    return formatDuration(intervalToDuration({ start: 0, end: seconds * 1000 }));
  }

  const timelogs = queryStore({
		client: getContextClient(),
		query: gql`
			query {
				timelogs(startDate:"${data.start}", endDate:"${data.end}", projectId: "${data.gid}") {
          nodes{
            issue{ id, title },
            user { id, name },
            spentAt,
            timeSpent,
          }
        }
			}
		`
	});

  let logsByUser;

  timelogs.subscribe((value) => {
    if (value.fetching || value.error) {
      logsByUser = {};
      return;
    }

    logsByUser = value.data.timelogs.nodes.reduce((result, timelog) => {
      const { user, ...rest } = timelog;

      if (!result[user.id]) {
        result[user.id] = { ...user, timelogs: [], totalSpent: 0 };
      }

      result[user.id].timelogs.push(rest);
      result[user.id].totalSpent += rest.timeSpent;

      return result;
    }, {});
  });


</script>

{#if $timelogs.fetching}
  <p>Loading...</p>
{:else if $timelogs.error}
  <p>Oops...</p>
{:else}
  <div class="flex justify-center items-center">
    <div class="rounded-lg border bg-white p-6">
      <input type="date" name="start" value="{data.start}">
    <input type="date" name="end" value="{data.end}">
    {#each Object.values(logsByUser) as user}
      <div class="px-4 py-6">
        <h2 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900">{user.name} ({formatSpentTime(user.totalSpent)})</h2>
        <table class="text-sm font-light">
          <thead class="border-b font-medium">
            <tr>
              <th scope="col" class="px-6 py-2">Spent</th>
              <th scope="col" class="px-6 py-2">Issue</th>
              <th scope="col" class="px-6 py-2">Spent At</th>
            </tr>
          </thead>
          <tbody>
            {#each user.timelogs as timelog}
            <tr class="border-b">
              <td class="whitespace-nowrap px-6 py-2">{formatSpentTime(timelog.timeSpent)}</td>
              <td class="whitespace-nowrap px-6 py-2">{timelog.issue.title}</td>
              <td class="whitespace-nowrap px-6 py-2">{timelog.spentAt}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/each}
    </div>
  </div>


{/if}
