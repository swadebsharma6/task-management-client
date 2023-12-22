import { FaBook, FaHome, FaPhone, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import SubNav from "../../components/SubNav/SubNav";
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
          <SubNav></SubNav>
          <Outlet></Outlet>
          </div>
        </div>
        </Container>
    );
};

export default DashBoard;