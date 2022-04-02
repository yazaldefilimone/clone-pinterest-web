import React, { Fragment, FunctionComponent } from "react";
// import { Home } from "../../components/Home";
import { Header } from "../../components/Header";
import { Head } from "../../components/Head";
// import { GridColumns } from "../../components/GridColumns";
import { Home } from "../../components/Home";
// import { Container } from './styles';

export const HomePage: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <Head />
      <Home initializeValue={0} />
    </Fragment>
  );
};
