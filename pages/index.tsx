import { useState } from 'react';
import Card from '../components/Card/Card'
import SearchBar from '../components/SearchBar/SearchBar';

export default function Home({ initialRecipes }) {
  const [search, setSearch] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(initialRecipes);

  const runSearchFunction = () => {
    const results = initialRecipes.filter(recipe =>
      recipe.name.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(search.toLowerCase())) ||
      recipe.cuisine.toLowerCase().includes(search.toLowerCase()) || 
      recipe.dietaryPreferences.some(dietaryPreference => dietaryPreference.toLowerCase().includes(search.toLowerCase()))
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

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3001/api/recipes');
  const initialRecipes = await res.json();

  if (!initialRecipes) {
    return {
      notFound: true,
    }
  }

  return {
    props: { initialRecipes }, // will be passed to the page component as props
  }
}