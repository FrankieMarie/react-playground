import { Dialog } from '@headlessui/react';
import { ExitIcon } from '@radix-ui/react-icons';
import { NavItemMobile, navItems } from './NavItem';
import { Link } from 'react-router-dom';
import { Rocket } from '@/assets/rocket';
import { Button } from '../Button';
import { useAuth, useUser } from '@clerk/clerk-react';
import { HorizontalDivider } from '../Divider';

interface Props {
  isOpen: boolean;
  setOpen: (x: boolean) => void;
}

export const Mobile = ({ isOpen, setOpen }: Props) => {
  const { signOut } = useAuth();
  const { user } = useUser();
  const handleClose = () => setOpen(false);

  return (
    <Dialog as="div" className="lg:hidden" open={isOpen} onClose={handleClose}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-medium px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-medium/10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">logo</span>
            <Rocket className="fill-current text-secondary hover:text-primary" />
          </Link>

          {/* Close Mobile Menu button */}
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-light"
            onClick={handleClose}
          >
            <span className="sr-only">Close menu</span>
            <ExitIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Nav Items */}
        <div className="mt-6 flow-root">
          <div className="space-y-2 py-6">
            {navItems.map((item) => (
              <NavItemMobile
                key={item.path}
                path={item.path}
                label={item.label}
                onClick={handleClose}
              />
            ))}
          </div>

          <HorizontalDivider />

          {user && (
            <Button
              variant="link"
              onClick={() => signOut()}
              className="mt-4 p-0 text-sm font-semibold leading-6 text-light hover:text-primary"
            >
              Logout <span aria-hidden="true">&rarr;</span>
            </Button>
          )}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
