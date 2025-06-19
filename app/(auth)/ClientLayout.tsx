'use client';

import { AuthContextProvider } from '@/context/AuthContext';
import { ReactNode } from 'react';

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContextProvider>
      <div className="auth-layout">{children}</div>
    </AuthContextProvider>
  );
};

export default ClientLayout;
