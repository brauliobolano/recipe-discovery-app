// FilterCheckboxes.jsx

const FilterCheckboxes = (
    { isGlutenFree, setIsGlutenFree, isNonDairy, setIsNonDairy, 
        isVegan, setIsVegan, isVegetarian, setIsVegetarian }
    ) => {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center">
                <div className="flex items-center me-4">
                    <input id="gluten-free-checkbox" type="checkbox" checked={isGlutenFree} onChange={() => setIsGlutenFree(!isGlutenFree)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="gluten-free-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gluten-free</label>
                </div>
                <div className="flex items-center me-4">
                    <input id="non-dairy-checkbox" type="checkbox" checked={isNonDairy} onChange={() => setIsNonDairy(!isNonDairy)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="non-dairy-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-dairy</label>
                </div>
                <div className="flex items-center me-4">
                    <input id="vegan-checkbox" type="checkbox" checked={isVegan} onChange={() => setIsVegan(!isVegan)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="vegan-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegan</label>
                </div>
                <div className="flex items-center">
                    <input id="vegetarian-checkbox" type="checkbox" checked={isVegetarian} onChange={() => setIsVegetarian(!isVegetarian)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="vegetarian-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegetarian</label>
                </div>
            </div>
        </div>


    );
  };
  
  export default FilterCheckboxes;