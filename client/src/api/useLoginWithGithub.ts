import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '@/services';
import { UserData, useAuth } from '@/hooks/useAuth';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export const useLoginWithGithub = () => {
  const auth = useAuth();
  const nav = useNavigate();

  const loginWithGithub = async () =>
    await axiosInstance
      .get('/login/github', {
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res) => {
        return nav(res.data);
      })
      .catch((err) => console.log(err));

  return useMutation({
    mutationKey: ['githubUser'],
    mutationFn: () => loginWithGithub()
  });
};
