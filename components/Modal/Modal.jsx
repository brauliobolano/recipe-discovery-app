import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, closeModal, recipe }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return isOpen
    ? ReactDOM.createPortal(
      <div id="default-modal" className="fixed inset-0 flex items-start justify-center pt-12 z-50 bg-black bg-opacity-50 backdrop-blur">
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-2xl m-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {recipe.name}
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeModal}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instructions:</h4>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
            {recipe.instructions}
          </p>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cuisine:</h4>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
            {recipe.cuisine}
          </p>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside mb-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {ingredient}
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Dietary Preferences:</h4>
          <ul className="list-disc list-inside mb-4">
            {recipe.dietaryPreferences.map((preference, index) => (
              <li key={index} className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {preference}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-600">
          <button onClick={closeModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
        </div>
      </div>
    </div>,
        elRef.current
      )
    : null;
};

export default Modal;