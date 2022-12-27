import React from 'react';

const MyTask = () => {
    const myTasks = [1, 2, 3];
    return (
        <div>
            <div class='min-h-screen'>
                { 
                    myTasks.map(myTask => <div class="p-4 items-center justify-center w-[680px] mx-auto mt-5 rounded-xl group sm:flex space-x-6 bg-white shadow-xl hover:rounded-2xl">
                        <img class="mx-auto w-full h-30 block w-4/12 rounded-lg" alt="art cover" loading="lazy" src='https://www.lighthouselabs.ca/uploads/post/open_graph_image/459/Coding-vs-programming.jpg' />
                        <div class="sm:w-8/12 pl-0 p-5">
                            <div class="space-y-2">
                                <div class="space-y-4">
                                    <h4 class="text-md font-semibold text-cyan-900 text-justify">
                                        First Task
                                    </h4>
                                </div>
                                <div class="flex items-center space-x-4 justify-between">
                                    <div class="text-grey-500 flex flex-row space-x-1  my-4">
                                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <p class="text-xs">2 hours ago</p>
                                    </div>
                                    <div class="flex flex-row space-x-1">
                                        <div class="bg-red-500 shadow-lg text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">
                                            <span>Delete</span>
                                        </div>
                                        <div class="bg-green-500 shadow-lg text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                                            <span>Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyTask;