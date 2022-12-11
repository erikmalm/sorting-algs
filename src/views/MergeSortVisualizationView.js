// MergeSortVisualizationView.js

// Import the React library
import React from "react";

// Import the Bar component from the Bar.js file
import { Bar } from "./Bar";

// Define the MergeSortVisualizationView component
const MergeSortVisualizationView = ({ bars, startSort }) => {
  return (
    // Render a div container for the visualization
    <div className="visualization">
      {/* Map over the array of bars and render a Bar component for each bar, passing the height of the bar as a prop */}
      {bars.map((bar) => (
        <Bar key={bar} height={bar} />
      ))}

      {/* Render a button with the "sort" text and an onClick event that calls the startSort function when the button is clicked */}
      <button onClick={startSort}>sort</button>
    </div>
  );
};

// Export the MergeSortVisualizationView component
export default MergeSortVisualizationView;
