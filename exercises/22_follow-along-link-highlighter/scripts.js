const links = document.querySelectorAll(`a`);
const highlight = document.createElement(`span`);
highlight.classList.add(`highlight`);
document.body.appendChild(highlight);

// function highlightLink() {
//   const linkCoords = this.getBoundingClientRect();
//   console.log(linkCoords);
//   const coords = {
//     width: linkCoords.width,
//     height: linkCoords.height,
//     top: linkCoords.top + window.scrollY,
//     left: linkCoords.left + window.scrollX
//   };
//   highlight.style.width = `${coords.width}px`;
//   highlight.style.height = `${coords.height}px`;
//   highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
// }

function highlightLink(evt) {
  highlight.style.width = `${evt.toElement.offsetWidth}px`;
  highlight.style.height = `${evt.toElement.offsetHeight}px`;
  highlight.style.top = `${evt.toElement.offsetTop}px`;
  highlight.style.left = `${evt.toElement.offsetLeft}px`;
}

links.forEach(link => link.addEventListener(`mouseenter`, highlightLink));
