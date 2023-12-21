import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const DashBoardUser = () => {

    const {user} = useContext(AuthContext);

    return (
        <section className='text-center mb-8'>
        <div className="avatar mb-4">
        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    {user ? <img src={user.photoURL} />
        :<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    }
        </div>
      </div>
    { user && <h2 className='text-xl font-bold text-primary'>Name:{user.displayName} </h2>}
        </section>
    );
};

export default DashBoardUser;