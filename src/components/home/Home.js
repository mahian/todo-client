import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <main>
                    <div class="relative px-6 lg:px-8">
                        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                            <div>
                                <div>
                                    <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Organize your work and life, finally.</h1>
                                    <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</p>
                                    <div class="mt-8 flex gap-x-4 sm:justify-center">
                                        <Link href="#" class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                                            Get started
                                            <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                                        </Link>
                                        <Link href="#" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                            Live demo
                                            <span class="text-gray-400" aria-hidden="true">&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;