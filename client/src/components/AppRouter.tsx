import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import { Login } from '@/pages/Login';
import { Missing } from '@/pages/Missing';
import { Unauthorized } from '@/pages/Unauthorized';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { Layout } from './Layout';
import { Home } from '@/pages/Home';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* Private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Define a /sso-callback route that handle the OAuth redirect flow */}
        <Route
          path="/sso-callback"
          element={<AuthenticateWithRedirectCallback />}
        />

        {/* 404 not found */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};
