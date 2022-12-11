import React from "react";
import MergeSortVisualizationPresenter from "./mergeSortVisualizationPresenter";
import "./../styles/styles.css";

// The ContentPresenter component is a functional component
// that renders a heading and the MergeSortVisualizationPresenter
// component.
const ContentPresenter = () => {
  // Return a div element containing a heading and the
  // MergeSortVisualizationPresenter component.
  return (
    <div className="ContentPresenter">
      <h1>Sorting Algorithms Visualized</h1>
      <MergeSortVisualizationPresenter />
    </div>
  );
};

export default ContentPresenter;
