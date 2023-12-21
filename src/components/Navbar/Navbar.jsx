import { NavLink } from "react-router-dom";
import Container from "../../container/Container/Container";
import MenuDropDown from "./MenuDropDown";
import './navbar.css';



const Navbar = () => {

    const menus = <>
    <li><NavLink
    to="/contact"
    className={({ isActive, }) =>
       isActive ? " font-bold text-orange-500" : ""
    }
  >
   Contact
  </NavLink></li>
    <li><NavLink
    to="/about"
    className={({ isActive, }) =>
       isActive ? " font-bold text-orange-500" : ""
    }
  >
    About
  </NavLink></li>
    
    </>

    return (
        <Container>
         <div className="mb-10">
         <div className="navbar nav-bg px-4 py-5 rounded-b-lg">
         <div className="navbar-start">
           <div className="dropdown">
             <div tabIndex={0} role="button" className="btn  lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
             </div>
             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
               {menus}
             </ul>
           </div>
           <a className="btn btn-warning text-xl">TASK</a>
         </div>
         <div className="navbar-center hidden lg:flex">
           <ul className="menu menu-horizontal px-1">
           {menus}
           </ul>
         </div>
         <div className="navbar-end">
          <MenuDropDown></MenuDropDown>
         </div>
          </div> 
         </div>
        </Container>
    );
};

export default Navbar;