import { useUser } from '@clerk/clerk-react';

export const Home = () => {
  const { user } = useUser();
  console.log(user);
  // const { data } = useGitHubUser();
  // console.log('data', data);
  return <div>Home!</div>;
};
