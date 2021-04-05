alert("Bonjour")
// détecter lorsqu'on scroll
window.onscroll = function() {sticky() } ;

// récupérer les élements 
let header = document.getElementById("sticky-header");

// Position sur la page du  menu coordonnée par défaut
let stickycomponent = header.offsetTop;

// faire la fonction 
function sticky() {
    console.log(window.pageYOffset);
if (window.pageYOffset > stickycomponent){
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
}
}