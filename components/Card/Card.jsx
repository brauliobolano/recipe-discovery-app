import Modal from '../Modal/Modal';

const Card = ({ recipe }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        console.log('open modal');
        setIsModalOpen(true);}
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="m-2 block w-80 max-w-sm p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600 bg-gradient-to-r from-gray-200 to-cycan-100 dark:bg-gray-700 dark:bg-gray-950">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{recipe.name}</h5>
          <div>
          <button onClick={openModal} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <h1>Read more</h1>
          </button>
          </div>

          {isModalOpen && (
            <Modal isOpen={isModalOpen} closeModal={closeModal} recipe={recipe} />
          )}
        </div>
      );
    };

export default Card;