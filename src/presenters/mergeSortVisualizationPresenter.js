import React, { useState } from "react";
import MergeSortVisualizationView from "../views/mergeSortVisualizationView";
import mergeSort from "../algorithms/mergeSort";

// The MergeSortVisualizationPresenter function is a
// function component that manages the state and logic
// for the merge sort visualization. It receives the
// number of elements to sort as a prop, and it
// generates a random array of that length. It also
// provides a method for sorting the array using the
// mergeSort algorithm, and for updating the state of
// the MergeSortVisualizationView component.
const MergeSortVisualizationPresenter = (props) => {
  // Use the useState hook to initialize the state with
  // a random array of the specified length.
  const [array, setArray] = useState(generateRandomArray(props.numElements));

  // Generate a random array of the specified length.
  function generateRandomArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }

  // Sort the array using the mergeSort algorithm.
  function sort() {
    setArray(mergeSort(array));
  }

  // Return the MergeSortVisualizationView component with
  // the array and onSort props.
  return <MergeSortVisualizationView array={array} onSort={sort} />;
};

export default MergeSortVisualizationPresenter;
