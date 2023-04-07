const select = document.querySelector(".sel");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const convert = document.querySelector("button");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => {
    return data.json();
  })
  .then((data) => display(data));
// fetch("https://api.frankfurter.app/currencies")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.table(data);
//   });

function display(data) {
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    select[0].innerHtml = `<option value="${entries[i][0]}>${entries[i][0]}</option>`;
    select[1].innerHtml = `<option value="${entries[i][0]}>${entries[i][0]}</option>`;
  }
}
