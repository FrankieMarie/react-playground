export interface Task {
  id: string;
  title: string;
  description: string;
  order: number;
  priority: 'High' | 'Medium' | 'Low';
}

export type Tasks = Task[];
