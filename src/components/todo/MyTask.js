import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../shared/Spinner';

const MyTask = () => {
    const [loading, setLoading] = useState(true);
    const { data: myTasks = [], refetch } = useQuery({
        queryKey: ['myTasks'],
        queryFn: async () => {
            const res = await fetch(`https://todo-app-server-six.vercel.app/uncompletedTask`);
            const data = await res.json();
            setLoading(false);
            return data;
        }
    });

    const deleteTask = id => {
        fetch(`https://todo-app-server-six.vercel.app/tasks/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                } else {
                    alert("something else")
                }
            })
            .catch(err => console.log(err));
    }

    const completeTask = task => {
        fetch(`https://todo-app-server-six.vercel.app/completeTask/${task._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({completed: true})
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch();
                }
            });
    }

    if (loading) {
        return <div className='flex items-center justify-center h-screen'>
            <Spinner />
        </div>
    }
    if (myTasks.length <= 0) {
        return <div className='flex items-center justify-center min-h-screen'>
            <p class="text-6xl text-gray-400 font-bold text-center">kicu nai</p>
        </div>
    }
    return (
        <div className='container mx-auto px-4'>
            <div class='min-h-screen'>
                {
                    myTasks.map(task => <div class="p-4 items-center justify-center max-w-[680px] mx-auto mt-5 rounded-xl group sm:flex space-x-6 bg-white shadow-xl hover:rounded-2xl">
                        <img class="mx-auto h-20 block lg:w-30 rounded-lg" alt="art cover" loading="lazy" src={task.image} />
                        <div class="sm:w-8/12 pl-0 p-5">
                            <div class="space-y-2">
                                <div class="space-y-4">
                                    <h4 class="text-md font-semibold text-cyan-900 text-justify">
                                        {task.task}
                                    </h4>
                                    <p class="text-md text-gray-400-900 text-justify">
                                        {task.desc}
                                    </p>
                                </div>
                                <div class="flex items-center space-x-4 justify-between">
                                    <div class="text-grey-500 flex flex-row space-x-1  my-4">
                                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <p class="text-xs">2 hours ago</p>
                                    </div>
                                    <div class="flex flex-row space-x-1">
                                        <div onClick={() => deleteTask(task._id)} class="bg-red-500 shadow-lg text-white cursor-pointer px-3 py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row">
                                            <span>Delete</span>
                                        </div>
                                        <Link to={`../update-task/${task._id}`}>
                                            <div class="bg-blue-500 shadow-lg text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
                                                <span>Update</span>
                                            </div>
                                        </Link>
                                        <div onClick={() => completeTask(task)} class="bg-green-500 shadow-lg text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row">
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