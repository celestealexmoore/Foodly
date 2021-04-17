//Design tool for recipe cards.
var contentCard = "https://material-ui.com/components/cards/#RecipeReviewCard.js";
var apiID = `daae60e1`;
var apiKey = `cc39f5ebdea0803927099971a33add46`;


// Edamam API Calls for Recipe

var API_KEY = 'cc39f5ebdea0803927099971a33add46';
var APP_ID = 'daae60e1';

//Cocktail DB API
var secondAPI_Key = '519edcda2bmsh4a3f4a4b9c212a7p1e48cbjsn13d93864b7f1';

// For sending data for favorite recipes to local storage

var favoriteRecipe = document.querySelector("#iconwrapper");

// These are used with the API response
const searchTermGluten = 'Gluten Free';
const searchTermPeanut = 'Peanut Free';
const searchTermVegan = 'Vegan';
const searchTermVegetarian = 'Vegetarian';
const searchTermPorkFree = 'Pork Free';
const searchTermKosher = 'Kosher';
const searchTermSoy = 'Soy-Free"';

//These are for the checkboxes
const cardAppend = document.getElementsByClassName("card");
const glutenAllergy = document.getElementById('glutenAllergy');
const peanutAllergy = document.getElementById('peanutAllergy');
const vegan = document.getElementById('vegan');
const vegetarian = document.getElementById('vegetarian');
const porkFree = document.getElementById('porkFree');
const kosher = document.getElementById('kosher');
const soy = document.getElementById('soy');
const drinks = document.getElementById('drinks');

var clearResults = document.getElementById("clearResults");

//Coding Starts Here:

function showDiv(inputSearchTerm){
    //hide bottom section
    var bottomSection = document.getElementById("bottom-section")
    bottomSection.setAttribute("class", "hide");

    searchAPI(inputSearchTerm);
    //un-hide bottom section
    bottomSection.removeAttribute("class");
}

//Event listener to console log and show gluten cards:

glutenAllergy.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermGluten); //when checked
     //Clear out data before rendering a new response.
     recipeReturns.innerHTML= "";
}, {once: true}); //disable once clicked once

peanutAllergy.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermPeanut);
}, {once: true});

vegan.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermVegan);
}, {once: true});

vegetarian.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermVegetarian);
}, {once: true});

porkFree.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermPorkFree);
}, {once: true});

kosher.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermKosher);
}, {once: true});

soy.addEventListener("click", function (e) {
    console.log(e.target)
    showDiv(searchTermSoy);
}, {once: true});

// body.addEventListener("click", function(e){
//     console.log(e.target// specific id goes here)

// };


// Food API response:
function searchAPI(searchTerm) {

    var endpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-722`;

    fetch(endpoint)
        .then((res) => (res.json())
        .then((data) => {
            console.log(data);

            var cardAppend = document.getElementsByClassName("card");

            for (var i = 0; i < data.hits.length; i++){

                var cardAppend = document.getElementsByClassName("card");
                // cardAppend.innerHTML = "";

                var cardTitle = document.createElement('h6');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = data.hits[i].recipe.label;

                var cardLink = document.createElement('a');
                cardLink.classList.add('card-url');
                cardLink.setAttribute(
                    'href',
                    `${data.hits[i].recipe.url}`
                );
                cardLink.textContent = "Click to view recipe!"
                console.log(cardLink);

                var cardImage = document.createElement('img');
                cardImage.classList.add('card-image');
                cardImage.setAttribute(
                    'src',
                     `${data.hits[i].recipe.image}`
                );

                cardAppend[i].appendChild(cardTitle);
                cardAppend[i].appendChild(cardImage);
                cardAppend[i].appendChild(cardLink);
                console.log(cardAppend[i])
            };
        })
        
    );
}

//Drinks API Reponse

function getDrinks(){

    var secondEndpoint = `https://the-cocktail-db.p.rapidapi.com/randomselection.php`;

    fetch(secondEndpoint)
        .then((res) => (res.json())
        .then((data) => {
            console.log(data);
        
            const drinks = document.getElementById('drinks');
            var cardAppend = document.getElementsByClassName("card");

            for (var i = 0; i < data.hits.length; i++){

            var cardAppend = document.getElementsByClassName("card");

            //     var cardTitle = document.createElement('h6');
            //     cardTitle.classList.add('card-title');
            //     cardTitle.textContent = data.hits[i].recipe.label;

            //     var cardLink = document.createElement('a');
            //     cardLink.classList.add('card-url');
            //     cardLink.setAttribute(
            //         'href',
            //         `${data.hits[i].recipe.url}`
            //     );
            //     cardLink.textContent = "Click to view recipe!"
            //     console.log(cardLink);

            //     var cardImage = document.createElement('img');
            //     cardImage.classList.add('card-image');
            //     cardImage.setAttribute(
            //         'src',
            //         `${data.hits[i].recipe.image}`
            //     );

            //     cardAppend[i].appendChild(drinks);
            //     console.log(cardAppend[i])
            };
        })


    );
};



// var card = document.getElementsByClassName("card");
// var cardTitle = document.getElementById("card-title");
// var cardImage = document.getElementById("card-image");
// var cardURL = document.getElementById("card-url");
// var iconWrapper = document.getElementsByClassName("icon-wrapper");


// localStorage.setItem("Favorite Cards Info: ", cardTitle, cardImage, cardURL);

//hide data in data attribute tags

//once you get the data, then we can set in local storage
//get the onclick first
//console log on-click
//console log event.target
//set up an event listener to the body(the whole document)
//if event.target has savedRecipe class, we don't have to assign individual event listeners.





// function clearCards(cardAppend){
//     cardAppend.remove('card-content');
//     cardAppend.remove('card-image');
//     cardAppend.remove('card-url');
// }
