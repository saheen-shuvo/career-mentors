import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <div className='flex justify-center my-20'><span className="loading loading-bars loading-lg"></span></div>
    }

    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoutes;