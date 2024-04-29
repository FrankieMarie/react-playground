import { useGetTasks } from '@/api/tasks/useGetTasks';
import { Button } from '@/components/Button';
import Modal from '@/components/Modal';
import { List } from '@/components/Tasks';
import { TaskForm } from '@/components/Tasks/TaskForm';
import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';

export const Home = () => {
  const { user } = useUser();
  const { data } = useGetTasks();
  const [addTaskOpen, setAddTaskOpen] = useState(false);

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
      <Modal
        isOpen={addTaskOpen}
        setOpen={setAddTaskOpen}
        title="Add New Task"
        closeButtonText="Submit"
      >
        <TaskForm />
      </Modal>
    </div>
  );
};
