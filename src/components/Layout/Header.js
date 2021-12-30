import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'
import logo1 from "../../images/logo1.png"

export default function Header() {

	const ctx = useContext(UserContext)

	const {
		singleUser,
		verifyingToken,
		logoutUser,
		authStatus
	} = ctx

	const {_id} = singleUser

	useEffect(() => {
		verifyingToken()
	}, [])




	return (
		<header className="bg-lime-700">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-3 flex items-center justify-between border-b border-indigo-500 lg:border-none">
					<div className="flex items-center">
						<Link to="/">
							<img className="h-auto sm:object-scale-down w-auto shrink" src={logo1} alt="" style={{width:"50%", height:"auto"}} />
						</Link>
						<div className="ml-10 space-x-8 lg:block">
							<Link to="/sobre-nosotros" className="hidden md:block max-w-7xl text-base text-lg font-medium text-white hover:text-blue-50">
								NOSOTROS
							</Link>

						</div>
					</div>
					<div className="flex items-center justify-around sm:flex-1 ">
						{
							authStatus ?
								<>
								<Link to={`/profile/${_id}`} className="text-center font-medium text-lg mr-4 text-white hover:text-blue-50">
									PERFIL
								</Link>
								<button onClick={() => logoutUser()} href="/" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-blue-500 hover:to-blue-600">CERRAR SESIÓN</button>
								</>
								:
								<>
									<Link to="/registro" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-blue-500 hover:to-blue-600">
										Crear cuenta
									</Link>
									<Link to="/iniciar-sesion" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-blue-500 hover:to-blue-600">
										Iniciar sesión
									</Link>
								</>
						}

					</div>
				</div>
			</nav>
		</header>
	)
}