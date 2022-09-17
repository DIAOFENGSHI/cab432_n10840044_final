import React from "react";
import Toast from "react-bootstrap/Toast";
import { BsTwitter } from "react-icons/bs";
import "../CSS/App.css";
export function Tweet({ tweet }) {
  return (
    <Toast>
      <Toast.Header>
        <img src={tweet.profile_image} className="rounded me-2" alt="" />
        <strong className="me-auto">{tweet.author}</strong>
        <small>{tweet.time}</small>
      </Toast.Header>
      <Toast.Body className="Tweet">
        <p className="TweetText">{tweet.content}</p>
        <p className="TweetText">From: {tweet.location}</p>
        <div className="TweetIcon">
          <BsTwitter />
        </div>
      </Toast.Body>
    </Toast>
  );
}
