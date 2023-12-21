import { useContext } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const MenuDropDown = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
      logOut()
      .then(()=>{
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(error =>{
        console.log(error.message)
      })
    }
  
    return (
        <section className="flex items-center gap-4">
            
          <div>
            { user ? <button onClick={handleLogOut} className="btn btn-secondary">
            <RiLogoutCircleRLine className="text-xl" /> 
            LogOut</button>:<Link to='/login'><button className="btn shadow-lg btn-primary">
            <RiLogoutCircleRLine className="text-xl" /> 
            Login</button></Link>}
          </div>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-5">
       { user ? <div className="w-20 rounded-full">
          <img alt="User Photo" src={user.photoURL} />
        </div> : <div className="w-20 rounded-full">
        <img alt="user photo" src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
      </div> }
      </div>
            
        </section>
    );
};

export default MenuDropDown;