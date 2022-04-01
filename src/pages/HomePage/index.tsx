import React, { Fragment, FunctionComponent } from "react";
import { Home } from "../../components/Home";
import { Header } from "../../components/Header";

// import { Container } from './styles';

export const HomePage: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  );
};
