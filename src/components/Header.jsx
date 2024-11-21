import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {

    const {user, logOutUser} = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
        .then(() => {
            console.log("User Logged Out Successfully")
        })
        .catch(error => console.log("ERROR", error.message))
    }

    return (
        <div className='mt-5 flex justify-between'>
            <div>
                <h1 className='font-bold text-xl text-orange-700'>Career Mentor's</h1>
            </div>
            <div className='flex gap-4'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Log in</NavLink>
                <NavLink to="/register">Register</NavLink>
                {
                    user && <>
                    <NavLink to="/profile">Profile</NavLink>
                    </>
                }
            </div>
            <div>
                {
                    user ? <>
                    <div className='relative flex items-center gap-6'><div className='relative group'><img className='w-10 h-10 object-cover rounded-full' src={user?.photoURL} alt="" /><div
          className="absolute bottom-[-35px] left-1/2 transform -translate-x-1/2 hidden p-5 group-hover:block text-black text-[9px] rounded-md"
        >
          {user?.displayName || "Unknown User"}
        </div></div><a onClick={handleLogOut} className='btn'>Log out</a></div>
                    </> : <Link to="/login" className='btn'>Log in</Link>
                }
            </div>
        </div>
    );
};

export default Header;