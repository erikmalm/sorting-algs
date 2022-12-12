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
    <div>
      <div className="MergeSortVisualizationView">
        {props.array.map((value, index, length) => (
          <Bar key={index} value={value} amount={length} />
        ))}
      </div>
      <div className="input">
        <button onClick={props.onRandomize}>Randomize</button>
        <input
          type="number"
          value={props.arrayLength}
          onChange={props.onChange}
          min={1}
          max={100}
        />
        <button onClick={props.onSort}>Sort</button>
      </div>
    </div>
  );
};

export default MergeSortVisualizationView;
