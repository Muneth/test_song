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
  song.innerHTML = "";
  renderSong(+input.value);
  checkInputs();
  setTimeout(() => {
    clearAll();
  }, 3000);
});

// Checking that input value is not empty

const checkInputs = () => {
  if (input.value === "") {
    small.className = "error small";
    small.innerText = "Please enter a value";
    song.innerHTML = "";
  } else {
    small.className = "small";
  }
}

// Renderring song as per input 

const renderSong = (currentBollee) => {
  const nextBollee = currentBollee - 1;

  const accordWordIfPlural = (bollee) => (bollee !== 1 ? "s" : "");
  const diplayNumberOfBollee = (bollee) => (bollee > 0 ? bollee : "plus de");

  const lyrics =
    currentBollee === 0
      ? `Plus de bolées de cidre sur le mur, plus de bolées sans alcool.
         <br /> 
         Vas au supermarché pour en acheter, 99 bolées de cidre sur le mur.`
      : 
        `${diplayNumberOfBollee(currentBollee)} bolée${accordWordIfPlural(currentBollee)} de cidre sur le mur, 
         ${diplayNumberOfBollee(currentBollee)} bolée${accordWordIfPlural(currentBollee)} sans alcool.
         <br />
         Bois en un  et au suivant ! 
         ${diplayNumberOfBollee(nextBollee)} bolée${accordWordIfPlural(nextBollee)} de cidre sur le mur.`;
  song.insertAdjacentHTML("beforeend", lyrics);
};

// Clear screen

const clearAll = () => {
  song.innerHTML = "";
  input.value = "";
  small.className = "small";
}