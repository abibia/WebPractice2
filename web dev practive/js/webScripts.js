const themeLink = document.getElementById("theme-link");

function getCurrentTheme()
{
  if (!themeLink) return "light";
  const href = themeLink.getAttribute("href") || "";
  return href.split("?")[0].endsWith("dark.css") ? "dark" : "light";
}


function toggleTheme() {
  const newTheme = getCurrentTheme() === "dark" ? "light" : "dark";
  themeLink.setAttribute("href", "css/"+newTheme+".css");
}

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector(".lightDarkB");
    if (themeButton) {
        themeButton.onclick = toggleTheme;
    }

})

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function navigationBar() {
    const x = document.getElementById("myTopnav");
    if (x.className === "navigationBar") {
        x.className += " responsive";
    } else {
        x.className = "navigationBar";
    }
}

// Get the button:
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


