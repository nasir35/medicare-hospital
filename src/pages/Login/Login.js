import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {user, setUser, loginWithEmailPass,signInUsingGoogle, loginWithFacebook, signInUsingGithub } = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const getEmail = e => {
        setEmail(e.target.value);
    }
    const getPass = e => {
        setPassword(e.target.value);
    }

    const passLength = e => {
        const len = e.target.value.length;
        len < 6 && len >= 1 ? setError('Password must be at least 6 characters!') : setError('');
    }

    const handleEmailPassLogin = e => {
        e.preventDefault();
        if(password.length<6){
            setError('Password must be at least 6 characters!');
            return;
        }
        loginWithEmailPass(email,password)        
        .then(result => {setUser(result.user)
            history.push(redirect_url)})
    }

    const signInmethod = provider => {
        if(provider=='google')
        {
            signInUsingGoogle()
            .then(result => {setUser(result.user)
                history.push(redirect_url)})
        }
        else if(provider=='github')
        {
            signInUsingGithub()
            .then(result => {setUser(result.user)
                history.push(redirect_url)})
        }
        else if(provider == 'facebook'){
            loginWithFacebook()
            .then(result => {setUser(result.user)
                history.push(redirect_url)})
        }
    }
    
    return (
        <div className="bg-gray-50 md:p-12 p-6">
            <div className="max-w-md mx-auto border-gray-200 border-2 shadow-xl rounded-2xl">
                <div className="w-1/4 md:pt-8 pt-4 mx-auto border-b-4 border-indigo-600">
                    <h2 className="text-center pb-2 tracking-wide text-gray-800 sm:text-4xl text-xl">Login</h2>
                </div>
                <div className=" py-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto w-full space-y-8">
                        <form className="space-y-6" onSubmit={handleEmailPassLogin}>
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input id="email-address" name="email" type="email" onBlur={getEmail} autoComplete="email" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input id="password" onChange={passLength} name="password" type="password" onBlur={getPass} autoComplete="current-password" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                </div>
                            </div>
                            <small className="text-red-600">{error}</small>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    <NavLink to="register" className="sm:text-base text-sm inline-block md:pt-3 pt-2 text-left text-blue-700">New User?</NavLink>
                </div>
                <div className="px-8 pb-6">
                <h5 className=" max-w-md mx-auto text-center text-base text-gray-800 my-8 border-b-2 border-gray-700" style={{ lineHeight: 0.1 }}><span className="bg-gray-50 px-2">Or Continue with</span></h5>
                <div className="max-w-md mx-auto flex sm:flex-row flex-col gap-3 justify-between my-5">
                    <button className="bg-white border border-gray-300 rounded-md px-12 shadow-lg text-xl text-gray-600 py-1" onClick={() => signInmethod('google')}><i className="fab fa-google"></i></button>
                    <button className="bg-white border border-gray-300 rounded-md px-12 shadow-lg text-xl text-gray-600 py-1" onClick={() => signInmethod('facebook')}><i className="fab fa-facebook-square"></i></button>
                    <button className="bg-white border border-gray-300 rounded-md px-12 shadow-lg text-xl text-gray-600 py-1" onClick={() => signInmethod('github')}><i className="fab fa-github-square"></i></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;