import React from 'react'
import { Link } from 'react-router-dom'


const AuthLayouts = ({ children, title }) => {
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
      <p className="font-medium text-slate-500 mb-4"> Welcome, Please enter your details</p>
      {children}

      {title === "login" &&
        <p className="text-sm mt-5 text-center">
          No Have an account?{" "}
          <Link className='font-bold text-blue-600' to="/register">
            Register
          </Link>
        </p>
      }

      {title === "register" &&
        <p className="text-sm mt-5 text-center">
          Have an account?{" "}
          <Link className='font-bold text-blue-600' to="/login">
            Login
          </Link>
        </p>
      }

    </div>
  )
}

export default AuthLayouts