import displaySingleDrink from './src/displaySingleDrink.js';
import fetchDrinks from './src/fetchDrinks.js';

const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  if (!id) {
    window.location.replace('index.html');
  } else {
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displaySingleDrink(drink);
  }
};

window.addEventListener('DOMContentLoaded', presentDrink);
