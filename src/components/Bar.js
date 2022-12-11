import React from "react";
import "../styles/bar.css";

// The Bar component is a functional component that
// renders a single bar in the bar chart. It receives
// the value of the bar as a prop, and it sets the
// height of the bar based on this value.
const Bar = (props) => {
  return (
    <div className="Bar" style={{ height: props.value }}>
      {props.value}
    </div>
  );
};

export default Bar;
