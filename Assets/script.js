// Edamam API Calls for Recipe
var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';
var searchTerm;

// For sending data for favorite recipes to local storage

var favoriteRecipe = document.querySelector("#iconwrapper");
var bottomSection = document.getElementById("bottom-section")
var recipesEL = document.getElementById('recipe-returns');

// These are used with the API response
const searchTermGluten = 'Gluten Free';
const searchTermPeanut = 'Peanut Free';
const searchTermVegan = 'Vegan';
const searchTermVegetarian = 'Vegetarian';
const searchTermPorkFree = 'Pork Free';
const searchTermKosher = 'Kosher';
const searchTermSoy = 'Soy-Free"';

//These are for the checkboxes
const card = document.getElementsByClassName("card");
const glutenAllergy = document.getElementById('glutenAllergy');
const peanutAllergy = document.getElementById('peanutAllergy');
const vegan = document.getElementById('vegan');
const vegetarian = document.getElementById('vegetarian');
const porkFree = document.getElementById('porkFree');
const kosher = document.getElementById('kosher');
const soy = document.getElementById('soy');
const drinks = document.getElementById('drinks');

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

porkFree.addEventListener("click", function (e) {
    showDiv(searchTermPorkFree); //when checked
}, { once: true }); //disable once clicked once

kosher.addEventListener("click", function (e) {
    showDiv(searchTermKosher); //when checked
}, { once: true }); //disable once clicked once

soy.addEventListener("click", function (e) {
    showDiv(searchTermSoy); //when checked
}, { once: true }); //disable once clicked once

drinks.addEventListener("click", function (e) {
    showDiv(searchTermSoy); //when checked
}, { once: true }); //disable once clicked once


//Event Listner for click to toggle
var favorite_buttons = document.getElementsByClassName('fas fa-plus');
for (var i = 0; i < favorite_buttons.length; i++) {
    favorite_buttons[i].addEventListener('click', change);
    console.log(e.target);
}
// function newFunction(e) {
//     console.log(e.target);
// }

//Toggle Function
function change(iconId) {
    if (document.getElementById(iconId).className == "fas fa-plus") {
        document.getElementById(iconId).className = "fas fa-check";
    } else {
        document.getElementById(iconId).className = "fas fa-plus";
    }
}



//API response:
function searchAPI(searchTerm) {

var RECIPE_SEARCH_ENDPOINT = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=50&calories=591-722`;

fetch(RECIPE_SEARCH_ENDPOINT)
    .then((res) => (res.json())
        .then((data) => {
            //console.log(data);

            recipesEL.innerHTML = "";

            for (var i = 0; i < data.hits.length; i++) {
                console.log(data.hits[i])
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
                var iconEl = document.createElement('i');
                iconEl.classList.add('fas');
                iconEl.classList.add('fa-plus');
                iconEl.setAttribute('id', "iconId");
                iconEl.setAttribute('onClick', "change('iconId')");
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
                var cardEls =
                JSON.parse(window.localStorage.getItem("cardEl")) || [];
                    // format object
                yourFavorite ={
                    cardEl, cardContentEl, cardImageEl, cardLinkEL
                };

                //




                //console.log(JSON.stringify({}))

            };

        })

    );

}

//localStorage.setItem

//console.log("Favorite Cards Info: ", cardEl);

// For adding data to Local Storage
// favoriteRecipe.addEventListener("click", function(event){
//     event.preventDefault();

//     var submission ={
//         favoriteRecipe: favoriteRecipe.value,
//     };

//     console.log(JSON.stringify(submission));

//     localStorage.setItem("submission", JSON.stringify(submission));

//     var submissionParse = JSON.parse(localStorage.getItem("submission"));
// });


// // var card = document.getElementsByClassName("card");
// // var cardTitle = document.getElementById("card-title");
// // var cardImage = document.getElementById("card-image");
// // var cardURL = document.getElementById("card-url");
// // var iconWrapper = document.getElementsByClassName("icon-wrapper");


//localStorage.setItem("Favorite Cards Info: ", cardTitle, cardImage, cardURL);


































// //Cocktail DB API
// var secondAPI_Key = '519edcda2bmsh4a3f4a4b9c212a7p1e48cbjsn13d93864b7f1';

// // For sending data for favorite recipes to local storage

// var favoriteRecipe = document.querySelector("#iconwrapper");


// const drinks = document.getElementById('drinks');

// var clearResults = document.getElementById("clearResults");




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
