import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import AddTask from './components/todo/AddTask';
import CompleteTask from './components/todo/CompleteTask';
import MyTask from './components/todo/MyTask';
import Main from './layout/Main';
import Login from './components/authComponent/Login';
import Signup from './components/authComponent/Signup';
import UpdateTask from './components/todo/UpdateTask';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: 'add-task',
          element: <AddTask/>
        },
        {
          path: 'update-task/:id',
          loader: ({params})=> fetch(`https://todo-app-server-six.vercel.app/tasks/${params.id}`),
          element: <UpdateTask/>
        },
        {
          path: 'my-task',
          element: <MyTask/>
        },
        {
          path: 'completed-task',
          element: <CompleteTask/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <Signup/>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
