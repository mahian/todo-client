import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import AddTask from './components/todo/AddTask';
import CompleteTask from './components/todo/CompleteTask';
import MyTask from './components/todo/MyTask';
import Main from './layout/Main';
import Login from './components/Login';

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
