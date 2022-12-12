import React from "react";

// The Bar component is a functional component that
// renders a single bar in the bar chart. It receives
// the value of the bar as a prop, and it sets the
// height of the bar based on this value.
const Bar = (props) => {
  return (
    <div
      className="Bar"
      style={{
        backgroundColor: `hsl(120, 100%, calc(20% + 80% * (100 - ${props.value}) / 100))`,
        height: `${props.value}px`,
        width: `calc(100 - ${props.length}) px`,
        fontSize: "10px",
        color: "gray",
        textAlign: "center",
        display: "inline-block",
        margin: "1px",
      }}
    >
      {props.value}
    </div>
  );
};

export default Bar;
