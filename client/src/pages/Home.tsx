import { useGetTasks } from '@/api/tasks/useGetTasks';
import { useUser } from '@clerk/clerk-react';

export const Home = () => {
  const { user } = useUser();
  const { data } = useGetTasks();
  console.log(user);
  console.log('data', data);

  return <div>Home!</div>;
};
