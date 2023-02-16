// console.log(document);

const pageBanner = document.getElementById("page-banner");
const bookList = document.getElementById("book-list");

// Class
const titles = document.getElementsByClassName("title");
Array.from(titles).forEach((title) => console.log(title));

//Tag
const lis = document.getElementsByTagName("li");

//Query Selector
const wrapper = document.querySelector("#wrapper");
const wmf = document.querySelector("#book-list li:nth-child(2) .name");

const book = document.querySelectorAll("#book-list li .name");
book.forEach((b) => console.log(b));
