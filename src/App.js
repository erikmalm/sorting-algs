import React from "react";
import "./styles/styles.css"; // import the CSS file
import ContentPresenter from "./presenters/contentPresenter";

function App() {
  return (
    <div className="container"> // apply the container class to the div element
      <ContentPresenter />
    </div>
  );
}

export default App;
