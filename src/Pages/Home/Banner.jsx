import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './banner.css';

const Banner = () => {
    return (
        <div className="banner-bg rounded-2xl mb-14 animate-pulse">
            <div>
            <h2 className='text-7xl font-bold text-secondary mb-5'>Let's Explore</h2>
            <div className='text-center'>
           <Link to='/dashboard'> <button className='btn btn-secondary'>
           <RiLogoutCircleRLine className="text-xl" />
           Go For Check
           </button></Link>
            </div>
            </div>
        </div>
    );
};

export default Banner;