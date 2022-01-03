import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext'
import logo3 from "../images/logo3.png"
import { Link } from 'react-router-dom';



export default function Home() {
  const ctxUser = useContext(UserContext);
  const { singleUser, authStatus } = ctxUser;
  const { nombre, _id } = singleUser;


	return (
		<div>
			
			<div className="flex flex-row justify-center items-center">
        <div className="max-w-sm md:max-w-md lg:max-w-lg bg-orange-50 rounded overflow-hidden shadow-lg my-8 text-center">
		<img
            className="w-full"
            src="https://i2.pickpik.com/photos/790/916/941/plant-young-plants-small-plant-seedling-preview.jpg"
            alt="portada"
          />
		  <div className='flex justify-center'>
		  <img
            className="w-80 mt-4 text-center"
            src={logo3}
            alt="logo"
          />
		  </div>
      {authStatus ? 
<>
        <div className="px-6 py-0">
            <div className="font-bold text-3xl mb-2 text-yellow-900 justify-center mt-8">
            ¡Bienvenid@, {nombre}!
            </div>
          </div>

      <Link to = {`../profile/${_id}`}>
          <div className="px-6 py-0">
            <div className="font-bold text-3xl mb-2 text-yellow-900 justify-center mt-8">
            <button type="submit"
                  className="my-5 bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  VER TU PERFIL
          </button>
            </div>
          </div>
      </Link>
          </>
:
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-yellow-900 justify-center mt-8">
            ¡Bienvenid@!
            </div>
          </div>
        }
          <div className="px-6 py-4 flex justify-center">
            <div className="mt-0 flex md:mt-0">
            </div>
          </div>
        </div>
      </div>

		</div>
	)
}