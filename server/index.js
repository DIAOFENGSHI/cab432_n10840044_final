const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = 3001;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { integrateAll } = require("./API_Lib/All_API_MashUp");
const { getItem, updateItem } = require("./API_Lib/AWS_API_DynamoDB");

// Serve out any static assets correctly
//app.use(express.static('../client/build'))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

// set the number of visitor to persistence service: AWS DynamoDB and send back to the frontend
app.post("/queryCount", async (req, res) => {
  try {
    // fetching the count from DynamoDB
    const count_previous = await getItem();
    if (count_previous === null) throw "getting count failed";

    // adding the current visitor to the count
    const count_now = count_previous + 1;

    // updating the count back to DynamoDB
    const check = updateItem(JSON.stringify(count_now));
    if (check === null) throw "updating count failed";

    // sending the current count to frontend
    res.send(JSON.stringify(count_now));
    res.end();
  } catch (err) {
    console.log("POST COUNT: Error in operating the count - ", err);
    res.status(404).send("null");
    res.end();
  }
});

// returns a json file to client
app.post("/books", async (req, res) => {
  try {
    let response = await integrateAll(req.body.search);
    if (response === null) throw "integrating all failed";
    res.json(response);
    res.end();
  } catch (err) {
    console.log("POST BOOKS: Error in getting books - ", err);
    res.status(404).send("null");
    res.end();
  }
});

// New api routes should be added here.
// It's important for them to be before the `app.use()` call below as that will match all routes.

// Any routes that don't match on our static assets or api should be sent to the React Application
// This allows for the use of things like React Router

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
