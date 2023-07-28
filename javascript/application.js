console.log("Hello from JavaScript!");

// const students = ["Devi", "Horace", "Alvin", "Caitlyn"];

// JS arrow function: () => {}
// students.forEach((student) => {
//   console.log(`${student} is amazing!`);
// });

// /////////
// Iterator
// /////////

const students = ["Devi", "Horace", "Alvin", "Caitlyn"];

// we can create HTML elements from scratch
const containerDiv = document.querySelector(".container");
const ulElemt = document.createElement("ul");
console.log(ulElemt);
containerDiv.appendChild(ulElemt);

// we can create HTML elements from scratch with iteration
students.forEach((student) => {
  const liElemt = document.createElement("li");
  liElemt.innerText = student;
  liElemt.classList.add("student");
  liElemt.style.color = "#ffd4dc";
  liElemt.style.textShadow = "0 0 2px rgba(0,0,0,1)";
  ulElemt.appendChild(liElemt);
});

// CSS Selector: "ul li .student"
// corresponds to 👇
// <ul>
//   <li>
//     <div className="student"></div>
//   </li>
// </ul>

// we can update HTML elements with iteration
const studentLis = document.querySelectorAll("ul li.student");
// studentLis is a NodeList
studentLis.forEach((studentLi) => {
  studentLi.innerText = `🤓 ${studentLi.innerText}`;
});

// Ways to concatenate:
// const text = "Hello" + " World";
// let text2 = "Hello";
// text2 += " World";

// we can use hidden data stored in elements with JS 
const devLis = document.querySelectorAll("li.dev");
devLis.forEach((devLi) => {
  // devLi.dataset is a kind of object
  console.log(devLi.dataset);
  devLi.innerText += ` (${devLi.dataset.role} 🧑‍💻)`;
});

// /////////
// Events
// /////////

// The full JS cycle, including events

// 1. Select elements (profile picture)
const images = document.querySelectorAll(".student-img");

// 2. Listen to an event (click on profile picture)
// second argument is a JS arrow function called the CALLBACK FUNCTION
images.forEach((image) => {
  image.addEventListener("click", (event) => {
    console.log(event);
    console.log("inside");
    // 3. Change the DOM (add the class)
    const clickedImg = event.currentTarget;
    clickedImg.classList.toggle("selected");
  });
});
console.log("outside");


// The full JS cycle, advanced! 💪

// 1. Select elements (selectAllBtn, 3 checkboxes)
const selectAllBtn = document.querySelector("#select-all");
const checkboxes = document.querySelectorAll(".form-check-input");

let isSelected = false;

// 2. Listen to an event (click on selectAllBtn btn)
selectAllBtn.addEventListener("click", (event) => {
  console.log(event);
  isSelected = !isSelected;
  event.currentTarget.innerText = isSelected ? "Unselect All" : "Select All"
  // 3. Change the DOM (turn checked to true) 
  checkboxes.forEach((checkbox) => {
    checkbox.checked = isSelected;
  });
});
