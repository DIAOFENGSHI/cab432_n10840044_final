import React from "react";
import Card from "react-bootstrap/Card";
import "../CSS/App.css";

export function YoutubeCard({ vedio }) {
  return (
    <Card
      className="YoutubeCard"
      style={{ background: " radial-gradient(white, transparent)" }}
    >
      <iframe
        title={vedio.id}
        height="320px"
        src={"https://www.youtube.com/embed/" + vedio.id}
        allow={
          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        }
      ></iframe>
      <Card.Body className="YouubeCardBody">
        <Card.Title>{vedio.title}</Card.Title>
        <Card.Text>{vedio.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
