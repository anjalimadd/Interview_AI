import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';
import ClientLayout from './ClientLayout';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuth = await isAuthenticated();

  if (isUserAuth) redirect('/');

  return <ClientLayout>{children}</ClientLayout>;
};

export default AuthLayout;
