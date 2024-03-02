'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'cursor-default bg-blue-400 hover:bg-blue-400':
                  pathname === link.href,
                'cursor-pointer hover:bg-sky-100 hover:text-blue-600':
                  pathname !== link.href,
              },
            )}
          >
            <LinkIcon
              className={clsx('w-6', {
                'text-white': pathname === link.href,
              })}
            />
            <p
              className={clsx('hidden md:block', {
                'text-white': pathname === link.href,
              })}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
