import { DarkThemeToggle } from 'flowbite-react';
import Link from 'next/link';

const NavigationBar = ({showCenterElements}) => {
    return (
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/chef-svgrepo-com.svg" alt="Recipe Discovery" className="w-8 h-8" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    <Link href="/">
                        Recipe Discovery
                    </Link>
                    
                </span>
            </div>
            <div class="flex mx-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <DarkThemeToggle />
            </div>
            {showCenterElements &&
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                    <a href="#content-section" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>
                    <a href="#footer" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
                </ul>
            </div>
            }
            </div>
        </nav>
    );
}
// Add defaultProps for the NavigationBar component to define the default values for the showHome, showAbout, showService, and showContact props.
//This helps to eliminate this elements from the NavigationBar component when they are set to false.
NavigationBar.defaultProps = {
    showCenterElements: true,

  };

export default NavigationBar;