import { Task, TaskKeys, Tasks } from '@/api/tasks/types';
import Select from '../Select';
import { Item } from './Item';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import { TaskForm } from './TaskForm';
import { useUpdateTask } from '@/api/tasks/useUpdateTask';
import { TASKS_QUERY_KEY } from '@/api/tasks/useGetTasks';
import { useServices } from '@/hooks/useServices';

interface Props {
  title: string;
  tasks: Tasks;
  selectedSort: TaskKeys;
  onChangeSort: (value: TaskKeys) => void;
}

export const Column = ({ title, tasks, selectedSort, onChangeSort }: Props) => {
  const { mutateAsync } = useUpdateTask();
  const { queryClient } = useServices();
  const [isEditing, setEditing] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleSubmit = (data: Task) => {
    mutateAsync(data).then(() => {
      setEditing(false);
      queryClient.refetchQueries({ queryKey: [TASKS_QUERY_KEY] });
    });
  };

  const handleClose = () => {
    setEditing(false);
    setSelectedTask(null);
  };

  useEffect(() => {
    if (selectedTask) {
      setEditing(true);
    }
  }, [selectedTask]);

  const renderItems = () =>
    !tasks ? (
      <p>Fetching Tasks...</p>
    ) : (
      tasks.map((x) => (
        <Item key={x.id} task={x} onEdit={(task) => setSelectedTask(task)} />
      ))
    );

  return (
    <section className="rounded-md border border-medium p-4">
      <div className="flex items-baseline gap-6">
        <h1 className="mb-4 text-2xl font-semibold text-secondary">{title}</h1>
        <Select
          options={['priority', 'title']}
          selected={selectedSort}
          onChange={(value) => onChangeSort(value as TaskKeys)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4">{renderItems()}</div>

      <Modal title="Edit Task" isOpen={isEditing} setOpen={handleClose}>
        <TaskForm task={selectedTask} onSubmit={handleSubmit} />
      </Modal>
    </section>
  );
};
