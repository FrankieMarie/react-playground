import { useQuery } from '@tanstack/react-query';
import { Tasks } from './types';
import { useServices } from '@/hooks/useServices';

export const TASKS_QUERY_KEY = 'tasks';

export const useGetTasks = () => {
  const { axiosInstance } = useServices();

  // TODO: fetch tasks by userId
  const fetchTasks = () =>
    axiosInstance.get<Tasks>('/tasks').then((res) => res.data);

  return useQuery<Tasks, Error>({
    queryKey: [TASKS_QUERY_KEY],
    queryFn: fetchTasks
  });
};
