import { Task, TaskKeys } from '@/api/tasks/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

Object.defineProperty<Task[]>(Array.prototype, 'sortTasks', {
  value: function (sortBy: TaskKeys): Task[] {
    return this.sort((a: Task, b: Task) => {
      if (sortBy === 'priority') {
        const priority = {
          High: -1,
          Medium: 0,
          Low: 1
        };

        return `${priority[a[sortBy]]}`.localeCompare(`${priority[b[sortBy]]}`);
      }

      return `${a[sortBy]}`.localeCompare(`${b[sortBy]}`);
    });
  }
});
