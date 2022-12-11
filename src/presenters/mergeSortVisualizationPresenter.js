import React, { useState } from "react";
import MergeSort from "./../models/MergeSort";
import MergeSortVisualizationView from "./../views/MergeSortVisualizationView";

const MergeSortVisualizationPresenter = () => {
  // Use the useState hook to initialize and manage the state for the bars in the visualization
  const [bars, setBars] = useState([]);

  // Define the startSort function, which is called when the "sort" button is clicked to start the sorting process
  const startSort = () => {
    // Use the mergeSort function from the MergeSort model to sort the array of bars
    const sortedBars = new MergeSort().mergeSort(bars);

    // Update the state with the sorted array of bars
    setBars(sortedBars);
  };

  return (
    <MergeSortVisualizationView
      bars={bars}
      startSort={startSort}
    />
  );
};

export default MergeSortVisualizationPresenter;
