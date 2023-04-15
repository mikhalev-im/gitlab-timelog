export interface TimelogNode {
	issue: {
		title: string;
		webUrl: string;
	};
	user: {
		id: string;
		name: string;
	};
	spentAt: string;
	timeSpent: number;
}

export interface UserTimelog {
	id: string;
	name: string;
	timelogs: {
		spentAt: string;
		timeSpent: number;
		issue: {
			title: string;
			webUrl: string;
		};
	}[];
	totalSpent: number;
}
