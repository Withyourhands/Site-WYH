const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// aabout container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// product contaainer
ScrollReveal().reveal(".product__card", {
  ...scrollRevealOption,
  interval: 500,
});

// article contaainer
ScrollReveal().reveal(".article__card", {
  ...scrollRevealOption,
  interval: 500,
});


// DEUXIEME JAVASCRIPT

  // Fonction pour basculer entre le mode sombre et le mode clair
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }
  
  // Fonction pour gérer le clic sur le slider
  function handleSliderClick() {
    var slider = document.getElementById("slider");
    slider.classList.toggle("active");
    toggleDarkMode();
  }
  
  // Attacher l'événement de clic au slider
  var slider = document.getElementById("slider");
  slider.addEventListener("click", handleSliderClick);
  
  function calculer() {
    // Obtenir lesentrées de l'utilisateur du tableau N°1
    var hauteur = parseFloat(document.getElementById("hauteur").value);
    var largeur = parseFloat(document.getElementById("largeur").value);
    var profondeur = parseFloat(document.getElementById("profondeur").value);
    var epaisseurBois = parseFloat(document.getElementById("epaisseurBois").value);
  
     
    // Obtenir les entrées de l'utilisateur du tableau N°2
    var nombreTiroirs = parseInt(document.getElementById("nombreTiroirs").value);
    var espaceTiroirs = parseFloat(document.getElementById("espaceTiroirs").value);
    var espaceFond = parseFloat(document.getElementById("espaceFond").value);
    var espaceHaut = parseFloat(document.getElementById("espaceHaut").value);
    var espaceFacade = parseFloat(document.getElementById("espaceFacade").value);
    var epaisseurBois2 = parseFloat(document.getElementById("epaisseurBois2").value);
    var epaisseurGlissieres = parseFloat(document.getElementById("epaisseurGlissieres").value);
    var epaisseurFacade = parseFloat(document.getElementById("epaisseurFacade").value);
    var tiroirApplique = document.getElementById("tiroirApplique").checked;
    var tiroirEncastre = document.getElementById("tiroirEncastre").checked;
  
    // Calculer la hauteur de faces avant et arrière
    var hauteurFaces = hauteur - espaceHaut;
    document.getElementById("resultatHauteurFaces").textContent = hauteurFaces.toFixed(2);
  
    // Calculer la largeur de faces avant et arrière
    var largeurFaces = largeur - (2 * epaisseurGlissieres) - (2 * epaisseurBois2);
    document.getElementById("resultatLargeurFaces").textContent = largeurFaces.toFixed(2);
  
    // Calculer la hauteur des côtés
    var hauteurCotes = hauteurFaces;
    document.getElementById("resultatHauteurCotes").textContent = hauteurCotes.toFixed(2);
  
    // Calculer la largeur des côtés
    var largeurCotes;
    if (tiroirEncastre) {
      largeurCotes = profondeur - espaceFond - epaisseurFacade;
    } else if (tiroirApplique) {
      largeurCotes = profondeur - espaceFond ;
    }
    document.getElementById("resultatLargeurCotes").textContent = largeurCotes.toFixed(2);
  
    // Calculer la hauteur de la façade
    var hauteurFacade;
    if (tiroirEncastre) {
      hauteurFacade = hauteur - (2 * espaceFacade);
    } else if (tiroirApplique) {
      hauteurFacade = hauteur + (2 * epaisseurBois);
    }
    document.getElementById("resultatHauteurFacade").textContent = hauteurFacade.toFixed(2);
  
    // Calculer la largeur de la façade
    var largeurFacade;
    if (tiroirEncastre) {
      largeurFacade = largeur - (2 * espaceFacade);
    } else if (tiroirApplique) {
      largeurFacade = largeur + (2 * epaisseurBois);
    }
    document.getElementById("resultatLargeurFacade").textContent = largeurFacade.toFixed(2);
  
    // Calculer la hauteur du fond
    var hauteurFond = largeurFaces + 10;
    document.getElementById("resultatHauteurFond").textContent = hauteurFond.toFixed(2);
  
    // Calculer la largeur du fond
    var largeurFond = largeurCotes - (2 * epaisseurBois2) + 10;
    document.getElementById("resultatLargeurFond").textContent = largeurFond.toFixed(2);
  }
  
  // Sélectionner le bouton de calcul
  var calculateButton = document.getElementById("calculate-button");
  
  // Attacher l'événement de clic au bouton de calcul
  calculateButton.addEventListener("click", calculer);
  
  // Sélectionner le conteneur du menu
  var menuContainer = document.querySelector('.menu');
  
  // Fonction pour mettre à jour la classe du conteneur du menu
  function updateMenuClass() {
    if (window.pageYOffset > menuContainer.offsetTop) {
      menuContainer.classList.add('fixed-menu');
    } else {
      menuContainer.classList.remove('fixed-menu');
    }
  }

  // Sélectionnez le bouton d'impression
  function imprimerTableau() {
    var tableau = document.querySelector('.print-table-n3');
    var autreContenu = document.querySelectorAll('body > *:not(.print-table-n3)');
  
    // Cacher tous les autres éléments de la page sauf le tableau à imprimer
    autreContenu.forEach(function (element) {
      element.style.display = 'none';
    });
  
    // Créer une fenêtre pour afficher uniquement le tableau
    var nouvellePage = window.open('', '', 'width=800, height=600');
    nouvellePage.document.write('<html><head><title>Tableau</title></head><body>');
    nouvellePage.document.write(tableau.outerHTML);
    nouvellePage.document.write('</body></html>');
    nouvellePage.document.close();
  
    // Imprimer le contenu
    nouvellePage.print();
  
    // Réafficher les éléments cachés après l'impression
    autreContenu.forEach(function (element) {
      element.style.display = '';
    });
  }
  
  
