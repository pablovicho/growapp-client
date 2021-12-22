import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'
import logo3 from "../../images/logo3.png"

export default function Login() {

  const ctx = useContext(UserContext)

  const {
    loginUser
  } = ctx


  // 1. ESTADO LOCAL
  const [logUser, setLogUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
		e.preventDefault()

		setLogUser({
			...logUser,
			[e.target.name]: e.target.value
		})

	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		loginUser(logUser)

	}

	return (
		<div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex justify-center mt-2">
        <img src={logo3} alt="logo"/>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Iniciar sesión
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ¿Aún sin cuenta? &nbsp;
          <Link to="/registro">
            <button className="font-medium text-md text-lime-700 hover:text-lime-500">
              Regístrate aquí
            </button>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-lime-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form 
            className="space-y-6"
            onSubmit={(e) => { handleSubmit(e) }}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input
                  onChange={(evt) => { handleChange(evt) }} 
                  name="email" 
                  type="email" 
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="mt-1">
                <input 
                  onChange={(evt) => { handleChange(evt) }} 
                  name="password" 
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              </div>
            </div>


            <div className="flex justify-center">
              <button type="submit" className="w-60 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-700 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Acceder a tu cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
	)
}