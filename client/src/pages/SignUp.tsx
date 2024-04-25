import { useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const nav = useNavigate();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress: email,
        password
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
      setVerifying(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code
      });

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId });
        nav('/login');
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <section className="mx-auto flex h-full max-w-md flex-col items-center justify-center">
      <h1 className="mb-8 text-center text-2xl font-bold uppercase">Sign Up</h1>
      {!verifying && (
        <form>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            label="Email"
            type="email"
            autoComplete="off"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
          />
          <Input
            onChange={(e) => setMatchPassword(e.target.value)}
            name="confirmPassword"
            label="Confirm Password"
            type="confirmPassword"
          />
          <Button variant="outline" type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>
        </form>
      )}

      {verifying && (
        <form>
          <Input
            value={code}
            name="code"
            label="Code..."
            onChange={(e) => setCode(e.target.value)}
          />
          <Button type="button" onClick={handleVerify}>
            Verify Email
          </Button>
        </form>
      )}
    </section>
  );
};
