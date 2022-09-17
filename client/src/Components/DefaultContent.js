import React from "react";
import "../CSS/App.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { YoutubeCard } from "./YoutubeCard";
import Container from "react-bootstrap/Container";
import "../CSS/App.css";

export function DefaultContent() {
  const temp = {
    title: "All About Love",
    authors: ["bell hooks"],
    description:
      'A New York Times bestseller and enduring classic, All About Love is the acclaimed first volume in feminist icon bell hooks\' "Love Song to the Nation" trilogy. All About Love reveals what causes a polarized society, and how to heal the divisions that cause suffering. Here is the truth about love, and inspiration to help us instill caring, compassion, and strength in our homes, schools, and workplaces. “The word ‘love’ is most often defined as a noun, yet we would all love better if we used it as a verb,” writes bell hooks as she comes out fighting and on fire in All About Love. Here, at her most provocative and intensely personal, renowned scholar, cultural critic and feminist bell hooks offers a proactive new ethic for a society bereft with lovelessness--not the lack of romance, but the lack of care, compassion, and unity. People are divided, she declares, by society’s failure to provide a model for learning to love. As bell hooks uses her incisive mind to explore the question “What is love?” her answers strike at both the mind and heart. Razing the cultural paradigm that the ideal love is infused with sex and desire, she provides a new path to love that is sacred, redemptive, and healing for individuals and for a nation. The Utne Reader declared bell hooks one of the “100 Visionaries Who Can Change Your Life.” All About Love is a powerful, timely affirmation of just how profoundly her revelations can change hearts and minds for the better.',
    youtube: [
      {
        id: "55x4mlwZ1Rw",
        title:
          "a deep conversation about love | bell hooks &quot;all about love&quot; Book Review",
        description:
          "Hi everyone! Happy Tuesday! In today's video, I'll be discussing LOVE! Author, professor, feminist, and culture critic bell hooks' ...",
        thumbnails: "https://i.ytimg.com/vi/55x4mlwZ1Rw/hqdefault.jpg",
      },
      {
        id: "wSEIYx9jui0",
        title: "All About Love - Full Audio Book. Bell Hooks",
        description:
          "Literally none of this is owned by me. Not the text, not the image, not the reading, not the recording, nothing. I'm just putting this up ...",
        thumbnails: "https://i.ytimg.com/vi/wSEIYx9jui0/hqdefault.jpg",
      },
      {
        id: "JSwU_3RPlVw",
        title: "All About Love by bell hooks Book Review | BLACK LIVES MATTER",
        description:
          "This book review is all about how to fight for justice with love! Thanks for watching! Please make sure to like & subscribe!",
        thumbnails: "https://i.ytimg.com/vi/JSwU_3RPlVw/hqdefault.jpg",
      },
    ],
  };
  return (
    <div className="DefaultContent">
      <Card
        className="BookCard"
        key={temp.title}
        style={{ background: "transparent" }}
      >
        <Card.Body>
          <Card.Title className="BookCardTitle">{temp.title}</Card.Title>
          <Card.Text className="BookCardAuthor">{temp.authors[0]}</Card.Text>
          <Card.Text className="BookCardDescription">
            {temp.description}
          </Card.Text>
          <Card.Title className="YoutubeCardTitle">Related YouTube</Card.Title>
          <Container>
            <Row>
              {temp.youtube.map((vedio) => {
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
    </div>
  );
}
