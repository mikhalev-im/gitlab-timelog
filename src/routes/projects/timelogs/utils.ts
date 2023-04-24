import { intervalToDuration, formatDuration } from 'date-fns';

export const formatSpentTime = (seconds: number) => {
	return formatDuration(intervalToDuration({ start: 0, end: seconds * 1000 }));
};
