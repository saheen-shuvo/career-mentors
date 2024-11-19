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
            </div>
            <div>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <a onClick={handleLogOut} className='btn'>Log out</a>
                    </> : <Link to="/login" className='btn'>Log in</Link>
                }
            </div>
        </div>
    );
};

export default Header;