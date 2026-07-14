// Message de bienvenue
window.addEventListener("load", function() {
    setTimeout(function() {
        alert("Bienvenue à Prestige, Déco & Traiteur ❤");
    }, 700);
});

// Menu actif au clic
const liensMenu = document.querySelectorAll("nav a");

liensMenu.forEach(function(lien) {
    lien.addEventListener("click", function() {
        liensMenu.forEach(function(item) {
            item.classList.remove("active");
        });
        lien.classList.add("active");
    });
});

