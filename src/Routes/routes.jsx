import { createBrowserRouter } from "react-router-dom";
import Completed from "../DashPages/Completed";
import CreateTask from "../DashPages/CreateTask/CreateTask";
import DashHome from "../DashPages/DashHome/DashHome";
import Ongoing from "../DashPages/Ongoing";
import PersonalTask from "../DashPages/PersonalTask";
import TodoList from "../DashPages/TodoList/TodoList";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/login";
import Signup from "../Pages/SignUp/Signup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        }
      ]
    },
    {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        children:[
            
                {
                    path: 'userHome',
                    element: <DashHome></DashHome>
                 },   
                {
                    path: 'createTask',
                    element: <CreateTask></CreateTask>
                 },   
                {
                    path: 'todoList',
                    element: <TodoList></TodoList>
                 },   
                {
                    path: 'ongoing',
                    element: <Ongoing></Ongoing>
                 },   
            
                {
                    path: 'completed',
                    element: <Completed></Completed>
                 },   
            
                {
                    path: 'personalTask',
                    element: <PersonalTask></PersonalTask>
                 },   
            
        ]
        
    }
   
   
  ]);