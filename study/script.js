// const p = document.querySelector(".para");

// const content = p.innerText;

// const words = content.split(" ");
// let count = 0;
// for (let i = 0; i < words.length; i = i + 1) {
//   const word = words[i];
//   if (word.length >= 8) {
//     count++;
//     words[i] = `<mark>${word}</mark>`;
//   }
// }

// const newContent = words.join(" ");

// p.innerHTML = newContent;
// document.title = `Doan van co ${count} tu lon hon 8 ky tu`;

// const fruitList = [
//   "apple",
//   "banana",
//   "tomato",
//   "watermelon",
//   "strawberry",
//   "cherry",
//   "coconut",
// ];

// const ul = document.getElementsByClassName("fruit-list");
// for (let i = 0; i < fruitList.length; i++) {
//   let fruit = fruitList[i];
//   let li = document.createElement("li");
//   // li.appendChild(document.createTextNode(fruit));
//   li.innerHTML = fruit;
//   ul[0].appendChild(li);
// }

// const avatarSrc =
//   "https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300";
// const img = document.createElement("img");
// img.src = avatarSrc;
// const div = document.getElementsByClassName("avatar-box");
// div[0].appendChild(img);
// const list = img.classList;
// list.add("myStyle");

// let last = document.querySelectorAll("ul > li:last-child");
// for (let elem of last) {
//   elem.innerHTML = "last";
// }

// let first = document.querySelectorAll("ul > li:first-child");
// for (let elem of first) {
//   elem.innerHTML = "first";
// }

// Swap first and last elements
// var lists = document.querySelectorAll("ul:not(.fruit-list)");
// for (list of lists) {
//   const firstItem = ul.lastElementChild;
//   const lastItem = ul.lastElementChild;
//   firstItem.textContent = "1st";
//   lastItem.textContent = "last";
//   list.append(firstItem);
//   list.prepend(lastItem);
// }
// const box = document.querySelector(".box");
// let init = 100;

// function expand() {
//   init += 10;
//   box.style.width = width + "px";
// }

// setInterval(expand, 1000);

// var clock = document.getElementsByClassName("clock");

// function time() {
//   const now = new Date();
//   const timeString = now.toLocaleString();
//   clock.textContent = timeString;
// }
// clock();
// setInterval(clock, 1000);

const cities = [
  {
    id: 1,
    locale: "vi",
    name: "Ha Noi",
  },
  {
    id: 2,
    locale: "us",
    name: "New York",
  },
  {
    id: 3,
    locale: "jp",
    name: "Tokyo",
  },
];
const select = document.querySelector("#city");
function createOption(city) {
  const option = document.createElement("option");
  option.textContent = city.name;
  option.value = city.locale;
  return option;
}

function renderOptions(cities) {
  for (let city of cities) {
    const option = createOption(city);

    select.append(option);
  }
}
renderOptions(cities);
