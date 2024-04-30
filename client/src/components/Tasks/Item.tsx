import { Task } from '@/api/tasks/types';
import { Pencil1Icon } from '@radix-ui/react-icons';

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
}

export const Item = ({ task, onEdit }: Props) => {
  const priority = task.priority;

  return (
    <div className="relative rounded-md bg-medium bg-opacity-50 p-4">
      <button
        onClick={() => onEdit(task)}
        className="absolute right-2 top-2 text-secondary transition-all hover:text-primary"
      >
        <Pencil1Icon />
      </button>
      <h2 className="mb-2">{task.title}</h2>
      <p className="text-sm">{task.description}</p>

      <div
        className={`mt-2 w-max rounded-full bg-opacity-35 px-2 py-1 text-xs font-semibold text-light ${priority === 'High' ? 'bg-red-700' : priority === 'Medium' ? 'bg-yellow-600' : 'bg-green-600'}`}
      >
        {task.priority}
      </div>
    </div>
  );
};
