const axios = require("axios");
const key_Books_Google_API = `AIzaSyCIyQiVzTj3EE5ccKHtslEUvNfrnwlnSQg`;
const maxResults_self = 1;
const maxResults_similar = 1; // how many similar books we want to fetch

// To get a book by the search from the client && To get similar books using the first author's name(if there are multiple authors)
async function getSimilarBooks(book) {
  let books = [];

  // get first book info
  const url_name_book = `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=${maxResults_self}&key=${key_Books_Google_API}`;
  const firstBook = await axios
    .get(url_name_book)
    .then((resp) => {
      const title_book = resp.data.items[0].volumeInfo.title;
      const authors_book = resp.data.items[0].volumeInfo.authors;
      const description_book = resp.data.items[0].volumeInfo.description;
      return {
        title: title_book,
        authors: authors_book,
        description: description_book,
      };
    })
    .catch((error) => {
      console.log("Google_API_Books: Error in getting the first book");
      return null;
    });

  // get similar books by the author of first book
  const url_author_book = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${firstBook.authors[0]}&maxResults=${maxResults_similar}&key=${key_Books_Google_API}`;
  const similarBooks = await axios
    .get(url_author_book)
    .then((resp) => {
      return resp.data.items.map((item) => {
        return {
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
        };
      });
    })
    .catch((error) => {
      console.log("Google_API_Books: Error in getting the similar book");
      return null;
    });

  // return null if it did not get the similar books
  if (similarBooks === null) {
    return null;
  }

  // check if there is the book which has the same name with firstBook, if yes, remove!
  books = similarBooks.filter((book) => {
    return book.title != firstBook.title;
  });

  // add the firstBook to the first position and return
  books.unshift(firstBook);
  return books;
}

exports.getSimilarBooks = getSimilarBooks;
