'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SearchContext = createContext<any>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState('');
  const pathname = usePathname();

  // detect username from URL
  useEffect(() => {
    const match = pathname.match(/^\/user\/([^\/]+)$/);
    if (match) {
      setUsername(match[1]);
    }
  }, [pathname]);

  return (
    <SearchContext.Provider value={{ username, setUsername }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);
