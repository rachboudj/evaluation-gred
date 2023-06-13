// 1) Créez une page web avec plusieurs paragraphes de texte. Ajoutez des boutons qui changent la couleur de tous les paragraphes en rouge, vert ou bleu.
const p = document.getElementsByClassName("paragraphe")

function textVert() {
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "green";
        console.log("cliiique");
    }
}

function textRouge() {
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "red";
        console.log("cliiique");
    }
}

function textBleu() {
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "blue";
        console.log("cliiique");
    }
}


// 3) Utilisez JavaScript pour créer un bouton qui, lorsqu'on clique dessus, crée un nouvel élément div avec un texte à l'intérieur et l'ajoute à la fin du body.
function ajouterTexte() {
    let div = document.createElement("div");

    let texte = document.createTextNode("Tu vas devenir milliardaire.");
    div.appendChild(texte);

    document.body.appendChild(div);
}

// 6) Créez un carrousel d'images. Les utilisateurs doivent pouvoir cliquer sur des boutons "précédent" et "suivant" pour faire défiler les images.
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 } 
    if (n < 1) { slideIndex = slides.length } 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i2;
    let slides2 = document.getElementsByClassName("mySlides2");
    if (n > slides2.length) { slideIndex2 = 1 } 
    if (n < 1) { slideIndex2 = slides2.length }
    for (i2 = 0; i2 < slides2.length; i2++) {
        slides2[i2].style.display = "none";
    }
    slides2[slideIndex2 - 1].style.display = "block";
}

// 9) 
const burgerButton = document.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const ancreBurger = document.querySelector(".ancre-burger");

function openMenu() {
    if (burgerButton) {
        console.log("clique sur le btn burgeeer");
            burgerMenu.classList.toggle("active");
    }
}