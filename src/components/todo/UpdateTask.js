import React from 'react';
import { useLoaderData } from 'react-router-dom';
const imageHostKey = "0ff3cea0cbb5e45eaae23b9299ecee4c";

const UpdateTask = () => {
    const loadedTask = useLoaderData();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const task = form.task.value;
        const desc = form.desc.value;
        const image = form.taskImg.files[0];

        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const taskObj = { task, desc, image: imgData.data.url }
                fetch(`https://todo-app-server-six.vercel.app/tasks/${loadedTask._id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(taskObj)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.acknowledged) {
                            alert("inserted successfully")
                            form.reset();
                        }
                    });
            })
    }
    
    return (
        <div className=''>
            <div className="w-full max-w-xl m-auto my-20 py-20">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Task Name
                        </label>
                        <input name='task' defaultValue={loadedTask.task} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Task Name" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Task description
                        </label>
                        <textarea name='desc' defaultValue={loadedTask.desc} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Task description" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Image
                        </label>
                        <input name="taskImg" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" placeholder="Task Name" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Add task
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default UpdateTask;