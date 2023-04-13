const select = document.querySelector(".sel");
const pick = document.querySelector(".pick");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const convert = document.querySelector("button");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => {
    return data.json();
  })
  .then((data) => display(data));

function display(x) {
  const entries = Object.entries(x);
  // console.log(entries[i][1])
  for (let i = 0; i < entries.length; i++) {
    select.insertAdjacentHTML(
      "beforeend",
      `<option value="${entries[i][0]}">${entries[i][1]}</option>`
    );
    pick.insertAdjacentHTML(
      "beforeend",
      `<option value="${entries[i][0]}">${entries[i][1]}</option>`
    );
  }
}

convert.addEventListener("click", function () {
  currency1 = select.value;
  currency2 = pick.value;
  // console.table()
  value = input.value;

  if (currency1 != currency2) {
  convert(currency1, currency2, value);  function convert(currency1, currency2, value) {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    )
      .then((val) => val.json())
      .then((val) => {
        // console.log(Object.values(val.rates)[0]);
        result.value = Object.values(val.rates)[0];
      });
  }
  } else {
    alert("u no well");
  }
});

