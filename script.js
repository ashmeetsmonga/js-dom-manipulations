// console.log(document);

const pageBanner = document.getElementById("page-banner");
// const bookList = document.getElementById("book-list");

// Class
const titles = document.getElementsByClassName("title");
Array.from(titles).forEach((title) => console.log(title));

//Tag
const lis = document.getElementsByTagName("li");

//Query Selector
const wrapper = document.querySelector("#wrapper");
const wmf = document.querySelector("#book-list li:nth-child(2) .name");

const book = document.querySelectorAll("#book-list li .name");
// book.forEach((b) => console.log(b));

//Nodes
const banner = document.querySelector("#page-banner");
console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true); //true means insides are also cloned
console.log(clonedBanner);

//DOM Traversal
const bookList = document.querySelector("#book-list");
console.log("parent node:", bookList.parentNode); //parentNode === parentElement

console.log("Child Nodes with line breaks", bookList.childNodes);
console.log("Child Elements", bookList.children);

//DOM Traversal(Sibling)
console.log("Next sibling with line breaks", bookList.nextSibling);
console.log("Next element sibling", bookList.nextElementSibling);

console.log("Previous sibling with line breaks", bookList.previousSibling);
console.log("Previous element sibling", bookList.previousElementSibling);

bookList.previousElementSibling.querySelector("p").innerHTML += "<br>Too cool for everyone else";

//Events
// const h2 = document.querySelector("#book-list h2");
// h2.addEventListener("click", (e) => {
// 	console.log(e.target);
// });

// let deleteButtons = document.querySelectorAll("#book-list .delete");
// deleteButtons.forEach((delBtn) =>
// 	delBtn.addEventListener("click", (e) => {
// 		const parLi = e.target.parentElement;
// 		parLi.parentNode.removeChild(parLi);
// 	})
// );

//Event Bubbling
bookList.addEventListener("click", (e) => {
	if (e.target.className === "delete") {
		const parLi = e.target.parentElement;
		parLi.parentNode.removeChild(parLi);
	}
});

//Forms
document.forms; // returns all forms
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;
	console.log(value);
});
