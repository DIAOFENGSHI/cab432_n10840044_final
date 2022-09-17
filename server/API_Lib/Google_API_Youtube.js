const axios = require("axios");
//AIzaSyCIyQiVzTj3EE5ccKHtslEUvNfrnwlnSQg
//AIzaSyCgc6VIglN1UJVzVb3rP_MrxEuVspVw9rA
//AIzaSyC0PfusUf85gIK2Oi_jpbElNLFL8JItxzk
const key_Youtube_Google_API = `AIzaSyC0PfusUf85gIK2Oi_jpbElNLFL8JItxzk`;
const maxResult = 10;

// query by book's title and returns a array, this array includes objects
async function getYoutube(title) {
  const url_youtube = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResult}&q=book ${title}&key=${key_Youtube_Google_API}`;
  return await axios
    .get(url_youtube)
    .then((resp) => {
      // remove vedios which do not have vedio id
      let vedios = resp.data.items.filter((item) => {
        return item.id.videoId !== undefined;
      });
      vedios = vedios.map((item) => {
        const video = {
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnails: item.snippet.thumbnails.high.url,
        };
        return video;
      });
      return vedios.slice(0, 3);
    })
    .catch((error) => {
      console.log(
        "Google_API_Youtube: Error in getting the youtube link of " + title,
        error
      );
      return null;
    });
}

exports.getYoutube = getYoutube;
