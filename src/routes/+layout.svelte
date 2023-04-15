<script>
	import { browser } from '$app/environment';
	import { createClient, setContextClient } from '@urql/svelte';
	import '../app.css';

	const client = createClient({
		url: `https://gitlab.com/api/graphql`,
		fetchOptions: () => {
			const token = (browser && localStorage.getItem('accesstoken')) || '';
			return {
				headers: {
					Authorization: `Bearer ${token}`
				}
			};
		}
	});

	setContextClient(client);
</script>

<slot />
