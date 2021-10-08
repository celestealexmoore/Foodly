const favorites = JSON.parse(localStorage.getItem('favorites')) || []

//we set an empty array '

const recipesEl = document.getElementById('recipe-returns')

favorites.forEach(function(el) {

   var cardEl = document.createElement('div');
   cardEl.classList.add('card'); 

                var cardContentEl = document.createElement('div');
                cardContentEl.classList.add('card-content');

                // card title
                var cardTitleEl = document.createElement('h6');
                cardTitleEl.classList.add('card-title');
                cardTitleEl.textContent = el.title;

                //card image
                var cardImageEl = document.createElement('img');
                cardImageEl.classList.add('card-image');
                cardImageEl.setAttribute(
                    'src', 
                    `${el.picture}`
                );

                // card link
                var cardLinkEL = document.createElement('a');
                cardLinkEL.classList.add('card-url');
                cardLinkEL.setAttribute(
                    'href', 
                    `${el.recipe}`
                );
                cardLinkEL.textContent = "Click to view recipe!"
                  
   
                cardEl.appendChild(cardContentEl);
                cardContentEl.appendChild(cardTitleEl);
                cardEl.appendChild(cardImageEl);
    //cardEl.appendChild(iconWrapperEl);
                cardEl.appendChild(cardLinkEL);
                recipesEl.appendChild(cardEl);
})

//create an icon with an 'x' to make the recipe removable