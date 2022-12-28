import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="bg-gray-900 px-4">
            <nav className="container mx-auto flex items-center justify-between flex-wrap py-6">
                <Link to='/' className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-bold text-4xl">TODO</span>
                    <img className='h-10 ml-1' src="assets/logo.webp" alt="" />
                </Link>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-10">
                    <div className="text-sm lg:flex-grow">
                        <Link to="add-task" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-6 font-semibold text-lg">
                            Add task
                        </Link>
                        <Link to="my-task" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-6 font-semibold text-lg">
                            My task
                        </Link>
                        <Link to="completed-task" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-6 font-semibold text-lg">
                            Complete Task
                        </Link>
                    </div>
                    <div>
                        <Link to="login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-600 hover:bg-white mt-4 lg:mt-0">Get Started</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;