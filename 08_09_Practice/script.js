/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: {
    name: "Frog",
    src: "../../assets/images/frog.svg",
    alt: "A cute frog",
    description: "A cute frog sitting on a lily pad",
    width:100,
    height:100
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

const createFigure = (objectImg) =>{
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.setAttribute("src",objectImg.image.src);
  img.setAttribute("alt",objectImg.image.alt);
  img.setAttribute("width",`${objectImg.image.width}px`);
  img.setAttribute("height",`${objectImg.image.height}px`);
  const figcaption = document.createElement("figcaption");
  figcaption.textContent = objectImg.image.description;
  figure.append(img, figcaption);
  return figure;
}


const createArticle = (content) =>{
  const article = document.createElement("article");
  article.innerHTML=content;
  article.prepend(createFigure(frogpack));
  return article;
}

document.querySelector("main").append(createArticle(content));