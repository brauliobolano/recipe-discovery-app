// FilterCheckboxes.jsx
import { useState } from 'react';
const FilterCheckboxes = (
    { isGlutenFree, setIsGlutenFree, isNonDairy, setIsNonDairy, 
        isVegan, setIsVegan, isVegetarian, setIsVegetarian, 
        isCuban,
        setIsCuban,
        isChinese,
        setIsChinese,
        isItalian,
        setIsItalian,
        isMexican,
        setIsMexican,
        isIndian,
        setIsIndian
    }
    ) => {

        const [isDietaryOpen, setDietaryOpen] = useState(false);
        
    return (
        <div className="flex justify-center">
            <div className="relative inline-block">
            <button onClick={() => setDietaryOpen(!isDietaryOpen)} id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Filter
            <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        <div id="dropdownDefaultCheckbox" className={`z-10 w-34 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isDietaryOpen ? 'block' : 'hidden'}`}>
            <h1 className='p-2 text-gray-700 dark:text-gray-200'>Dietary Preferences</h1>
            <ul class="flex flex-col md:flex-row p-3 md:space-x-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                    <li>
                        <div class="flex items-center">
                            <input id="gluten-free-checkbox" type="checkbox" checked={isGlutenFree} onChange={() => setIsGlutenFree(!isGlutenFree)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="gluten-free-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gluten-free</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input id="non-dairy-checkbox" type="checkbox" checked={isNonDairy} onChange={() => setIsNonDairy(!isNonDairy)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="non-dairy-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-dairy</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input id="vegan-checkbox" type="checkbox" checked={isVegan} onChange={() => setIsVegan(!isVegan)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="vegan-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegan</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input id="vegetarian-checkbox" type="checkbox" checked={isVegetarian} onChange={() => setIsVegetarian(!isVegetarian)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="vegetarian-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegetarian</label>
                        </div>
                    </li>

                </ul>
            <h1 className='p-2 text-gray-700 dark:text-gray-200'>Cuisine</h1>
            <ul class="flex flex-col md:flex-row p-3 md:space-x-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                    <li>
                        <div class="flex items-center">
                            <input id="cuban-checkbox" type="checkbox" checked={isCuban} onChange={() => setIsCuban(!isCuban)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="cuban-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cuban</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input id="chinese-checkbox" type="checkbox" checked={isChinese} onChange={() => setIsChinese(!isChinese)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="chinese-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chinese</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input id="italian-checkbox" type="checkbox" checked={isItalian} onChange={() => setIsItalian(!isItalian)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="italian-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Italian</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input id="mexican-checkbox" type="checkbox" checked={isMexican} onChange={() => setIsMexican(!isMexican)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="mexican-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mexican</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <input id="indian-checkbox" type="checkbox" checked={isIndian} onChange={() => setIsIndian(!isIndian)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="indian-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Indian</label>
                        </div>
                    </li>
                    </ul>
            </div>
        </div>
        </div>
    );
  };
  
  export default FilterCheckboxes;