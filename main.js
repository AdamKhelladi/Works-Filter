// Create Our Works Filter

// Method One: 

// let switcher = document.querySelectorAll("ul li");
// let galleryDivs = document.querySelectorAll(".gallery div");

// let allWork = document.querySelector('li[data-cat=".all"]');
// let web = document.querySelector('li[data-cat=".web"]');
// let graphic = document.querySelector('li[data-cat=".gfx"]');
// let marketing = document.querySelector('li[data-cat=".marketing"]');

// window.onload = () => {
//   allWork.classList.add("active");
//   galleryDivs.forEach((element) => {
//     element.style.display = "block";
//   });
// }

// allWork.addEventListener("click", () => {
//   displayNone();
//   removeActiveClass();
//   allWork.classList.add("active");

//   galleryDivs.forEach((element) => {
//     element.style.display = "block";
//   });
// });

// web.addEventListener("click", () => {
//   displayNone();
//   removeActiveClass();
//   web.classList.add("active");

//   galleryDivs.forEach((element) => {
//     if (element.classList.contains("web")) {
//       element.style.display = "block";
//     }
//   });
// });

// graphic.addEventListener("click", () => {
//   displayNone();
//   removeActiveClass();
//   graphic.classList.add("active");

//   galleryDivs.forEach((element) => {
//     if (element.classList.contains("gfx")) {
//       element.style.display = "block";
//     }
//   });
// });

// marketing.addEventListener("click", () => {
//   displayNone();
//   removeActiveClass();
//   marketing.classList.add("active");

//   galleryDivs.forEach((element) => {
//     if (element.classList.contains("marketing")) {
//       element.style.display = "block";
//     }
//   });
// });

// function removeActiveClass() {
//   switcher.forEach((element) => {
//     element.classList.remove("active");
//   });
// }

// function displayNone() {
//   galleryDivs.forEach((element) => {
//     element.style.display = "none";
//   });
// }

// ###############################

// Method Two: 

let switcherLis = document.querySelectorAll(".switcher li");
let galleryDivs = document.querySelectorAll(".gallery div");

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageDivs);
})

function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  })
}

function manageDivs() {
  galleryDivs.forEach((div) => {
    div.style.display = "none";
  }) 
  document.querySelectorAll(this.dataset.cat).forEach((element) => {
    element.style.display = "block";
  })
}