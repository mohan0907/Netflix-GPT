import {React, useState, useRef} from 'react'
import Header from './Header'
import { checkValidate } from '../utils/validate'

const Login = () => { 
    const [isSignUp, setIsSignUp] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    // const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignInForm = () => {
        setIsSignUp(!isSignUp)
    }
    const handleButtonClick = () => {
        console.log(email.current.value)
        console.log(password.current.value)
        // console.log(name.current.value)
        const errmessage = checkValidate(email.current.value, password.current.value)
        setErrorMessage(errmessage);
        console.log(errmessage)
    }
  return (
      <div>
          <Header />
          <div className="absolute">
            <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='big_cover' />
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
              <h1 className="font-bold text-3xl py-4">
                  {isSignUp ? 'Sign In' : 'Sign Up' }
              </h1>
              {!isSignUp && (<input
                //   ref={name}
                  type='text'
                  placeholder='Full Name'
                  className='p-4 my-4 w-full bg-gray-700 focus:outline-none cursor-pointer'
              /> )}
              <input
                  ref={email}
                  type='text'
                  placeholder='Email Address'
                  className='p-4 my-4 w-full bg-gray-700 focus:outline-none cursor-pointer'
              />
              <input
                  ref={password}
                  type='password'
                  placeholder='Password'
                  className='p-4 my-4 w-full bg-gray-700 focus:outline-none cursor-pointer'
              />
              {errorMessage && <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>}
              <button type='submit' onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>
                  { isSignUp ? 'Sign In' : 'Sign Up' }</button>
              <p  className='cursor-pointer' onClick={toggleSignInForm}>
                  {isSignUp ? 'New to Netflex? Sign Up Now' : 'Already Registred? Sign In Now' }
              </p>
            </form>
    </div>
  )
}

export default Login