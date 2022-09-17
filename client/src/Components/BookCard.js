import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { YoutubeCard } from "./YoutubeCard";
import { Loading } from "./LoadingStatus";
import Container from "react-bootstrap/Container";
import { NotFound } from "./NotFoundStatus";
import "../CSS/App.css";

export function BookCard({ data }) {
  if (data == null) {
    return <Loading />;
  }
  if (data == "not found") {
    return <NotFound />;
  }
  return (
    <div>
      {data.map((book) => {
        return (
          <Card
            className="BookCard"
            style={{ background: "transparent" }}
            key={book.title}
          >
            <Card.Body>
              <Card.Title className="BookCardTitle">{book.title}</Card.Title>
              <Card.Text className="BookCardAuthor">
                {book.authors[0]}
              </Card.Text>
              <Card.Text className="BookCardDescription">
                {book.description}
              </Card.Text>
              <Card.Title className="YoutubeCardTitle">
                Related YouTube
              </Card.Title>
              <Container>
                <Row>
                  {book.youtube.map((vedio) => {
                    return (
                      <Col xs={4} key={vedio.id}>
                        <YoutubeCard vedio={vedio} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
