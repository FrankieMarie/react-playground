export interface Task {
  id: string;
  title: string;
  description: string;
  order: number;
  status: TaskStatus;
  priority: 'High' | 'Medium' | 'Low';
}

export type Tasks = Task[];
export type TaskStatus = 'todo' | 'inProgress' | 'done';
