import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import logo from '../../../../google-logo.png-main.png'
import auth from './../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogIn = () => {
  const navigate = useNavigate(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
  if (error) {
    errorElement = <div>
        <p>Error: {error.message}</p>
      </div>
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if(user){
    navigate('/')
  }
    return (
        <div>
            <div
            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p className="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
          <div className='text-red-600'>
          {errorElement}
          </div>

          <a
            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 text-white font-bold bg-blue-600"
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={() => signInWithGoogle()}
          >
            {/* <!-- Facebook --> */}
              <img className='mr-4' src={logo}></img>
              Continue with Google
          </a> 
          <a
            className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-blue-800"
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            {/* <!-- Facebook --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-3.5 h-3.5 mr-2"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              /></svg>Continue with Facebook
          </a>
        </div>
    );
};

export default SocialLogIn;