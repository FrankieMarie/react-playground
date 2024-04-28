import { Task } from '@/api/tasks/types';

interface Props {
  task: Task;
}

export const Item = ({ task }: Props) => {
  return (
    <div>
      <h2>{task.title}</h2>
    </div>
  );
};
