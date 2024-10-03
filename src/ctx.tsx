import type { ReactNode } from 'react';
import React, { createContext, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '@/stores/authStore'; // userState의 경로 확인

interface User {
  id: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useRecoilState<User | null>(userState);

  useEffect(() => {
    if (!user) {
      const authenticatedUser: User = { id: '1', name: '인증된 사용자' };
      setUser(authenticatedUser);
    }
  }, [user, setUser]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
