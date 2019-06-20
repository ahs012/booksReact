import axios from "axios";

//GOOGLE BOOKS API Search
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets all Books 
  getAllBooks: function() {
    return axios.get("/api/books");
  },
  // Gets specific book by ID
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Book Delete
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves book to database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Searches for books in Google Books API
  searchBooks: function(query) {
    return axios.get(BASEURL + query);
 }
};
