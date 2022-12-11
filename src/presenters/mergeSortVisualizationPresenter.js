import React, { useState } from "react";
import MergeSortVisualizationView from "../views/mergeSortVisualizationView";
import mergeSort from "../algorithms/mergeSort";

// The MergeSortVisualizationPresenter component is a class
// component that manages the state and logic for the
// merge sort visualization. It receives the number of
// elements to sort as a prop, and it generates a random
// array of that length. It also provides a method for
// sorting the array using the mergeSort algorithm, and
// for updating the state of the MergeSortVisualizationView
// component.
class MergeSortVisualizationPresenter extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the state with a random array of the
    // specified length.
    this.state = {
      array: this.generateRandomArray(props.numElements),
    };
  }

  // Generate a random array of the specified length.
  generateRandomArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
  }

  // Sort the array using the mergeSort algorithm.
  sort() {
    this.setState({ array: mergeSort(this.state.array) });
  }

  render() {
    return (
      <MergeSortVisualizationView
        array={this.state.array}
        onSort={() => this.sort()}
      />
    );
  }
}

export default MergeSortVisualizationPresenter;
