import { useState } from 'react';
import Card from '../components/Card/Card'
import SearchBar from '../components/SearchBar/SearchBar';
import { GetServerSideProps } from 'next';

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  cuisine: string;
  instructions: string;
  dietaryPreferences: string[];
}
interface HomeProps {
  initialRecipes: Recipe[];
}


export default function Home({ initialRecipes } : HomeProps) {
  const [search, setSearch] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(initialRecipes);

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isNonDairy, setIsNonDairy] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  

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
      <SearchBar search={search} setSearch={setSearch} runSearchFunction={runSearchFunction}/>
      <div className="flex flex-wrap justify-center">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/recipes`);
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