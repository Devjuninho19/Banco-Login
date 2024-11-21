import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./Routes/RoutesApp";
const App = () => {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
};

export default App;
