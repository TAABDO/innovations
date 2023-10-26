/berger menu function

function opennav() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "none") {
      navbar.style.display = "flex";
    } else {
      navbar.style.display = "none";
    }
  }
