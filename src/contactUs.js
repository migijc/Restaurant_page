let contentDiv=document.getElementById("content");
export default function loadContactUs() {
    const contactUsTitle=document.createElement("h1")
    contactUsTitle.classList.add("contactUsTitle")
    contactUsTitle.textContent="Contact Us"
    contentDiv.appendChild(contactUsTitle)

    const fillStoreInfoDiv= (function(){
        const storeInfo=document.createElement("div") 
        storeInfo.classList.add("storeInfoContactPage")
        // const hoursAndLocationDiv=document.createElement('div')
        // hoursAndLocationDiv.classList.add("hoursAndLocationContactPage")
        const infoTitle=document.createElement('h1')
        infoTitle.classList.add("infoTitleCP")
        infoTitle.textContent="Reach us Here";
        const address=document.createElement('p')
        address.classList.add("addressCP")
        address.textContent="555 NW 55th St,\r\n Nowhere, Neptune 55555\r\n (555) 555-5555\r\n reservations@fakerestaurants.com";
        // storeInfo.appendChild(hoursAndLocationDiv);
        storeInfo.appendChild(infoTitle)
        storeInfo.appendChild(address)
  
       
        contentDiv.appendChild(storeInfo)
        

    })();

    const createFooter=(function(){
        const footer=document.createElement("div");
        footer.classList.add("footer")
        footer.textContent="Developed by Miguel Gil"
        contentDiv.appendChild(footer)
    })();
}