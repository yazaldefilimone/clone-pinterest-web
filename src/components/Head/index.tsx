import React from "react";

import { Container, SubContainer, Title, WrapperContent } from "./styles";

export const Head = () => {
  const titles = [
    "home decoridea",
    "next look oufit",
    "Halloween idea",
    "weeknight dinner idea",
  ];

  return (
    <Container>
      <span>Get Your Next</span>
      <SubContainer>
        {titles.map((value, index) => (
          <WrapperContent>
            <Title className="animate-before"> {value} </Title>
          </WrapperContent>
        ))}
      </SubContainer>
    </Container>
  );
};
