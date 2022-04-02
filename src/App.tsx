import React from "react";
import { HomePage } from "./pages/HomePage";
import { TitlesProvaider } from "./context/Titles";

import GlobalStyles from "./styles/GlobalStyles";
function App() {
  return (
    <>
      <TitlesProvaider>
        <HomePage />
        <GlobalStyles />
      </TitlesProvaider>
    </>
  );
}

export default App;
