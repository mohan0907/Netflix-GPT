import {React, useState} from 'react'
import Header from './Header'

const Login = () => { 
    const [isSignUp, setIsSignUp] = useState(true)

    const toggleSignInForm = () => {
        setIsSignUp(!isSignUp)
    }
  return (
      <div>
          <Header />
          <div className="absolute">
            <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='big_cover' />
          </div>
          <from className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
              {isSignUp ? <h1 className="font-bold text-3xl py-4">Sign In</h1> :
                  <h1 className="font-bold text-3xl py-4">Sign Up</h1>
              }
              
              <input
                  type='text'
                  placeholder='Email Address'
                  className='p-4 my-4 w-full bg-gray-700 focus:outline-none cursor-pointer'
              />
              <input
                  type='password'
                  placeholder='Password'
                  className='p-4 my-4 w-full bg-gray-700 focus:outline-none cursor-pointer'
              />
              {isSignUp ? <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>Sign In</button> :
              <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer'>Sign Up</button>}
               <p> New to Netflex? <span className='cursor-pointer' onClick={toggleSignInForm}>Sign Up Now</span></p>
            </from>
    </div>
  )
}

export default Login