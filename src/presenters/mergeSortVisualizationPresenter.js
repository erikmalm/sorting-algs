import React, { useState } from "react";
import MergeSortVisualizationView from "../views/mergeSortVisualizationView";
import mergeSort from "../algorithms/mergeSort";

// The MergeSortVisualizationPresenter function is a
// function component that manages the state and logic
// for the merge sort visualization. It receives the
// default number of elements to sort as a prop, and it
// generates a random array of that length. It also
// provides a method for sorting the array using the
// mergeSort algorithm, and for updating the state of
// the MergeSortVisualizationView component.
const MergeSortVisualizationPresenter = () => {
  // Use the useState hook to initialize the state with
  // a random array of the specified length and with
  // the default value for the array length.
  const [array, setArray] = useState(generateRandomArray(10));
  const [arrayLength, setArrayLength] = useState(10);

  // Generate a random array of the specified length.
  function generateRandomArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }

  // Sort the array using the mergeSort algorithm.
  function sort() {
    setArray(mergeSort(array));
  }

  // Handle changes to the input field for the array
  // length by updating the state with the new value.
  function handleChange(event) {
    setArrayLength(Number(event.target.value));
  }

  // Return the MergeSortVisualizationView component with
  // the array, arrayLength, onSort, and onChange props.
  return (
    <div className="MergeSortVisualizationPresenter">
      <input
        type="number"
        value={arrayLength}
        onChange={handleChange}
        min={1}
        max={100}
      />
      <MergeSortVisualizationView
        array={generateRandomArray(arrayLength)}
        onSort={sort}
        onChange={handleChange}
      />
    </div>
  );
};

export default MergeSortVisualizationPresenter;
