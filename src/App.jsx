import React, { useEffect } from "react";
import Loader from "./Components/Loader";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <>
      <Loader />
      <MainRoutes />
    </>
  );
}

export default App;

