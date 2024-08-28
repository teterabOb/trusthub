"use client"
import { ReactNode, createContext, useContext, useState } from "react";

interface SearchParamsContextProps {
  accessToken: string | null;
  email: string | null;
  setSearchParams: (params: { accessToken: string | null; email: string | null }) => void;
}

const SearchParamsContext = createContext<SearchParamsContextProps | undefined>(undefined);

export const useSearchParamsContext = () => {
  const context = useContext(SearchParamsContext);
  if (!context) {
    throw new Error("useSearchParamsContext must be used within a SearchParamsProvider");
  }
  return context;
};

export const SearchParamsProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useState<{ accessToken: string | null; email: string | null }>({
    accessToken: null,
    email: null,
  });

  return (
    <SearchParamsContext.Provider value={{ ...searchParams, setSearchParams }}>{children}</SearchParamsContext.Provider>
  );
};
