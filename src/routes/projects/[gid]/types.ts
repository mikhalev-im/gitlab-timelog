export interface LogsByUser {
  id: string;
  name: string;
  timelogs: {
    spentAt: string;
    timeSpent: number;
    issue: {
      id: string;
      title: string;
    };
  }[];
}