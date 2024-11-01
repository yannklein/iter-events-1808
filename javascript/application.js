console.log("Hello from JavaScript!");

// /////////
// The basic: forEach + using a defined arrow function 
// /////////
const students = ["Esteban", "Chafique", "Arisa", "Mason"];

const greeting = (student) => {
  console.log(`Hi ${student}!`);
}

// students.forEach(greeting);

// const greeting_students = students.map((student) => {
//   return `Hi ${student}!`;
// });
// console.log(greeting_students);


// /////////
// Iterator
// /////////
const otherStudents = ["Jarod", "Loris", "Roman", "Claudia"];

// let's build and append a list to our page
let lisContent = "";

otherStudents.forEach((student) => {
  lisContent += `<li class="student" style="text-shadow: goldenrod 0px 0px 8px">${student}</li>`;
});

const ulContent = `<ul>${lisContent}</ul>`;
// console.log(ulContent);
document.body.insertAdjacentHTML("beforeend", ulContent);

// let's change the look of our unordered list
const studentLis = document.querySelectorAll("li.student");
studentLis.forEach((studentLi) => {
  // studentLi.innerText += " 🇵🇱";
  // studentLi.innerText = "🇵🇱 " + studentLi.innerText;
  studentLi.innerText = `🇵🇱 ${studentLi.innerText}`;
});

// we can use hidden data stored in elements with JS 
const devLis = document.querySelectorAll(".dev");
devLis.forEach((devLi) => {
  // console.log(devLi.dataset.role);
  devLi.innerText = `${devLi.innerText} (${devLi.dataset.role})`;
});



// /////////
// Events
// /////////

// The full JS cycle, including events
// 1. Select elements, 3 images
const imgs = document.querySelectorAll(".student-img");
console.log("1. before forEach");
imgs.forEach((img) => {
  // 2. Listen to a click on each image
  console.log("2. before addEventListener");
  img.addEventListener("click", (event) => {
    console.log("4. after addEventListener");
    // console.log(event);
    // console.log(event.currentTarget);
    const clickedEl = event.currentTarget;
    // 3. change the DOM, add the selected class
    clickedEl.classList.toggle("selected");
  });
});
console.log("3. after the code");

// The full JS cycle, advanced! 💪
 // 1. Select elements (selectAll, all the checkboxes)
const selectAll = document.getElementById("select-all");
const checkboxes = document.querySelectorAll(".form-check-input");

let isSelect = false;

 // 2. Listen to a click on selectAll
selectAll.addEventListener("click", (event) => {
  console.log(event);
  // 3. Change the DOM, check all checkboxes
  isSelect = !isSelect
  selectAll.innerText = isSelect ? "Deselect all" : "Select all"
  checkboxes.forEach((checkbox) => {
    checkbox.checked = isSelect;
  });
});
