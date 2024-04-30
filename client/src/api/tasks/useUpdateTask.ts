import { treaty } from '@elysiajs/eden';
import { useMutation } from '@tanstack/react-query';
import { App, Task } from './types';

export const useUpdateTask = () => {
  const app = treaty<App>('localhost:3000');

  const updateTask = (task: Task) => app.task.update.put(task);

  return useMutation({
    mutationKey: ['updateTask'],
    mutationFn: (task: Task) => updateTask(task)
  });
};
