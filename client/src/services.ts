import { QueryClient } from '@tanstack/react-query';
import axios, { AxiosInstance } from 'axios';

export interface ServiceCollection {
  queryClient: QueryClient;
  axiosInstance: AxiosInstance;
}

const configureQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchInterval: false,
        refetchOnMount: false,
        refetchOnWindowFocus: false
      }
    }
  });
};

const configureAxios = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const configureServices = (): ServiceCollection => {
  const queryClient = configureQueryClient();
  const axiosInstance = configureAxios();

  return {
    queryClient,
    axiosInstance
  };
};
