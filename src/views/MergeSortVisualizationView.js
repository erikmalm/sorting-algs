import React from "react";
import Bar from "../components/bar";

// The MergeSortVisualizationView component is a pure
// component that renders the bar chart and the sort
// button. It receives the array of elements to sort
// and the onSort callback as props, and it passes
// these props to the Bar components and the sort
// button.
const MergeSortVisualizationView = (props) => {
  return (
    <div className="MergeSortVisualizationView">
      {props.array.map((value, index) => (
        <Bar key={index} value={value} />
      ))}
      <button onClick={props.onSort}>Sort</button>
    </div>
  );
};

export default MergeSortVisualizationView;
