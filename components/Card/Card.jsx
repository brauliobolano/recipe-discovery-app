import { useState } from 'react';
import Modal from '../Modal/Modal';

const Card = ({ recipe }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        console.log('open modal');
        setIsModalOpen(true);}
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="m-2 block w-80 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.name}</h5>
          <button onClick={openModal} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
          </button>
          {isModalOpen && (
            <Modal isOpen={isModalOpen} closeModal={closeModal} recipe={recipe} />
          )}
        </div>
      );
    };

export default Card;