import { useState } from 'react';
import { Task } from '@/api/tasks/types';
import { useCreateTask } from '@/api/tasks/useCreateTask';
import { useGetTasks } from '@/api/tasks/useGetTasks';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { List } from '@/components/Tasks';
import { TaskForm } from '@/components/Tasks/TaskForm';

export const Home = () => {
  const { data } = useGetTasks();
  const { mutateAsync } = useCreateTask();
  const [addTaskOpen, setAddTaskOpen] = useState(false);

  const handleSubmit = (data: Task) => {
    mutateAsync(data).then(() => setAddTaskOpen(false));
  };

  return (
    <div className="flex h-full flex-col overflow-auto">
      <Button
        className="w-max"
        variant="outline"
        onClick={() => setAddTaskOpen(true)}
      >
        Add Task
      </Button>
      <List tasks={data} />
      <Modal title="Add New Task" isOpen={addTaskOpen} setOpen={setAddTaskOpen}>
        <TaskForm onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};
