import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '@clerk/clerk-react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import github from '@/assets/github.svg';
import google from '@/assets/google.svg';
import { Button } from '@/components/Button';
import { DividerLabel } from '@/components/DividerLabel';
import { Input } from '@/components/Input';

export const Login = () => {
  const nav = useNavigate();
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInCedentials = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password
      });

      if (completeSignIn.status === 'complete') {
        await setActive({ session: completeSignIn.createdSessionId });
        nav('/');
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const signInWith = (strategy: Strategy) => {
    return signIn?.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/'
    });
  };

  return (
    <section className="mx-auto flex max-w-md translate-y-1/2 flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col gap-6 rounded-lg bg-medium bg-opacity-15 p-8">
        <h1 className="text-center text-2xl font-bold uppercase">Welcome</h1>
        <form className="flex flex-col gap-8">
          {/* login with credentials */}
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
          />
          <Button variant="outline" type="submit" onClick={signInCedentials}>
            Login
          </Button>
        </form>

        <DividerLabel title="or" />

        {/* login with github */}
        <Button
          className="flex w-full gap-4 border-2 border-medium hover:border-medium hover:bg-medium hover:text-light"
          variant="outline"
          type="button"
          onClick={() => signInWith(GITHUB)}
        >
          <img className="w-5" src={github} />
          <span>Login With GitHub</span>
        </Button>

        {/* login with google */}
        <Button
          className="flex w-full gap-4 border-2 border-medium hover:border-medium hover:bg-medium hover:text-light"
          variant="outline"
          type="button"
          onClick={() => signInWith(GOOGLE)}
        >
          <img className="w-5" src={google} />
          <span>Login With Google</span>
        </Button>
      </div>

      <div className="flex flex-col">
        <Button variant="link" onClick={() => nav('/sign-up')}>
          Create account <ArrowRightIcon />
        </Button>
        <Button variant="link">
          Forgot password <ArrowRightIcon />
        </Button>
      </div>
    </section>
  );
};

const GITHUB = 'oauth_github' as const;
const GOOGLE = 'oauth_google' as const;
type Strategy = typeof GITHUB | typeof GOOGLE;
