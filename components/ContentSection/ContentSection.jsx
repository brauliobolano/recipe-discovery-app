
const ContentSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Discover a World of Flavors</h2>
                    <p className="mb-4">We are a team of food lovers, chefs, and developers. We believe that everyone can cook delicious meals, no matter how simple or complex. Our goal is to help you discover new recipes, learn new cooking techniques, and bring joy to your kitchen.</p>
                    <p>Whether you&apos;re a beginner cook or a seasoned chef, we have something for you. Start your culinary journey with us today.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="/pancake-2764589_640.jpg" alt="office content 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="/ramen-7238665_640.jpg" alt="office content 2" />
                </div>
            </div>
        </section>
    );
};

export default ContentSection;