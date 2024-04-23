import { useLogin } from '@/api/useLogin';
import github from '@/assets/github.svg';
import google from '@/assets/google.svg';
import { Button } from '@/components/Button';
import { DividerLabel } from '@/components/DividerLabel';
import { Input } from '@/components/Input';

export const Login = () => {
  const { mutate } = useLogin();

  const handleLoginCredentials = () => {};

  const handleLoginGitHub = () => mutate();

  const handleLoginGoogle = () => {};

  return (
    <section className="mx-auto flex h-full max-w-md flex-col items-center justify-center">
      <h1 className="mb-8 text-center text-2xl font-bold uppercase">Welcome</h1>
      <form className="flex w-full flex-col gap-8 ">
        <Input name="email" label="Email" type="email" />
        <Input name="password" label="Password" type="password" />
        <Button variant="outline" type="submit" onClick={handleLoginCredentials}>
          Login
        </Button>
        <DividerLabel title="or" />
        <Button
          className="flex gap-4 border-2 border-medium hover:border-medium hover:bg-medium hover:text-light"
          variant="outline"
          type="button"
          onClick={handleLoginGitHub}
        >
          <img className="w-5" src={github} />
          <span>Login With GitHub</span>
        </Button>
        <Button
          className="flex gap-4 border-2 border-medium hover:border-medium hover:bg-medium hover:text-light"
          variant="outline"
          type="button"
          onClick={handleLoginGoogle}
        >
          <img className="w-5" src={google} />
          <span>Login With Google</span>
        </Button>
      </form>
    </section>
  );
};
