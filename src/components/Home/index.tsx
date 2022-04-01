import React, { FunctionComponent } from "react";

import { Container, SubContainer, Column, Element } from "./styles";

export const Home: FunctionComponent = () => {
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
    <Container>
      <SubContainer>
        {elementsComponent.map((value, index) => {
          return (
            <Column key={index}>
              {value.map((value, index) => {
                return <Element></Element>;
              })}
            </Column>
          );
        })}
      </SubContainer>
    </Container>
  );
};
