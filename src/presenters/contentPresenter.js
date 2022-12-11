import React from "react";
import MergeSortVisualizationPresenter from "./mergeSortVisualizationPresenter";
import MergeSortVisualizationView from "../views/MergeSortVisualizationView";

function ContentPresenter() {
  return (
    <div>
      <h1>Merge Sort Visualization</h1>
      <MergeSortVisualizationView>
        <MergeSortVisualizationPresenter data={[5, 4, 3, 2, 1]} />
      </MergeSortVisualizationView>
    </div>
  );
}

export default ContentPresenter;