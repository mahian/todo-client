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
import PrivetRoute from './components/privetRoute/PrivetRoute';

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
          element: <PrivetRoute><AddTask/></PrivetRoute>
        },
        {
          path: 'update-task/:id',
          loader: ({params})=> fetch(`https://todo-app-server-six.vercel.app/tasks/${params.id}`),
          element: <PrivetRoute><UpdateTask/></PrivetRoute>
        },
        {
          path: 'my-task',
          element: <PrivetRoute><MyTask/></PrivetRoute>
        },
        {
          path: 'completed-task',
          element: <PrivetRoute><CompleteTask/></PrivetRoute>
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
