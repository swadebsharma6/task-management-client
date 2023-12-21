import { FaBook, FaHome, FaList, FaPhone, FaUser, } from "react-icons/fa";
import { IoCreate } from "react-icons/io5";
import { MdIncompleteCircle } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import Container from "../../container/Container/Container";
import DashBoardUser from "./DashBoardUser";

const DashBoard = () => {

   

    return (
        <Container>
        
        <div className="md:flex gap-2">
          <div className=" bg-blue-400 md:w-72 md:min-h-screen rounded-md p-6">

          <div>
          <DashBoardUser></DashBoardUser>
          </div>

          <ul className="menu">
           
            <>
           <li> 
           <NavLink to='/dashboard/userHome'>
           <FaHome></FaHome>
          User Home</NavLink>
           </li>
           <li> 
           <NavLink to='/dashboard/createTask'>
           <IoCreate />
           Create Task</NavLink>
           </li>
           <li> 
           <NavLink to='/dashboard/todoList'>
           <FaList></FaList>
          TodoList</NavLink>
           </li>
           <li> 
           <NavLink to='/dashboard/ongoing'>
           <FaBook></FaBook>
           Ongoing</NavLink>
           </li>
           <li> 
           <NavLink to='/dashboard/completed'>
           <MdIncompleteCircle />
           Completed</NavLink>
           </li>
           <li> 
           <NavLink to='/dashboard/personalTask'>
           <FaUser></FaUser>
           Personal Task</NavLink>
           </li>
           </>

           {/*Shared NavLinks for Common user and Admin user*/}
           <div className="divider  divider-primary"></div>

           <li> 
           <NavLink to='/'>
           <FaHome></FaHome>
           Home</NavLink>
           </li>
           <li> 
           <NavLink to='/contact'>
           <FaPhone></FaPhone>
           Contact</NavLink>
           </li>
           <li> 
           <NavLink to='/about'>
           <FaBook></FaBook>
           About</NavLink>
           </li>
       </ul>
          </div>
          <div className="flex-1 bg-purple-500 p-10 min-h-screen rounded-t-md">
          <h2>Right Side</h2>
          <Outlet></Outlet>
          </div>
        </div>
        </Container>
    );
};

export default DashBoard;