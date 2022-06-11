// document.getElementById("jobName").onclick = function () {
//   open();
// };
// let container1 = document.getElementById("1");
// function open() {
//   container1.classList.toggle("show");
// }

// document.getElementById("place").onclick = function () {
//   open2();
// };
// let container2 = document.getElementById("2");
// function open2() {
//   container2.classList.toggle("show");
// }

document.getElementById("btn-filter").onclick = function () {
  open3();
};
let container3 = document.getElementById("3");
function open3() {
  container3.classList.toggle("show");
}

var jobs = [
  {
    jobName: "a",
    company: "FPT",
    salary: "3.000.000d",
    city: "Ha Noi",
    level: "student",
    time: "1-week",
    status: "nhan-vien-chinh-thuc",
    benefit: "che-do-bao-hiem",
  },
  {
    jobName: "b",
    company: "Zing",
    salary: "6.000.000d",
    city: "Ho Chi Minh",
    level: "student",
    time: "3-days",
    status: "nhan-vien-chinh-thuc",
    benefit: "du-lich",
  },
  {
    jobName: "c",
    company: "Vin",
    salary: "9.000.000d",
    city: "Da Nang",
    level: "employee",
    time: "3-days",
    status: "thoi-vu-tu-do",
    benefit: "du-lich",
  },
  {
    jobName: "d",
    company: "Zoo",
    salary: "5.000.000d",
    city: "Campodia",
    level: "employee",
    time: "1-week",
    status: "thoi-vu-tu-do",
    benefit: "che-do-bao-hiem",
  },

  {
    jobName: "JAV actor",
    company: "JAV",
    salary: "5.000.000d",
    city: "Japan",
    level: "employee",
    time: "3-days",
    status: "thoi-vu-tu-do",
    benefit: "du-lich",
  },

  {
    jobName: "Dealer",
    company: "Casino",
    salary: "9.000.000d",
    city: "Hong Kong",
    level: "student",
    time: "1-week",
    status: "nhan-vien-chinh-thuc",
    benefit: "che-do-bao-hiem",
  },
];

for (let job of jobs) {
  document.getElementById("contentTable").innerHTML += `
    <tr>
        <td>${job.jobName}</td>
        <td>${job.company}</td>
        <td>${job.salary}</td>
        <td>${job.city}</td>
        <td>${job.level}</td>
        <td>${job.time}</td>
        <td>${job.status}</td>
        <td>${job.benefit}</td>
      </tr>
    `;
}

document.getElementById("btn-search").onclick = function () {
  let company = document.getElementById("company").value;
  let jobName = document.getElementById("jobName").value;
  let city = document.getElementById("city").value;
  let salary = document.getElementById("salary").value;
  let level = document.getElementById("level").value;
  let time = document.getElementById("time").value;
  let status = document.getElementById("status").value;
  let benefit = document.getElementById("benefit").value;
  const results = jobs.filter((element) => {
    return (
      element.jobName === jobName ||
      element.company === company ||
      element.city === city ||
      element.salary === salary ||
      element.level === level ||
      element.time === time ||
      element.status === status ||
      element.benefit === benefit
    );
  });
  let innerHTML = "";
  for (let result of results) {
    innerHTML += `
  <tr>
      <td>${result.jobName}</td>
      <td>${result.company}</td>
      <td>${result.salary}</td>
      <td>${result.city}</td>
      <td>${result.level}</td>
      <td>${result.time}</td>
      <td>${result.status}</td>
      <td>${result.benefit}</td>
    </tr>
  `;
  }
  document.getElementById("contentTable").innerHTML = innerHTML;
};
