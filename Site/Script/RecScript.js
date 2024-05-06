const addIngredientButton = document.getElementById('addIngredientButton');
const ingredientsList = document.getElementById('ingredientsList');
let ingredientCounter = 5; // Começa em 5, pois já existem 5 campos de entrada

addIngredientButton.addEventListener('click', function () {
    ingredientCounter++;
    const newIngredientInput = document.createElement('li');
    newIngredientInput.innerHTML = `<input type="text" placeholder="Ingrediente ${ingredientCounter}">`;
    ingredientsList.appendChild(newIngredientInput);
});