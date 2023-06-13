let container = document.getElementsByClassName('nav-bar')
let menu = ["Accueil", "À propos", "Contact"];
let nav = document.getElementsByTagName("nav")[0]
let ul = document.createElement("ul")
let lienImg = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433"
let logo = document.createElement("img")


for (let i = 0; i < menu.length; i++) {
    let li = document.createElement("li")
    let a = document.createElement("a")
    a.textContent = menu[i]
    a.setAttribute("href", menu[i])
    li.appendChild(a)
    ul.appendChild(li)

    logo.setAttribute("src", lienImg)
}
// container.append(logo)
nav.append(logo, ul)

