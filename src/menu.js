import logo from "./img/logo.png"

let contentDiv=document.getElementById("content")

export default function menuLoad(){
        let appetizers=[]
    const fillContentDiv=(function(){
        const pageTitle= document.createElement("h1")
        pageTitle.textContent="Menu"
        pageTitle.classList.add("menuPageTitle")
        contentDiv.appendChild(pageTitle)
        const menuDiv=document.createElement("div")
        menuDiv.classList.add('menuDiv')

        const appetizerDiv=document.createElement("div")
        appetizerDiv.classList.add("appetizerDiv")
        const appetizerTitle=document.createElement('h3')
        appetizerTitle.classList.add("appetizerTitle")
        appetizerTitle.textContent="Appetizers"
        appetizerDiv.appendChild(appetizerTitle)
        const AppetizerFactory= function(name,description, price){
            name=name;
            price=price;
            description=description;

            return{name, description, price}
        }
        appetizers.push(AppetizerFactory("SakeCocktail", "Thin slices of salmon and avocado in our special house sauce", 22))
        appetizers.push(AppetizerFactory("Edamame", "Soybean pods sprinkled with sea salt", 12))
        appetizers.push(AppetizerFactory("Gyozas", "Steamed pork dumplings (service of 8)", '9.50'))
        appetizers.push(AppetizerFactory("Shumai", "Steamed shrimp dubling", "11.50"))
        

        appetizers.forEach((appetizer)=>{
            let appetizerItem=document.createElement('div') 
            appetizerItem.classList.add(appetizer.name)
            let appetizerName=document.createElement("p")
            appetizerName.textContent=`${appetizer.name}` + "   ..." + `${appetizer.price}`
            appetizerName.classList.add('appetizerNameTitle')
            let appetizerDescription=document.createElement("p")
            appetizerDescription.textContent=appetizer.description
            appetizerDescription.classList.add("appDescription")
            appetizerItem.appendChild(appetizerName)
            appetizerItem.appendChild(appetizerDescription)
            console.log(appetizerItem)
            appetizerDiv.appendChild(appetizerItem)
        })
        

        let food=[]
        let drinks=[]
        const foodDiv=document.createElement("div")
        foodDiv.classList.add("foodDiv")
        const foodTitle=document.createElement('h3')
        foodTitle.classList.add("drinksTitle")
        foodTitle.textContent="Fresh Seafood"
        foodDiv.appendChild(foodTitle)
        const FoodsFactory= function(name,description, price){
            name=name;
            description=description;
            price=price;
            return{name,description, price}
        }

        food.push(FoodsFactory("Tuna Salmon Poke Bowl", "Sesame seeds, mango, avocado, cucumber, massago and edamame", 18))
        food.push(FoodsFactory("The Ocean Poke Bowl", "Tuna, salmon, yellowtail , ikura, masago, scallion, avocado, mango and edamame, cucumber, asparagus, sesame", 27))
        food.push(FoodsFactory("Coconut Shrimp Platter", "9 pieces,Jumbo crispy fried shrimp with coconut flakes", 27))
        food.push(FoodsFactory("Fillet Fish", "Fillet fried fish with choice of ginger sauce, garlic sauce, basil sauce, or Lava sauce", 17))
        food.push(FoodsFactory("Lobster Pad Thai", "Stir rice noodle with eggs, lobster, scallion, bean spouts, ground peanuts with pad Thai sauce", 24))
        food.push(FoodsFactory("Salmon Teriyaki", "Grilled salmon bedded on mixed vegetable and teriyaki sauce (7 oz)", 21))
        food.push(FoodsFactory("Soft Shell Crab", "With lettuce,scallion, and spicy mayo", 16))

        food.forEach((foods)=>{
            let foodItem=document.createElement('div') 
            foodItem.classList.add("drinks")
            let foodName=document.createElement("p")
            foodName.textContent=`${foods.name}` + "   ..." + `${foods.price}`
            foodName.classList.add('appetizerNameTitle')
            let foodDescription=document.createElement("p")
            foodDescription.textContent=foods.description;
            foodDescription.classList.add("appDescription")
            foodItem.appendChild(foodName)
            foodItem.appendChild(foodDescription)
            foodDiv.appendChild(foodItem)
        })

        

        
        const drinksDiv=document.createElement("div")
        drinksDiv.classList.add("drinksDiv")
        const drinksTitle=document.createElement('h3')
        drinksTitle.classList.add("drinksTitle")
        drinksTitle.textContent="Drinks"
        drinksDiv.appendChild(drinksTitle)
        const DrinksFactory= function(name,description, price){
            name=name;
            description=description;
            price=price;
            return{name,description, price}
        }

        drinks.push(DrinksFactory("Soft-Drinks", "Coke, Sprite, Fanta, Root Beer", 4))
        drinks.push(DrinksFactory("DraftBeers", "Heineken, Corona, Bud Light", 6))


        drinks.forEach((drink)=>{
            let drinkItem=document.createElement('div') 
            drinkItem.classList.add("drinks")
            let drinkName=document.createElement("p")
            drinkName.textContent=`${drink.name}` + "   ..." + `${drink.price}`
            drinkName.classList.add('appetizerNameTitle')
            let drinkDescription=document.createElement("p")
            drinkDescription.textContent=drink.description;
            drinkDescription.classList.add("appDescription")
            drinkItem.appendChild(drinkName)
            drinkItem.appendChild(drinkDescription)
            console.log(drinkItem)
            drinksDiv.appendChild(drinkItem)
        })
       



        menuDiv.appendChild(appetizerDiv);
        menuDiv.appendChild(foodDiv)
        menuDiv.appendChild(drinksDiv);

        contentDiv.appendChild(menuDiv)
    })();
   
    const createFooter=(function(){
        const footer=document.createElement("div");
        footer.classList.add("footer")
        footer.textContent="Developed by Miguel Gil"
        contentDiv.appendChild(footer)
    })();

}