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
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};
