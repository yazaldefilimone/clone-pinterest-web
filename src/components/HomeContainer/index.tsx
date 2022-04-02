import React, { ReactNode } from "react";

import { Container, SubContainer } from "./styles";

interface HomePropsComtainer {
  children?: ReactNode;
  classe: string;
}

export const HomeComtainer = ({ children, classe }: HomePropsComtainer) => {
  return (
    <Container className={classe}>
      <SubContainer>{children}</SubContainer>
    </Container>
  );
};
