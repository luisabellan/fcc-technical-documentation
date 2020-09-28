// copyright year on footer

const date = new Date();
const year = date.getFullYear();
const footer = document.querySelector("footer");

const p = document.createElement("p");

p.innerHTML = "&copy; " + year + " Luis Abellan";
p.style.fontFamily = "'Cabin', sans-serif";
footer.appendChild(p);

//toggle button for menu
const menu = document.querySelector("div.img");
const nav = document.querySelector("nav");

//initial state

nav.classList.add("show");
nav.classList.add("hidden");

//menu.style.color = 'red'
const toggle = e => {
  if (nav.classList.contains("hidden")) {
    //menu.style.color = 'red'
    //nav.style.display = 'none'
    nav.classList.remove("hidden");
    menu.style.color = "red";
  } else {
    menu.style.color = "#1e4986";
    nav.classList.add("hidden");
  }
};

menu.addEventListener(
  "click",
  function(e) {
    toggle(e);
  },
  false
);

//click listeners for links in menu
//console.log(nav.children.item)

const about = Array(nav.children)[0][0];
const projects = Array(nav.children)[0][1];
const contact = Array(nav.children)[0][2];
const blog = Array(nav.children)[0][3];

  about.addEventListener(
    "click",
    function(e) {
      toggle(e);
    },
    false
  );

   projects.addEventListener(
     "click",
     function(e) {
       toggle(e);
     },
     false
   );

    contact.addEventListener(
      "click",
      function(e) {
        toggle(e);
      },
      false
    );


    blog.addEventListener(
    "click",
    function(e) {
        toggle(e);
    },
    false
    );


//console.log(about);
