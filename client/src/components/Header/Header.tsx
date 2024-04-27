import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextAlignJustifyIcon } from '@radix-ui/react-icons';
import { Rocket } from '@/assets/rocket';
import { useAuth, useUser } from '@clerk/clerk-react';
import { Button } from '../Button';
import { Mobile } from './Mobile';
import { NavItem, navItems } from './NavItem';
import { Avatar } from '../Avatar';

export const Header = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-medium bg-opacity-35 ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex sm:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">logo</span>
            <Rocket className="fill-current text-secondary hover:text-primary" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-light"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <TextAlignJustifyIcon
              className="h-6 w-6 text-secondary hover:text-primary"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden gap-8 sm:flex">
          {navItems.map((item) => (
            <NavItem key={item.path} path={item.path} label={item.label} />
          ))}
        </ul>

        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end sm:gap-4">
          <Avatar image={user?.imageUrl!} />
          <Button
            variant="link"
            onClick={() => signOut()}
            className={`p-0 text-sm font-semibold leading-6 text-light hover:text-primary ${!user && 'pointer-events-none invisible'}`}
          >
            Logout <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <ul className="flex flex-col gap-8">
        <Mobile isOpen={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      </ul>
    </header>
  );
};
