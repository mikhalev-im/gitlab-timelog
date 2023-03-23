<script>
	import { createClient, setContextClient } from '@urql/svelte';
	import '../app.css';

	const client = createClient({
		url: `https://gitlab.com/api/graphql`,
		fetchOptions: {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
			}
		}
	});

	setContextClient(client);
</script>

<slot />
