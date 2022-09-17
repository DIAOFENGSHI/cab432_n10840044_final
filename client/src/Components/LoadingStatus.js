import React from "react";
import "../CSS/App.css";
export function Loading() {
  return (
    <div className="Status">
      <img
        id="loading"
        src="https://acegif.com/wp-content/uploads/loading-23.gif"
        alt="This is an animated gif image, but it does not move"
      />
      <p className="StatusText">loading...</p>
    </div>
  );
}
