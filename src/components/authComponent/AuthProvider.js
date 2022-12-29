import React, { useContext } from 'react';
import { authContext } from '../../context/UserContext';

const AuthProvider = () => {
    const {signInWithGoogle} = useContext(authContext);
    return (
        <div class="w-full">
            <button onClick={()=> signInWithGoogle().then(res => console.log(res))} class="group h-12 w-full px-6 border-2 border-gray-300 rounded-full transition duration-30 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                <div class="relative flex items-center space-x-4 justify-center">
                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo" />
                    <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                </div>
            </button>
        </div>
    );
};

export default AuthProvider;