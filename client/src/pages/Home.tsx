import { useGetTasks } from '@/api/tasks/useGetTasks';
import { Button } from '@/components/Button';
import { List } from '@/components/Tasks';
import { useUser } from '@clerk/clerk-react';

export const Home = () => {
  const { user } = useUser();
  const { data } = useGetTasks();
  console.log(user);
  console.log('data', data);

  return (
    <div className="flex h-full flex-col overflow-auto">
      <Button className="w-max" variant="outline">
        Add Task
      </Button>
      <List tasks={data} />
    </div>
  );
};
