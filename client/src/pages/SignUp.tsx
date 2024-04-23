import { Input } from '@/components/Input';

export const SignUp = () => {
  return (
    <section className="mx-auto flex h-full max-w-md flex-col items-center justify-center">
      <h1 className="mb-8 text-center text-2xl font-bold uppercase">Sign Up</h1>
      <form className="flex w-full flex-col gap-10 ">
        <Input name="username" label="Username" type="text" />
        <Input name="email" label="Email" type="email" />
        <Input name="password" label="Password" type="password" />
      </form>
    </section>
  );
};
