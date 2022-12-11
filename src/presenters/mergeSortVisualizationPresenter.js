// MergeSortVisualizationPresenter.js

// Import the useState hook from the React library
import { useState } from "react";

// Import the MergeSortVisualizationView component from the MergeSortVisualizationView.js file
import { MergeSortVisualizationView } from "./../views/MergeSortVisualizationView";

// Import the MergeSort model from the MergeSort.js file
import { MergeSort } from "./models/MergeSort";

// Define the MergeSortVisualizationPresenter component
const MergeSortVisualizationPresenter = () => {
  // Use the useState hook to initialize and manage the state for the bars in the visualization
  // Initialize the state with an array of bars
  const [bars, setBars] = useState([
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
  ]);

  // Define the startSort function, which is called when the "sort" button is clicked to start the sorting process
  const startSort = () => {
    // Use the mergeSort function from the MergeSort model to sort the array of bars
    const sortedBars = new MergeSort().mergeSort(bars);

    // Update the state with the sorted array of bars
    setBars(sortedBars);
  };

  return (
    // Render the MergeSortVisualizationView component and pass the bars and startSort data as props
    <MergeSortVisualizationView
      bars={bars}
      startSort={startSort}
    />
  );
};

// Export the MergeSortVisualizationPresenter component
export const MergeSortVisualizationPresenter;
