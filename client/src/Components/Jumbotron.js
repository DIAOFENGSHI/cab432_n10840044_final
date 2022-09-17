import React from "react";
import "../CSS/App.css";

export function Jumbotron() {
  return (
    <div id="jumbotron" className="jumbotron jumbotron-fluid">
      <h1 className="JumbotronTitle">Welcome My Friend</h1>
      <p className="lead">
        This is a mashup application serving for book fans.
      </p>
    </div>
  );
}
