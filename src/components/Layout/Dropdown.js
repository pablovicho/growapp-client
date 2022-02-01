import React, {Fragment, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'
import UserContext from '../../context/User/UserContext'
import logo1 from "../../images/logo1.png"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {

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
        <div className='flex justify-between px-2 bg-lime-600 py-0 items-center'>
        <div>
        <div className="overflow-hidden flex">
						<Link to="/">
							<img className="min-w-2/4 object-cover w-20 " src={logo1} alt="" />
						</Link>
					</div>
        </div>

        <div className='flex items-bottom'>
      <Menu as="div" className="relative inline-block text-left hover:-translate-y-1 hover:scale-110 duration-300">
        <div>
          <Menu.Button className="bg-lime-100 rounded-full flex items-center text-lime-600 hover:text-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-lime-100 focus:ring-lime-500">
            <span className="sr-only">Open options</span>
            <MenuIcon className="h-10 w-10" aria-hidden="true" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-lime-50 ring-1 ring-black ring-opacity-5 focus:outline-none">

            <Menu.Item>
                {({ active }) => (
                    <Link to="/sobre-nosotros" 
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm')}>
								Nosotros
							</Link>
                )}
              </Menu.Item>

            {authStatus ? 
            
            <>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`/profile/${_id}`}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Perfil
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to={`/moods/chart/${_id}`}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Estados de ánimo
                  </Link>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={() => {logoutUser() 
                    navigate(`../`)}}
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm'
                      )}
                    >
                      Cerrar sesión
                    </button>
                  )}
                </Menu.Item>
              </form>
</>
:
<>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/registro"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Crear cuenta
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/iniciar-sesion"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Iniciar sesión
                  </Link>
                )}
              </Menu.Item>
              </>
            }

          </Menu.Items>

        </Transition>
      </Menu>
      </div>
      </div>
    )
  }

