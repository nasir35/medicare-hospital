import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [userName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const {user, setUser, registerWithEmailPass, setUserName, signInUsingGoogle, loginWithFacebook, signInUsingGithub} = useAuth();
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const getName = e =>{
        setName(e.target.value);
    }
    const getEmail = e =>{
        setEmail(e.target.value);
    }
    const getPass = e =>{
        setPass(e.target.value);
    }

    const passLength = e => {
        const len = e.target.value.length;
        len < 6 && len >= 1 ? setError('Password must be at least 6 characters!') : setError('');
    }

    const handleRegistrationWithPass = e => {
        e.preventDefault();
        if(pass.length <6){
            setError('Password must be at least 6 characters!');
            return;
        }
        registerWithEmailPass(email, pass)
        .then((result) => {
            // Signed in 
            setUserName(userName);
            setUser(result.user);
            // redirect_home_or_previous_page
            history.push(redirect_url)
        });
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
                <div className="w-2/4 pt-8 mx-auto border-b-4 border-indigo-600">
                    <h2 className="text-center pb-2 tracking-wide text-gray-800 sm:text-3xl text-2xl font-medium">Register</h2>
                </div>

                <div className=" py-4 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto w-full space-y-8">
                        <form className="space-y-6" onSubmit={handleRegistrationWithPass}>
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div className="pb-4">
                                    <label htmlFor="name" className="sr-only">Email address</label>
                                    <input id="name" name="name" type="text" onBlur={getName} autoComplete="name" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name" />
                                </div>
                                <div className="pb-4">
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input id="email-address" name="email" type="email" onBlur={getEmail} autoComplete="email" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                                </div>
                                <div>
                                    <label htmlFor="newPassword" className="sr-only">New Password</label>
                                    <input id="newPassword" onChange={passLength} name="password" type="password" onBlur={getPass} autoComplete="current-password" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="New Password" />
                                </div>                                
                            </div>
                            <small className="text-red-600">{error}</small>
                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                    <NavLink to="login" className="sm:text-base text-sm inline-block md:pt-3 pt-2 text-left text-blue-700">Already have an account?</NavLink>
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

export default Register;