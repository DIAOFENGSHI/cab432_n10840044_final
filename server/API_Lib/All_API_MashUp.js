const { getSimilarBooks } = require("./Google_API_Books");
const { getYoutube } = require("./Google_API_Youtube");
const { getTwitter } = require("./Twitter_API_Search");
const { getGeoLocation } = require("./Google_API_GeoCode");
// To mash up all API and return a jason code
async function integrateAll(search) {
  try {
    //query the first API
    let books = await getSimilarBooks(search);
    // mash up all
    const all = Promise.all(
      await books.map(async (book) => {
        //query the second API
        book.youtube = await getYoutube(book.title);
        //query the third API
        book.twitter = await getTwitter(book.title, book.authors[0]);
        //add geo location for all twitter tweet by query the four API
        book.twitter = await Promise.all(
          book.twitter.map(async (tweet) => {
            const geo = await getGeoLocation(tweet.location);
            if (geo !== null) {
              //if geo location has a value, assign to the tweet, otherwise do not
              tweet.geoLocation = geo;
            }
            return tweet;
          })
        );
        //remove the tweets who have no geo location
        book.twitter = book.twitter.filter((tweet) => {
          return tweet.geoLocation !== undefined;
        });
        return book;
      })
    );
    return all;
  } catch (err) {
    console.log("All_API_MashUp: Error in integrateAll - " + err);
    return null;
  }
}

exports.integrateAll = integrateAll;
