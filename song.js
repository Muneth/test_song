const form = document.getElementById("form");
const input = document.getElementById("input");
const song = document.getElementById("song");
const small = document.querySelector(".small");

// Restrict Values between 0 - 99

input.addEventListener("change", () => {
  let v = parseInt(this.value);
  if (v < 0) this.value = 0;
  if (v > 99) this.value = 99;
});

form.addEventListener("submit", (e) => {
  //prevent the normal submission of the form
  e.preventDefault();

  checkInputs();
  checkPhrase();
});

function checkInputs() {
  if (input.value === "") {
    small.className = "error small";
    small.innerText = "Please enter a value";
  } else {
    small.className = "small";
  }
}

function checkPhrase() {
  if (input.value === "") {
    return;
  } else if (input.value === "1") {
    song.insertAdjacentHTML(
      "beforeend",
      `<br />
        1 bolée de cidre sur le mur, 1 bolée sans alcool.
        <br />
        Bois en un et au suivant ! Plus de bolées de cidre sur le mur. <br />`
    );
  } else if (input.value >= 2) {
    song.insertAdjacentHTML(
      "beforeend",
      `<br />
          "${input.value} bolées de cidre sur le mur, ${
        input.value
      } bolées sans alcool.
          <br />
           Bois en un  et au suivant ! ${
             input.value - 1
           } bolées de cidre sur le mur." <br />`
    );
  } else {
    song.insertAdjacentHTML(
      "beforeend",
      `<br />
      Plus de bolées de cidre sur le mur, plus de bolées sans alcool.
      <br /> Vas
      au supermarché pour en acheter, 99 bolées de cidre sur le mur. <br />`
    );
  }
}
