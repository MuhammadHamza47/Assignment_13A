// 1- How we can access HTML elements using DOM in javascript?

// Get ElementById This method allow you to get the element by their unique id
let byId = document.getElementById("element");

// Get ElementsByClassName This method allow you to get the element by their specific class
let byClass = document.getElementsByClassName("Class1");

// Get ElementsByTagName This method allow you to get the element by their HTML tag name
let byTagName = document.getElementsByTagName("h1");

// Get ElementbByquerySelector This method allow you to get the element by their selector class or tag
let byQuerySelector = document.querySelector(".Class1");

// Get ElementbByquerySelectorAll This method allow you to get the element by their selector class or tag
let byQuerySelectorAll = document.querySelectorAll(".Class1");
console.log(byQuerySelectorAll);

// 2- What are the activities that we can perform using DOM?

// The Document Object Model (DOM) provides a wide range of activities that you can perform to interact with and manipulate HTML elements on a webpage. Here are some common activities you can do using the DOM:
//
// Accessing Elements:
//
// Select elements by ID, class name, tag name, or CSS selector.
// Retrieve and modify element properties, such as text content, attributes, and styles.
// Traverse the DOM tree to access parent, child, or sibling elements.
// Modifying Elements:
//
// Create new elements and append them to the document.
// Remove existing elements from the document.
// Modify element attributes and styles.
// Change the content of elements, including text and HTML.
// Handling Events:
//
// Attach event listeners to elements for user interactions, such as clicks, keypresses, or form submissions.
// Respond to events by executing custom JavaScript code.
// Modify event behavior, such as preventing default actions or stopping event propagation.
// Manipulating Styles:
//
// Change CSS styles dynamically by modifying element styles or classes.
// Add or remove CSS classes from elements.
// Calculate or retrieve computed styles for elements.
// Creating and Manipulating HTML Forms:
//
// Create form elements dynamically, such as input fields, checkboxes, or select dropdowns.
// Retrieve and set form values.
// Validate form inputs before submission.
// Submit forms programmatically.
// Dynamic Content and Animation:
//
// Add or remove elements dynamically to create interactive user interfaces.
// Animate elements using CSS transitions or animations.
// Update content dynamically without reloading the entire page using AJAX techniques.
// Manipulating Images and Media:
//
// Modify image source, size, or other attributes.
// Embed and control media elements, such as video or audio players.
// DOM Manipulation Performance Optimization:
//
// Optimize DOM manipulation operations to minimize performance bottlenecks.
// Use document fragments or cloneNode() for efficient batch updates.
// Consider using virtual DOM libraries or frameworks for complex applications.
// These are just a few examples of the activities you can perform using the DOM. The DOM API provides a rich set of methods, properties, and events that enable powerful manipulation and interaction with HTML elements on a webpage.

// 3- What are the event-listners in DOM?
let button = document.getElementById("btn");
let text = document.getElementById("span");
let geth1txt = byId.outerHTML;

button.addEventListener("click", (e) => {
  text.outerHTML = geth1txt;
});