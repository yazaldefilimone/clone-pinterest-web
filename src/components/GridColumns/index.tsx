import React, { Fragment } from "react";

import { Element, Column } from "./styles";

export const GridColumns = () => {
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
          <Column className="animate-before" key={index}>
            {value.map((value, index) => {
              return <Element></Element>;
            })}
          </Column>
        );
      })}
    </Fragment>
  );
};
