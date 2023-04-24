<script>
	import Panel from '$lib/components/panel.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	let token = (browser && localStorage.getItem('accesstoken')) || '';
	const onSubmit = (e) => {
		e.preventDefault();

		localStorage.setItem('accesstoken', token);

		const url =
			location.pathname === '/'
				? new URL('/projects', location.origin)
				: new URL(`${location.pathname}/projects`, location.origin);
		goto(url.href);
	};
</script>

<div class="flex items-center justify-center h-screen">
	<Panel>
		<h1 class="text-xl font-bold text-gray-900 mb-6">GitLab timelog analyzer</h1>
		<form on:submit={onSubmit}>
			<div class="mb-6">
				<label for="token" class="block mb-2 text-sm font-medium text-gray-900"
					>Your GitLab token</label
				>
				<input
					id="token"
					type="password"
					required
					placeholder="••••••••"
					bind:value={token}
					class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"
				/>
			</div>
			<button
				type="submit"
				class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4"
				>Sign in</button
			>
		</form>
	</Panel>
</div>
