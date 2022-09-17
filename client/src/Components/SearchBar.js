import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../CSS/App.css";

export function SearchBar(props) {
  const [innerSearch, setInnerSearch] = useState("");
  return (
    <div id="SearchBar">
      <InputGroup>
        <Form.Control
          placeholder="Book name..."
          value={innerSearch}
          onChange={(e) => setInnerSearch(e.target.value)}
          aria-label="Recipient's username with two button addons"
        />
        <Button
          onClick={() => {
            props.onSubmit(innerSearch);
          }}
          variant="outline-secondary"
        >
          Search
        </Button>
        <Button
          onClick={() => {
            props.onClear("");
            setInnerSearch("");
          }}
          variant="outline-secondary"
        >
          Clear
        </Button>
      </InputGroup>
    </div>
  );
}
