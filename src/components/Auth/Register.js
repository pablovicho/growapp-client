import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './../../context/User/UserContext'
import logo3 from "../../images/logo3.png"

export default function Register() {

	const ctx = useContext(UserContext)

	const {
		registerUser
	} = ctx


	const [newUser, setNewUser] = useState({
		nombre: "",
		email: "",
		password: "",
		confirmarpassword: ""
	})

	const handleChange = (e) => {
		e.preventDefault()

		setNewUser({
			...newUser,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		if(newUser.password === newUser.confirmarpassword) {
		registerUser(newUser)
	}
	else {throw new Error('¡El password confirmado no es el mismo!')}

	}


	return (
		<div className="flex flex-col justify-center py-12 md:px-6 lg:px-8">
			<div className="md:mx-auto md:w-full md:max-w-md lg:max-w-md">
			<div className="flex justify-center mt-2">
        <img src={logo3} alt="logo"/>
        </div>
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Crea tu cuenta
				</h2>
				<p className="mt-2 text-center text-md text-gray-600">
					¿Ya tienes cuenta? &nbsp; <br/>
					<Link to="/iniciar-sesion">
						<button className="font-medium text-lime-700 hover:text-lime-500">
							Inicia sesión
						</button>
					</Link>
				</p>
			</div>

			<div className="mt-8 md:mx-auto md:w-full md:max-w-md lg:max-w-md">
				<div className="bg-lime-50 py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form 
					onSubmit={(event) => { handleSubmit(event) }}
					className="space-y-6">
						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">
								Nombre
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="nombre"
									type="text" placeholder='Cosme Fulanito'
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium text-gray-700">
								Correo electrónico
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="email"
									type="email" placeholder='cosme@fulanito.com'
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">
								Contraseña
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="password" minLength={6}
									type="password" placeholder='¿Homero? ¿Quien es Homero?'
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700">
								Confirma tu contraseña
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="confirmarpassword" minLength={6}
									type="password" placeholder='Mi nombre es Cosme Fulanito'
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>
		
						<div className="flex justify-center">
							<button type="submit" className="w-60 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-700 font-lg hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
								Crear cuenta
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}