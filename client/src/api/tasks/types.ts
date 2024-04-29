import { App } from '../../../../index';
export type { App };

export interface Task {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  userId: string;
  status: TaskStatus;
  priority: TaskPriority;
}

export type TaskKeys = keyof Task;
export type Tasks = Task[];
export type TaskStatus = 'todo' | 'inProgress' | 'done';
export type TaskPriority = 'High' | 'Medium' | 'Low';
