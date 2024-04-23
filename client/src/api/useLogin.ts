import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/services';
import { useAuth } from '@/hooks/useAuth';

export const useLogin = () => {
  const auth = useAuth();

  const handleLoginGitHub = () =>
    axiosInstance.post('/auth/github').then((res) => {
      console.log(res);
    });

  return useMutation({
    mutationKey: ['loginGitHub'],
    mutationFn: () => handleLoginGitHub()
  });
};
