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
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Bussens</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </HeaderList>
          <HeaderButton>
            <button>login</button>
            <button>sinup</button>
          </HeaderButton>
        </Nav>
      </SubContainer>
    </Container>
  );
};
