// Edamam API Calls for Recipe
var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';
var searchTerm;

// For sending data for favorite recipes to local storage

var favoriteRecipe = document.querySelector("#iconwrapper");
var bottomSection = document.getElementById("bottom-section")
var recipesEL = document.getElementById('recipe-returns');
var iconIndex = 0;

// These are used with the API response
const searchTermGluten = 'Gluten-Free';
const searchTermPeanut = 'Peanut-Free';
const searchTermVegan = 'Vegan';
const searchTermVegetarian = 'Vegetarian';
const searchTermPork = 'Pork-Free';
const searchTermKosher = 'Kosher';
const searchTermSoy = 'Soy-Free"';
const searchTermEgg = 'Egg-Free';
const searchTermRedMeat = 'Red-Meat-Free';
const searchTermFish = 'Fish-Free'
const searchTermShellfish = 'Shellfish-Free';
const searchTermWheat = 'Wheat-Free'

//These are for the checkboxes
const card = document.getElementsByClassName("card");
const glutenAllergy = document.getElementById('glutenAllergy');
const peanutAllergy = document.getElementById('peanutAllergy');
const vegan = document.getElementById('vegan');
const vegetarian = document.getElementById('vegetarian');
const pork = document.getElementById('porkFree');
const kosher = document.getElementById('kosher');
const soy = document.getElementById('soy');
const drinks = document.getElementById('drinks');
const egg = document.getElementById('egg');
const redMeat = document.getElementById('redMeat');
const fish = document.getElementById('fish');
const shellfish = document.getElementById('shellfish');
const wheat = document.getElementById('wheat');

//Coding Starts Here:

function showDiv(inputSearchTerm) {
    //hide bottom section
    bottomSection.setAttribute("class", "hide");

    searchAPI(inputSearchTerm);
    //un-hide bottom section
    bottomSection.removeAttribute("class");
}

//Event listener to console log and show gluten cards:

glutenAllergy.addEventListener("click", function (e) {
    showDiv(searchTermGluten); //when checked
}, { once: true }); //disable once clicked once

peanutAllergy.addEventListener("click", function (e) {
    showDiv(searchTermPeanut); //when checked
}, { once: true }); //disable once clicked once

vegan.addEventListener("click", function (e) {
    showDiv(searchTermVegan); //when checked
}, { once: true }); //disable once clicked once

vegetarian.addEventListener("click", function (e) {
    showDiv(searchTermVegetarian); //when checked
}, { once: true }); //disable once clicked once

pork.addEventListener("click", function (e) {
    showDiv(searchTermPork); //when checked
}, { once: true }); //disable once clicked once

kosher.addEventListener("click", function (e) {
    showDiv(searchTermKosher); //when checked
}, { once: true }); //disable once clicked once

soy.addEventListener("click", function (e) {
    showDiv(searchTermSoy); //when checked
}, { once: true }); //disable once clicked once

egg.addEventListener("click", function (e) {
    showDiv(searchTermEgg); //when checked
}, { once: true }); //disable once clicked once

redMeat.addEventListener("click", function (e) {
    showDiv(searchTermRedMeat); //when checked
}, { once: true }); //disable once clicked once

fish.addEventListener("click", function (e) {
    showDiv(searchTermFish); //when checked
}, { once: true }); //disable once clicked once

shellfish.addEventListener("click", function (e) {
    showDiv(searchTermShellfish); //when checked
}, { once: true }); //disable once clicked once

wheat.addEventListener("click", function (e) {
    showDiv(searchTermWheat); //when checked
}, { once: true }); //disable once clicked once

drinks.addEventListener("click", function (e) {
    showDiv(searchTermSoy); //when checked
}, { once: true }); //disable once clicked once


