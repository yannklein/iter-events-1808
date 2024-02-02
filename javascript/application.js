// console.log("Hello from JavaScript!");

// /////////
// The basic: forEach + using a defined arrow function 
// /////////
const students = ["Felix", "Nina", "Ruby", "Dan"];

// JS arrow function: () => {}
// students.forEach((student, index, arr) => {
//   console.log(`${index + 1} - ${student} is amazing!`);
//   console.log(arr); // original array students
// });

// const greeting = (name) => {
//   console.log(`Hello ${name}`);
// };

// students.forEach(greeting);


// /////////
// Iterator
// /////////
const otherStudents = ["Noah", "Yoshio", "Hiroshi", "Nick"];

// let's build and append a list to our page
let lisContent = '';
otherStudents.forEach((student) => {
  lisContent += `<li class="student" style="text-shadow: goldenrod 0px 0px 8px">${student}</li>`
});

const ulContent = `<ul>${lisContent}</ul>`;
// console.log(ulContent);

document.body.insertAdjacentHTML("beforeend", ulContent);

// let's change the look of our unordered list
const liElements = document.querySelectorAll("ul li.student");

// Ctrl + Cmd + Space -> emoji box on Mac
liElements.forEach((li) => {
  li.innerText = `🤓 ${li.innerText}`;
});

// we can use hidden data stored in elements with JS 
const devs = document.querySelectorAll("ul li.dev");
devs.forEach((dev) => {
  // console.log(dev.dataset);
  dev.innerText += ` (${dev.dataset.role})`
});

// /////////
// Events
// /////////

// The full JS cycle, including events

// 1. Select elements 
// (elements the user interacts with, elements that will change)
const pictures = document.querySelectorAll(".student-img");
pictures.forEach((picture) => {
  // 2. Listen to an event, click on the picture
  picture.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.currentTarget); // the element that has been clicked
    const clickedElement = event.currentTarget;
    // 3. Change the DOM, add .selected to the picture
    clickedElement.classList.toggle("selected");
  });
});

// The full JS cycle, advanced! 💪

let isSelected = false;

// 1. Select elements (selectAll, all the checkboxes)
const selectAll = document.getElementById("select-all");
const checkboxes = document.querySelectorAll(".form-check-input");

// 2. Listen to an event, click on selectAll
selectAll.addEventListener("click", (event) => {
  console.log(event);
  isSelected = !isSelected
  console.log("selected?", isSelected);
  // 3. Change the DOM, check all the checkboxes
  const clickedElement = event.currentTarget;
  clickedElement.innerText = isSelected ? "Unselect all" : "Select all";
  checkboxes.forEach( checkbox => checkbox.checked = isSelected);
});
