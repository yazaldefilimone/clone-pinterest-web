import React, { ReactNode } from "react";
import { useTitle } from "../../hooks/useTitle";
import { GridColumns } from "../GridColumns";
import { HomeComtainer } from "../HomeContainer";

interface HomeProps {
  children?: ReactNode;
  initializeValue: number;
  classe?: boolean;
}

export function Home({ initializeValue, classe }: HomeProps) {
  const { titles } = useTitle();
  return (
    <>
      {titles.map((value, index) => {
        return (
          <HomeComtainer key={index} classe="grids">
            <GridColumns isOpen={classe} />
          </HomeComtainer>
        );
      })}
    </>
  );
}
