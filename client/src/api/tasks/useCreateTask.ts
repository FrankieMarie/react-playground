import { treaty } from '@elysiajs/eden';
import { useMutation } from '@tanstack/react-query';
import { App, Task } from './types';

export const useCreateTask = () => {
  const app = treaty<App>('localhost:3000');

  const newTask = (task: Task) => app.task.new.post(task);

  return useMutation({
    mutationKey: ['newTask'],
    mutationFn: (task: Task) => newTask(task)
  });
};
