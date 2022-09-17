const axios = require("axios");
const username_Twitter = `TnjQfUCHvDs6bsWBxMzIwZmHS`;
const password_Twitter = `toA0aCvZq1bb7QdjmCJR5jU9PNZgww282634M5CM0yAZasFiU2`;
const url_token_Twitter = `https://api.twitter.com/oauth2/token?grant_type=client_credentials`;
const max_results = 10; // valid field in 10 to 100 by Twitter document

// query by book's title of this book and returns a array, this array includes objects
// if nothing come back from Twitter, will fetch the second time by book's author
async function getTwitter(title, author) {
  //fetching token
  const token = await fetchToken_Twitter();
  //fetching twitter tweet by the title and token
  let tweet = await fetchData(title, token);
  //if failed to fetch, try use the author to fetch again
  if (tweet === null) {
    console.log(
      "Twitter_API_Search: Try to fetch data by the author: ",
      author
    );
    tweet = await fetchData(author, token);
  }
  // remove the tweet which have no location info
  let tweet_with_location = tweet.filter((comment) => {
    return comment.location !== undefined;
  });
  return tweet_with_location;
}

// post request to get bearer token
async function fetchToken_Twitter() {
  return await axios
    .post(
      url_token_Twitter,
      {},
      {
        auth: {
          username: username_Twitter,
          password: password_Twitter,
        },
      }
    )
    .then((resp) => {
      return resp.data.access_token;
    })
    .catch((error) => {
      console.log("Twitter_API_Search: Error in getting the twitter token");
      return null;
    });
}

// fetching tweet from twitter
async function fetchData(query, token) {
  const url_search = `https://api.twitter.com/2/tweets/search/recent?query=book ${query}&expansions=author_id&tweet.fields=created_at&user.fields=location,profile_image_url&max_results=${max_results}`;
  return await axios
    .get(url_search, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((resp) => {
      let index = -1;
      return resp.data.data.map((comment) => {
        index = index + 1;
        return {
          author_id: comment.author_id,
          content: comment.text,
          time: comment.created_at.slice(0, 10),
          location: resp.data.includes.users[index].location,
          author: resp.data.includes.users[index].username,
          profile_image: resp.data.includes.users[index].profile_image_url,
        };
      }); // only get the first three tweet
    })
    .catch((err) => {
      console.log("Twitter_API_Search: Error in fetching tweet by ", query);
      return null;
    });
}

exports.getTwitter = getTwitter;
