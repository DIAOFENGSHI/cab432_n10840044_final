import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Counter } from "../Components/Counter";
import { NavBar } from "../Components/Navigation";
import { Jumbotron } from "../Components/Jumbotron";
import { Map } from "../Components/GoogleMap";
import { SearchBar } from "../Components/SearchBar";
import { DefaultContent } from "../Components/DefaultContent";
import { BookCard } from "../Components/BookCard";
import { BottomSlice } from "../Components/BottomSlice";
import { Loading } from "../Components/LoadingStatus";
import "../CSS/App.css";

async function grabBooks(query) {
  const data = JSON.stringify({
    search: query,
  });
  const config = {
    method: "post",
    url: "http://localhost:3001/books",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const res = await axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log("HomePage: Error in fetching books", error);
      return "not found";
    });
  return res;
}

async function grabCount() {
  const config_sub = {
    method: "post",
    url: "http://localhost:3001/queryCount",
  };
  const num = await axios(config_sub)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log("HomePage: Error in fetching count", error);
      return null;
    });
  return num;
}

export function HomePage() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(null);
  const [data, setData] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState(false);

  // only run once for adding and getting the number of visitor
  useEffect(() => {
    async function setting() {
      setCount(await grabCount());
      setPageLoading(false);
    }
    setting();
  }, []);

  useEffect(() => {
    if (search !== "") {
      async function grabData() {
        let books = await grabBooks(search);
        setData(books);
      }
      grabData();
    } else {
      setData(null);
    }
  }, [search]);

  return (
    <div className="App">
      {pageLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <div>{count !== null && <Counter count={count} />}</div>

            <NavBar />

            <Jumbotron />
            <Container>
              <Row>
                <SearchBar onSubmit={setSearch} onClear={setSearch} />
              </Row>
            </Container>
            <p id="FansMapTitle">Fans Map</p>
            <Container>
              <Map data={data} />
            </Container>

            <p id="bookCardTitle">Book Gallery</p>

            <Container>
              <Row className="bookCard">
                {search !== "" ? <BookCard data={data} /> : <DefaultContent />}
              </Row>
            </Container>

            <BottomSlice />
          </div>
        </div>
      )}
    </div>
  );
}
