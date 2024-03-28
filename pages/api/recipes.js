// pages/api/recipes.js
import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  cuisine: String,
  instructions: String,
  dietaryPreferences: [String]
});

let Recipe;

if (mongoose.models.Recipe) {
  Recipe = mongoose.model('Recipe');
} else {
  Recipe = mongoose.model('Recipe', recipeSchema);
}


async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const recipes = await Recipe.find({});
        res.status(200).json(recipes);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}