import React from "react";

export function Counter({ count }) {
  return (
    <div id="counter">
      <p>VISITOR COUNT</p>
      <p>{count}</p>
    </div>
  );
}
