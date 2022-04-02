import React from "react";
import ReactDOM from "react-dom";
import { entreScreen } from "./shared/cardsAmimete";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
entreScreen({ index: 0 });
