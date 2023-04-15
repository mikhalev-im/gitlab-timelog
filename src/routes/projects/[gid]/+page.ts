import type { LoadEvent } from '@sveltejs/kit';
import { startOfDay, endOfDay, subDays } from 'date-fns';

export function load({ params, url }: LoadEvent) {
	return {
		gid: params.gid || '',
		start: url.searchParams.get('start') || startOfDay(subDays(new Date(), 1)).toISOString(),
		end: url.searchParams.get('end') || endOfDay(subDays(new Date(), 1)).toISOString()
	};
}
