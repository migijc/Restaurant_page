
import plateTwo from "./img/plate2.jpg"
import location from "./img/location.jpg"
import quotePic from "./img/foodQuotePic.jpg"
import logo from "./img/logo.png"
import { header } from "./common"


const common= require('./index.js') 


export default function pageLoad(){
    const fillContentDiv= (function(){
        const aboutUsDiv=document.createElement('div')
        aboutUsDiv.classList.add("aboutUsDiv")
        const headline=document.createElement("h1")
        headline.textContent="Seafood for the Soul"
        aboutUsDiv.appendChild(headline)
        const mainParagraph= document.createElement("p")
        mainParagraph.textContent="Inspired by the global travels of our team of chefs and the discipline of Japanese wood-fired grilling known as yakiniku, This fake restauant offers a rich exploration of interpretive Asian cooking. From our open kitchens, you will discover a world of expertly grilled umami-rich meats, smoke-roasted short ribs, innovative fish and beguiling vegetable preparations, hamachi Crudo, and pork belly baos, and Thai “stone pot” fried rice, along with fabulous hand-crafted cocktails and stunning signature desserts. With award-winning restaurants in Miami, New York, and Mexico City, this fake restaurant’s unique brand is ready to expand to Las Vegas, Los Angeles, and London. We welcome you with open arms."
        const pictureDiv=document.createElement('div')
        pictureDiv.classList.add("pictureDiv")
        const miamiPic=document.createElement("img");
        const mexicoPic=document.createElement("img");
        const plate2Picture=plateTwo
        const locationPicture=location
        miamiPic.src=plate2Picture
        mexicoPic.src=locationPicture
        miamiPic.classList.add("miamiPic")
        mexicoPic.classList.add("mexicoPic")

        const contactPicHeader=document.createElement("p")
        const pictureClicked =(function(){
            mexicoPic.addEventListener("mouseenter", ()=>{
                mexicoPic.classList.add("hovered")
                contactPicHeader.classList.add("contactPicHeader")
                contactPicHeader.textContent="Contact Us"
                contentDiv.appendChild(contactPicHeader)
            })
            mexicoPic.addEventListener("mouseleave", ()=>{
                mexicoPic.classList.remove("hovered")
                contentDiv.removeChild(contactPicHeader)
            })
        })();
    
        const menuPicHeader=document.createElement("p")
        const miamiPictureClicked=(function(){
            miamiPic.addEventListener("mouseenter", ()=>{
                miamiPic.classList.add("hovered")
                menuPicHeader.classList.add("menuPicHeader")
                menuPicHeader.textContent="Menu"
                contentDiv.appendChild(menuPicHeader)
            })
            miamiPic.addEventListener("mouseleave", ()=>{
                miamiPic.classList.remove("hovered")
                contentDiv.removeChild(menuPicHeader)
            })
        })();
        
        pictureDiv.appendChild(miamiPic)
        pictureDiv.appendChild(mexicoPic)
        aboutUsDiv.appendChild(mainParagraph)
        aboutUsDiv.appendChild(pictureDiv)
        contentDiv.appendChild(aboutUsDiv)

    })();

    const createPicAndQuote=(function(){
        const picForQuote=quotePic
        const picAndQuoteDiv=document.createElement("div")
        picAndQuoteDiv.classList.add("picAndQuote")
        const quote=document.createElement("p")
        quote.textContent='"Fish are friends but some are food"'
        quote.classList.add("quote")
        picAndQuoteDiv.appendChild(quote)
        contentDiv.appendChild(picAndQuoteDiv)
    })();

    const fillStoreInfoDiv= (function(){
        const storeInfo=document.createElement("div") 
        storeInfo.classList.add("storeInfo")
        const hoursAndLocationDiv=document.createElement('div')
        hoursAndLocationDiv.classList.add("hoursAndLocation")
        const infoTitle=document.createElement('h1')
        infoTitle.classList.add("infoTitle")
        infoTitle.textContent="Hours & \r\n Location";
        const address=document.createElement('p')
        address.classList.add("address")
        address.textContent="555 NW 55th St,\r\n Nowhere, Neptune 55555\r\n (555) 555-5555\r\n reservations@fakerestaurants.com";
        storeInfo.appendChild(hoursAndLocationDiv);
        hoursAndLocationDiv.appendChild(infoTitle)
        hoursAndLocationDiv.appendChild(address)
        const hoursDiv=document.createElement('div');
        hoursDiv.classList.add("hours")
        const weekdaysHeader=document.createElement('h2')
        weekdaysHeader.classList.add("weekdays")
        weekdaysHeader.textContent="Monday - Saturday"
        const weekdayHours=document.createElement('p')
        weekdayHours.classList.add("weekdayHours")
        weekdayHours.textContent= "12:00pm - 10:30pm (last seating)\r\n (Kitchen closes at 10:45 PM"
        const sundayBrunchHeader=document.createElement("h2")
        sundayBrunchHeader.classList.add("sundays")
        sundayBrunchHeader.textContent= "Sunday Brunch";
        const sundayBrunchHours=document.createElement("p");
        sundayBrunchHours.classList.add("sundayHours")
        sundayBrunchHours.textContent="11:00am - 3:00pm"
        const sundayNightHeader=document.createElement("h2")
        sundayNightHeader.classList.add("sundays")
        sundayNightHeader.textContent= "Sunday Night";
        const sundayNightHours=document.createElement("p");
        sundayNightHours.classList.add("sundayHours")
        sundayNightHours.textContent="3:00pm - 10:15pm (last seating)\r\n (Kitchen closes at 10:30 PM"
        hoursDiv.appendChild(weekdaysHeader)
        hoursDiv.appendChild(weekdayHours)
        hoursDiv.appendChild(sundayBrunchHeader)
        hoursDiv.appendChild(sundayBrunchHours)
        hoursDiv.appendChild(sundayNightHeader)
        hoursDiv.appendChild(sundayNightHours)
        contentDiv.appendChild(storeInfo)
        storeInfo.appendChild(hoursDiv)

    })();
    
    const createFooter=(function(){
        const footer=document.createElement("div");
        footer.classList.add("footer")
        footer.textContent="Developed by Miguel Gil"
        contentDiv.appendChild(footer)
    })();
    
}

  let contentDiv=document.getElementById("content")

