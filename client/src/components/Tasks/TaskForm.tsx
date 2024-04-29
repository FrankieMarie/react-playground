import { FormEvent, useState } from 'react';
import { Input } from '../Input';
import Select from '../Select';
import { Task, TaskPriority, TaskStatus } from '@/api/tasks/types';
import { Button } from '../Button';
import { useUser } from '@clerk/clerk-react';

interface Props {
  task?: Task;
  onSubmit: (data: Task) => void;
}

export const TaskForm = ({ task, onSubmit }: Props) => {
  const { user } = useUser();
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');
  const [status, setStatus] = useState<TaskStatus>(task?.status || 'todo');
  const [priority, setPriority] = useState<TaskPriority>(
    task?.priority || 'Low'
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user) {
      const newTask: Task = {
        title,
        description,
        status,
        priority,
        userId: task?.userId || user?.id,
        createdAt: task?.createdAt || new Date(Date.now())
      };

      onSubmit(newTask);
    }
  };

  return (
    <form className="flex flex-col gap-6">
      <div className="flex justify-between gap-6">
        <div className="w-full">
          <label className="text-sm font-semibold">Priority</label>
          <Select
            selected={priority}
            options={['High', 'Medium', 'Low']}
            onChange={(x) => setPriority(x as TaskPriority)}
          />
        </div>
        <div className="w-full">
          <label className="text-sm font-semibold">Status</label>
          <Select
            selected={status}
            options={['todo', 'inProgress', 'done']}
            onChange={(x) => setStatus(x as TaskStatus)}
          />
        </div>
      </div>
      <Input
        name="title"
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        name="description"
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="mt-6">
        <Button type="submit" variant="default" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
};
