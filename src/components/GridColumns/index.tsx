import React, { Fragment, ReactNode, useEffect } from "react";

import { Element, Column } from "./styles";

interface GridColumnsProps {
  children?: ReactNode;
  isOpen?: boolean;
  classe?: boolean;
}

export const GridColumns = ({ classe, isOpen }: GridColumnsProps) => {
  const elementsComponent = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];

  return (
    <Fragment>
      {elementsComponent.map((value, index) => {
        return (
          <Column key={index} className="Columns animate-before">
            {value.map((value, index) => {
              return (
                <Element key={index} className={classe ? "" : ""}></Element>
              );
            })}
          </Column>
        );
      })}
    </Fragment>
  );
};
