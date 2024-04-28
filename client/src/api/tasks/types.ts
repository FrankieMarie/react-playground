export interface Task {
  id: string;
  title: string;
  description: string;
  order: number;
  status: TaskStatus;
  priority: TaskPriority;
}

export type TaskKeys = keyof Task;
export type Tasks = Task[];
export type TaskStatus = 'todo' | 'inProgress' | 'done';
export type TaskPriority = 'High' | 'Medium' | 'Low';
