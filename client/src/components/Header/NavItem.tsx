import { Link } from 'react-router-dom';

interface NavItemProps {
  path: string;
  label: string;
  onClick?: () => void;
}

export const NavItem = ({ path, label }: NavItemProps) => {
  return (
    <li className="list-none">
      <Link
        to={path}
        className="text-sm font-semibold leading-6 text-light transition-all hover:text-primary"
      >
        {label}
      </Link>
    </li>
  );
};

export const NavItemMobile = ({ path, label, onClick }: NavItemProps) => {
  return (
    <li className="list-none">
      <Link
        to={path}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-light hover:text-primary"
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};

export const navItems: NavItemProps[] = [
  { path: '/components', label: 'Components' },
  { path: '/animations', label: 'Animations' },
  { path: '/blog', label: 'Blog Posts' }
];
