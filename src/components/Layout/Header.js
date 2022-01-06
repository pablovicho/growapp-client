import React, {useEffect, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'
import logo1 from "../../images/logo1.png"

export default function Header() {

	const ctx = useContext(UserContext)
	const navigate = useNavigate()

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
			<nav className="px-2" aria-label="Top">
				<div className="py-2 flex justify-between">
					<div className="relative overflow-hidden flex">
						<Link to="/">
							<img className="absolute min-w-6/4 object-cover w-full " src={logo1} alt="" />
						</Link>
						<div className="absolute ">
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
								<button onClick={() => {logoutUser()
								navigate(`../`)
								}} href="/" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-lime-100 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-lime-600 hover:lime-500 ">CERRAR SESIÓN</button>
								</>
								:
								<>
									<Link to="/registro" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-lime-100 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-lime-600 hover:lime-500">
										Crear cuenta
									</Link>
									<Link to="/iniciar-sesion" className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-lime-100 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-lime-600 hover:lime-500">
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