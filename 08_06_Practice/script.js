/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

import BackPack from "./BackPack.js";
// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = new BackPack("Frog Pack", "green",30, 10, 12);
const bluePack = new BackPack("Ocean Pack", "blue",25, 12, 14);
bluePack.newStrapLength(5,6);


// Create the backpack DOM element . Function expression
const backPackDom = function (objectBackpack){
  const backPackELement = document.createElement("section");
  backPackELement.classList.add(`section-${objectBackpack.name.split(' ').join('-')}`);
  backPackELement.setAttribute("id", `backpack-${objectBackpack.name.split(' ')[0]}`);
  backPackELement.innerHTML=`
  <h2>${objectBackpack.name}</h2>
  <p>Color: ${objectBackpack.color}</p>
  <p>Volume: ${objectBackpack.volume}</p>
  <p>Strap Length (Left): ${objectBackpack.strapLength.left}</p>
  <p>Strap Length (Right): ${objectBackpack.strapLength.right}</p>
  `
  return backPackELement;
}

const main = document.querySelector("main");

main.appendChild(backPackDom(greenPack));
main.appendChild(backPackDom(bluePack));
