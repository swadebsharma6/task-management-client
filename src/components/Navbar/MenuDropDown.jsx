import { Link } from "react-router-dom";


const MenuDropDown = () => {
  
    return (
        <section className="flex items-center gap-4">
            
          <div>
         <Link to='/login'><button className="btn shadow-lg btn-primary">Login</button></Link>
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-5">
        <div className="w-16 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
            
        </section>
    );
};

export default MenuDropDown;