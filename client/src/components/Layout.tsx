import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main className="bg-dark h-full p-4 transition-all sm:p-8">
      <Outlet />
    </main>
  );
};
