import React, {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogIn from '../Login/SocialLogIn/SocialLogIn';
import { Helmet } from 'react-helmet-async';
const Singin = () => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePassword = e =>{
        setpassword(e.target.value);
    }
    const handleConfirmPassword = e =>{
        setconfirmPassword(e.target.value);
    }
    if (user) {
        navigate("/home")
    }
    const handleSingup = e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <Helmet>
                <title>Sing-In - Genius-Car-Service</title>
            </Helmet>
                    <div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={handleSingup}>
                                
                                {/* <!-- Email input --> */}
                                <div className="mb-6">
                                    <input
                                    onBlur={handleEmail}
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="mb-6">
                                    <input
                                    onBlur={handlePassword}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                    onBlur={handleConfirmPassword}
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Confirm-Password"
                                        required
                                    />
                                </div>
                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out font-bold"
                                    >
                                        Sing-in
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Already have an account?
                                        <Link
                                            to="/login"
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        >Log-in</Link>
                                    </p>
                                </div>
                                <SocialLogIn></SocialLogIn>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default Singin;