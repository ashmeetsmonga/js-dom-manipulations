console.log(document);

const pageBanner = document.getElementById("page-banner");
console.log(pageBanner);
const bookList = document.getElementById("book-list");

// Class
const titles = document.getElementsByClassName("title");
Array.from(titles).forEach((title) => console.log(title));

//Tag
const lis = document.getElementsByTagName("li");
console.log(lis);
