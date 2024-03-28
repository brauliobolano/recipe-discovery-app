require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  cuisine: String,
  instructions: String,
  dietaryPreferences: [String]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

//The below commented code is used to save the recipes to the database
//Uncomment the code and run the server to save the recipes to the database
//Remember to comment the code after the recipes are saved to avoid duplicates 

/* const recipes = [
  {
    name: 'Sweet and Sour Chicken',
    ingredients: ['Chicken', 'Bell pepper', 'Pineapple', 'Soy sauce', 'Vinegar'],
    instructions: 'Fry the chicken. Add the bell pepper and pineapple. Mix the soy sauce and vinegar. Add to the chicken and vegetables.',
    cuisine: 'Chinese',
    dietaryPreferences: ['Gluten-free', 'Dairy-free']
  },
];
recipes.forEach(async (recipeData) => {
  const recipe = new Recipe(recipeData);
  try {
    await Promise.all(recipes.map(async (recipeData) => {
      const recipe = new Recipe(recipeData);
      await recipe.save();
      console.log(recipe.name + " saved to recipe collection.");
    }));
  } catch (err) {
    console.error(err);
  }
}); */

///
///The above code is used to save the recipes to the database

//The below code is used to remove duplicates from the database 
//Uncomment the code and run the server to remove duplicates from the database
//Remember to comment the code after the duplicates are removed to avoid deleting all recipes
/* async function removeDuplicates() {
  const distinctRecipes = await Recipe.distinct('name'); // get all distinct recipe names

  for (const name of distinctRecipes) {
    const duplicateRecipes = await Recipe.find({ name }); // find all recipes with this name
    duplicateRecipes.shift(); // keep the first one

    // delete the rest
    for (const recipe of duplicateRecipes) {
      await Recipe.findByIdAndDelete(recipe._id);
    }
  }
}

removeDuplicates().catch(console.error); */


app.use(cors()); // Enable CORS

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/api/recipes', async (req, res) => {
  const recipes = await Recipe.find({});
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});