//API response:
function searchAPI(searchTerm) {

var RECIPE_SEARCH_ENDPOINT = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=6&calories=591-722`;

fetch(RECIPE_SEARCH_ENDPOINT)
    .then((res) => (res.json())
        .then((data) => {
            //console.log(data);

            recipesEL.innerHTML = "";


            for (var i = 0; i < data.hits.length; i++) {
            
                // create card elements
                
                //card itself
                var cardEl = document.createElement('div');
                
                cardEl.classList.add('card');
                recipesEL.appendChild(cardEl);

                var cardContentEl = document.createElement('div');
                cardContentEl.classList.add('card-content');

                // card title
                var cardTitleEl = document.createElement('h6');
                cardTitleEl.classList.add('card-title');
                cardTitleEl.textContent = data.hits[i].recipe.label;

                //card image
                var cardImageEl = document.createElement('img');
                cardImageEl.classList.add('card-image');
                cardImageEl.setAttribute(
                    'src', 
                    `${data.hits[i].recipe.image}`
                );

                // card link
                var cardLinkEL = document.createElement('a');
                cardLinkEL.classList.add('card-url');
                cardLinkEL.setAttribute(
                    'href', 
                    `${data.hits[i].recipe.url}`
                );
                cardLinkEL.textContent = "Click to view recipe!"

                //icon
                var iconWrapperEl = document.createElement('div');
                iconWrapperEl.classList.add('iconwrapper');
                var iconEl = document.createElement('i'); //This refers to i = 0 in for loop.
                iconEl.classList.add('fas', 'fa-plus');
                //iconEl.classList.add('fa-plus');
                iconEl.setAttribute('id','icon-'+ i);
               
                    iconEl.setAttribute('data-title', data.hits[i].recipe.label)
                    iconEl.setAttribute('data-recipe', data.hits[i].recipe.url)
                    iconEl.setAttribute('data-picture',data.hits[i].recipe.image)



    
                iconEl.addEventListener('click', function() {

                    const currentCardInfo = this.dataset
                    console.log('CURRENT INFO +> ', currentCardInfo)

                    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
                    
                    favorites.push(currentCardInfo)

                    localStorage.setItem('favorites', JSON.stringify(favorites))

                    change(this.id)
                })




                iconEl.setAttribute('aria-disabled', 'true');
                iconEl.setAttribute('hidden', "true");
                iconWrapperEl.appendChild(iconEl);

                // append card elements
                cardEl.appendChild(cardContentEl);
                cardContentEl.appendChild(cardTitleEl);
                cardEl.appendChild(cardImageEl);
                cardEl.appendChild(iconWrapperEl);
                cardEl.appendChild(cardLinkEL);

                    //I want the to parse the info to localStorage AFTER the info is appended.
                var cardEl =
                JSON.parse(window.localStorage.getItem("cardEl")) || [];
                    // format object
                yourFavorite ={
                    cardEl, cardContentEl, cardImageEl, cardLinkEL
                };

                //console.log(JSON.stringify({}))
            };
        })
    );
}
//Event Listener for click to toggle
var favorite_buttons = document.getElementsByClassName('fas fa-plus');
for (var i = 0; i < favorite_buttons.length; i++) {
    favorite_buttons[i].addEventListener('click', change);
}

//Toggle Function
function change(iconId) {
    if (document.getElementById(iconId).className = "fas fa-plus") {
        document.getElementById(iconId).className = "fas fa-check";
    } else {
        document.getElementById(iconId).className = "fas fa-plus";
    }
}



// //Cocktail DB API
// var secondAPI_Key = '519edcda2bmsh4a3f4a4b9c212a7p1e48cbjsn13d93864b7f1';
// // For sending data for favorite recipes to local storage
// var favoriteRecipe = document.querySelector("#iconwrapper");
// const drinks = document.getElementById('drinks');


// //Drinks API Reponse

// function getDrinks(){

//     var secondEndpoint = `https://the-cocktail-db.p.rapidapi.com/randomselection.php`;

//     fetch(secondEndpoint)
//         .then((res) => (res.json())
//         .then((data) => {
//             console.log(data);
        
//             const drinks = document.getElementById('drinks');
//             var cardAppend = document.getElementsByClassName("card");

//             for (var i = 0; i < data.hits.length; i++){

//             var cardAppend = document.getElementsByClassName("card");

//             //     var cardTitle = document.createElement('h6');
//             //     cardTitle.classList.add('card-title');
//             //     cardTitle.textContent = data.hits[i].recipe.label;

//             //     var cardLink = document.createElement('a');
//             //     cardLink.classList.add('card-url');
//             //     cardLink.setAttribute(
//             //         'href',
//             //         `${data.hits[i].recipe.url}`
//             //     );
//             //     cardLink.textContent = "Click to view recipe!"
//             //     console.log(cardLink);

//             //     var cardImage = document.createElement('img');
//             //     cardImage.classList.add('card-image');
//             //     cardImage.setAttribute(
//             //         'src',
//             //         `${data.hits[i].recipe.image}`
//             //     );

//             //     cardAppend[i].appendChild(drinks);
//             //     console.log(cardAppend[i])
//             };
//         })


//     );
// };
