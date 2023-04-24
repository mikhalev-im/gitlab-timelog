import type { LoadEvent } from '@sveltejs/kit';
import { startOfDay, endOfDay, subDays } from 'date-fns';

export function load({ url }: LoadEvent) {
	return {
		gid: url.searchParams.get('project') || '',
		start: url.searchParams.get('start') || startOfDay(subDays(new Date(), 1)).toISOString(),
		end: url.searchParams.get('end') || endOfDay(subDays(new Date(), 1)).toISOString()
	};
}
