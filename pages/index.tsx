import { useState } from 'react';
import Card from '../components/Card/Card'
import SearchBar from '../components/SearchBar/SearchBar';
import recipes from '../recipesdbs';

export default function Home() {
  const [search, setSearch] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const runSearchFunction = () => {
    const results = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(search.toLowerCase())) ||
      recipe.cuisine.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredRecipes(results);
    console.log('runSearchFunction for value of search: ', search);
  }

  return (
    <main>
      <h1>Recipe Discovery</h1>
      <SearchBar search={search} setSearch={setSearch} runSearchFunction={runSearchFunction}/>
      <div className="flex flex-wrap justify-center">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}