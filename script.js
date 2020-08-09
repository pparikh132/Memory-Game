const gameContainer = document.getElementById("game");
const restartButton = document.createElement("button");

restartButton.innerText = "Restart";

document.body.appendChild(restartButton);
let counter = 0;
let score = 0;
var lastEvent;
scoreTag = document.createElement('h1');
scoreTag.id = "score";
scoreTag.innerText = `Score: ${score}`;
document.body.prepend(scoreTag);
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  
  if (counter < 2) {
    counter++;
    event.target.style.backgroundColor = event.target.className;
    if (counter == 2) {
      if (event.target.className === lastEvent.target.className 
        && event.target !== lastEvent.target) {
          score++;
          scoreTag.innerText = `Score: ${score}`;
      }
      else {
        setTimeout(function() {
          event.target.style.backgroundColor = "white";
          lastEvent.target.style.backgroundColor = "white";
        }, 1000);

      }
      counter = 0;
    }
    else {
      lastEvent = event;
    }
  }
}
  
restartButton.addEventListener("click", restart);

function restart() {
  divList = document.querySelector("#game");
 /* console.log(divList[6])
  for (let i =0; i<divList.length; i++) {
    divList[i].remove();
  } */
  location.reload();
}
// when the DOM loads
createDivsForColors(shuffledColors);
