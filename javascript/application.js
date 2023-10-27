console.log("Hello from JavaScript!");

// /////////
// The basic: forEach
// /////////
// const students = ["Rina", "Chris", "Stephanie", "Nick"];

// students.forEach((student) => {
//   console.log(`${student} is amazing!`);
// });

// const sayAmazing = (student) => {
//   console.log(`${student} is amazing!`);
// };
// students.forEach(sayAmazing);

// /////////
// Iterator
// /////////
const students = ["Rina", "Chris", "Stephanie", "Nick"];

// let's build and append a list to our page
let liContent = '';
students.forEach((student) => {
  liContent += `<li class="student" style="text-shadow: goldenrod 0px 0px 8px">${student}</li>`;
});
const ulContent = `<ul>${liContent}</ul>`;
// console.log(ulContent);

document.body.insertAdjacentHTML("beforeend", ulContent);

// let's change the look of our unordered list
const studentLis = document.querySelectorAll("ul > li.student");
// console.log(studentLis);

studentLis.forEach((studentLi) => {
  // studentLi is a HTML element ( same as Node)
  studentLi.innerText = `🤓 ${studentLi.innerText}`;
  // studentLi.innerText += "🤓";
});

// we can use hidden data stored in elements with JS 
const devs = document.querySelectorAll("li.dev");
devs.forEach((dev) => {
  // console.log(dev.dataset);
  dev.innerText += ` (${dev.dataset.role} 🎸)`
});

// /////////
// Events
// /////////

// The full JS cycle, including events

// 1. Select Asha's picture
const pictures = document.querySelectorAll(".student-img");
pictures.forEach((picture) => {
  // 2. Listen to click on Asha's picture
  picture.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.currentTarget);
    const clickedElement = event.currentTarget;
    // 3. Change the DOM: add the 'selected' class to Asha's picture
    clickedElement.classList.toggle("selected");
  });
});


// The full JS cycle, advanced! 💪

// 1. Select elements: checkboxes, selectAll
const checkboxes = document.querySelectorAll(".form-check-input");
const selectAll = document.querySelector("#select-all");
console.log(checkboxes, selectAll);

let isSelected = false;

// 2. Listen to a click on the selectAll
selectAll.addEventListener("click", (event) => {
  isSelected = !isSelected;
  console.log(event);
  const clickedElement = event.currentTarget;
  // 3. Change the DOM, mark all C-B as checked
  checkboxes.forEach((checkbox) => {
    checkbox.checked = isSelected;
  });
  clickedElement.innerText = isSelected ? 'Deselect all' : 'Select all';
});
