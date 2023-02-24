import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard';
import UserPage from './pages/UserPage';

const router = createBrowserRouter([
    {path:'', element:<Homepage/> },
    {path:'dashboard', element: <Dashboard/>},
    {path:'user', element: <UserPage/>}
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
