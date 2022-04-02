import React, { ReactNode, createContext, useState } from "react";

interface TitlesProps {
  children: ReactNode;
}
type TitlesPropsContext = {
  title: Array<String>;
  setTitle: React.Dispatch<React.SetStateAction<String[]>>;
};

export const TitlesContext = createContext({});

export const TitlesProvaider = ({ children }: TitlesProps) => {
  const [titles, setTitles] = useState([
    "home decoridea",
    "next look oufit",
    "Halloween idea",
    "weeknight dinner idea",
  ]);

  return (
    <TitlesContext.Provider value={{ titles, setTitles }}>
      {children}
    </TitlesContext.Provider>
  );
};
