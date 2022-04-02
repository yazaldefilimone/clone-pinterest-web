import React, { useContext } from "react";

import { TitlesContext } from "../../context/Titles";

interface IUseTitle {
  titles: Array<String>;
  setTitles: React.Dispatch<React.SetStateAction<String[]>>;
}

export const useTitle = () => {
  const context: any = useContext(TitlesContext);
  // if (context) return console.log("usa o contexto do provaider");
  const { titles, setTitles }: IUseTitle = context;

  return { titles, setTitles };
};
