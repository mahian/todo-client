import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../context/UserContext';
import AuthProvider from './AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { signInWithEmail } = useContext(authContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmail(email, password)
            .then(res => {
                if(res.user){
                    navigate('/');
                    alert("successfully signed in")
                }else{
                    alert("something wrong")
                }
            })
    };
    return (
        <div className='py-24'>
            <div className="text-center">
                <div className="flex items-center justify-center">
                    <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-blue-500" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h2 className="text-4xl tracking-tight">
                    Sign in into your account
                </h2>
                <span className="text-sm">or <Link to="../signup" className="text-blue-500">
                    register a new account
                </Link>
                </span>
            </div>
            <div className="flex justify-center my-2 mx-4 md:mx-0">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Email address</label>
                            <input {...register("email", { required: true })} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='email' />
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='Password'>Password</label>
                            <input {...register("password", { required: true })} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none" type='password' />
                        </div>
                        <div className="w-full flex items-center justify-between px-3 mb-3 ">
                            <label for="remember" className="flex items-center w-1/2">
                                <input type="checkbox" name="" id="" className="mr-1 bg-white shadow" />
                                <span className="text-sm text-gray-700 pt-1">Remember Me</span>
                            </label>
                            <div className="w-1/2 text-right">
                                <Link href="#" className="text-blue-500 text-sm tracking-tight">Forget your password?</Link>
                            </div>
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                            <button className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">Sign in</button>
                        </div>
                    </div>
                    <AuthProvider />
                </form>
            </div>
        </div>
    );
};

export default Login;