import { Outlet } from 'react-router-dom';
import { Header } from './Header';

// Set the general layout across all pages
export const Layout = () => {
  return (
    <main className="h-full bg-dark transition-all">
      <Header />

      <div className="mx-auto max-w-7xl p-6 pt-8 sm:p-8">
        {/* Render nested route component */}
        <Outlet />
      </div>
    </main>
  );
};
