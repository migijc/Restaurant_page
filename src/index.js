import css from "./style.css";
import pageLoad from "./load.js";
import menuLoad from "./menu";
import logo from "./img/logo.png"


const homeButton=document.createElement("button")
const menuButton=document.createElement("button")
const contactUsButton=document.createElement("button")
let selectedPage= homeButton
const contentDiv=document.getElementById("content")

const createHeader=(function(){
    const headerDiv=document.createElement('div')
    headerDiv.classList.add('headerDiv')
    const pageLogo=document.createElement('img')
    pageLogo.classList.add("logo")
    const logoPicture=logo
    pageLogo.src=logoPicture
    const buttonsDiv=document.createElement('div')
    buttonsDiv.classList.add("buttonsDiv")
    let header=document.createElement("div")
    header.classList.add("header")
    document.body.insertBefore(header, contentDiv)
    // const homeButton=document.createElement("button")
    // const menuButton=document.createElement("button")
    // const contactUsButton=document.createElement("button")

    homeButton.textContent="Home"
    homeButton.classList.add("home")
    homeButton.classList.add("currentPage")
    menuButton.textContent="Menu"
    menuButton.classList.add("menu")
    contactUsButton.textContent="Contact Us"
    contactUsButton.classList.add("contactUs")
    document.body.appendChild(pageLogo)
    buttonsDiv.appendChild(homeButton)
    buttonsDiv.appendChild(menuButton)
    buttonsDiv.appendChild(contactUsButton)
    headerDiv.appendChild(buttonsDiv)
    document.body.insertBefore(headerDiv, contentDiv)
})();


menuButton.addEventListener("click", ()=>{
    if (homeButton.classList=="home currentPage"){
        homeButton.classList.remove("currentPage")
    } else if(contactUsButton.classList=="contactUs currentPage"){
        contactUsButton.classList.remove("currentPage")
    }
   menuButton.classList.add("currentPage")
   contentDiv.replaceChildren();
    menuLoad()
})

homeButton.addEventListener("click", ()=>{
    if (menuButton.classList=="menu currentPage"){
        menuButton.classList.remove("currentPage")
    } else if(contactUsButton.classList=="contactUs currentPage"){
        contactUsButton.classList.remove("currentPage")
    }
    homeButton.classList.add("currentPage")
    contentDiv.replaceChildren();
     pageLoad()
 })

 contactUsButton.addEventListener("click", ()=>{
    if (homeButton.classList=="home currentPage"){
        homeButton.classList.remove("currentPage")
    } else if(menuButton.classList=="menu currentPage"){
        menuButton.classList.remove("currentPage")
    }
    contactUsButton.classList.add("currentPage")
    contentDiv.replaceChildren();
    contentDiv.classList.add("contactUs")
    //  pageLoad()
 })

pageLoad()
// menuLoad();
// document.open()
