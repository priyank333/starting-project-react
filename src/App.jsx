import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import "./index.css";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <CoreConcepts />
      <Examples />
    </Fragment> //alternative to Fragment, we can use <> </> brackets.
  );
}

export default App;
