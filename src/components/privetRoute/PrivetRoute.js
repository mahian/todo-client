import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/UserContext';
import Spinner from '../shared/Spinner';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex items-center justify-center h-screen'>
            <Spinner />
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default PrivetRoute;