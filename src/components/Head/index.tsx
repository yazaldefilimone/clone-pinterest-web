import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import { Container, SubContainer, Title, WrapperContent } from './styles';

export const Head = () => {
  const { titles } = useTitle();
  return (
    <Container>
      <span>Get Your Next</span>
      <SubContainer>
        {titles.map((value, index) => (
          <WrapperContent key={index}>
            <Title className="heading animate-before"> {value} </Title>
          </WrapperContent>
        ))}
      </SubContainer>
    </Container>
  );
};
