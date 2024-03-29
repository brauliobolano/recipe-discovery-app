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
            <button onClick={() => setDietaryOpen(!isDietaryOpen)} id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Filter
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        <div id="dropdownDefaultCheckbox" className={`border-double border-4 border-blue-600 z-10 w-34 mt-2 bg-gray-300 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isDietaryOpen ? 'block' : 'hidden'} absolute left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 backdrop-blur`}>
            <h2 className='p-2 text-gray-700 dark:text-gray-200'>Dietary Preferences</h2>
            <ul className="flex flex-col md:flex-row p-3 md:space-x-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                    <li>
                        <div className="flex items-center">
                            <input id="gluten-free-checkbox" type="checkbox" checked={isGlutenFree} onChange={() => setIsGlutenFree(!isGlutenFree)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="gluten-free-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gluten-free</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <input id="non-dairy-checkbox" type="checkbox" checked={isNonDairy} onChange={() => setIsNonDairy(!isNonDairy)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="non-dairy-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Non-dairy</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <input id="vegan-checkbox" type="checkbox" checked={isVegan} onChange={() => setIsVegan(!isVegan)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="vegan-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegan</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <input id="vegetarian-checkbox" type="checkbox" checked={isVegetarian} onChange={() => setIsVegetarian(!isVegetarian)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="vegetarian-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vegetarian</label>
                        </div>
                    </li>

                </ul>
            <h2 className='p-2 text-gray-700 dark:text-gray-200'>Cuisine</h2>
            <ul className="md:flex p-3  space-x-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                    <li>
                        <div className="flex items-center">
                            <input id="cuban-checkbox" type="checkbox" checked={isCuban} onChange={() => setIsCuban(!isCuban)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="cuban-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cuban</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <input id="chinese-checkbox" type="checkbox" checked={isChinese} onChange={() => setIsChinese(!isChinese)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="chinese-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chinese</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <input id="italian-checkbox" type="checkbox" checked={isItalian} onChange={() => setIsItalian(!isItalian)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="italian-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Italian</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <input id="mexican-checkbox" type="checkbox" checked={isMexican} onChange={() => setIsMexican(!isMexican)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="mexican-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mexican</label>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <input id="indian-checkbox" type="checkbox" checked={isIndian} onChange={() => setIsIndian(!isIndian)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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