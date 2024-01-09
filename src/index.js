function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "484c5880942e8bc04a5205c53o4et26f";
  let prompt = `User instructions: Generate an english poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to write a poem with EXACTLY 4 lines in basic HTML and separate each line with a < /br>. Do not include a title to the poem. Make sure to follow the user instructions. Sign the poem with `Shecodes AI` inside a <strong> element at the END of the poem, always at the end, NOT - NEVER - at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating an english poem about ${instructionsInput.value}...<blink/>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemGeneratorElement = document.querySelector("#poem-generator");
poemGeneratorElement.addEventListener("submit", generatePoem);
