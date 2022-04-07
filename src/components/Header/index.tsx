import React, { FunctionComponent } from "react";
import {
  Container,
  SubContainer,
  Logo,
  HeaderList,
  HeaderButton,
  Nav,
} from "./styles";

export const Header: FunctionComponent = () => {
  return (
    <Container>
      <SubContainer>
        <Logo>Pinterest</Logo>
        <Nav>
          <HeaderList>
            <li>
              <a href="https://github.com/yazaldefilimonepinto">About</a>
            </li>
            <li>
              <a href="https://github.com/yazaldefilimonepinto">Business</a>
            </li>
            <li>
              <a href="https://github.com/yazaldefilimonepinto">Blog</a>
            </li>
          </HeaderList>
          <HeaderButton>
            <button>Login</button>
            <button>Signup</button>
          </HeaderButton>
        </Nav>
      </SubContainer>
    </Container>
  );
};
