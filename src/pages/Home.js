import React, {useContext, useEffect, useState} from 'react'
import UserContext from '../context/User/UserContext'
import logo3 from "../images/logo3.png"
import { useNavigate } from 'react-router-dom';
import axiosClient from '../config/axios';

export default function Home() {

  const [userData, setUserData] = useState({}); //esto es vital para que funcione al primer render: se inicializa el estado
  const loadUserData = async () => { //se obtienen los datos con un async
    
    const res = await axiosClient.get("users/verifytoken")
    const data = res.data.data
    setUserData(data) //se asignan a userData con setUserData
  };

  useEffect(() => {
    loadUserData() //y al renderizar la página, se invoca el async, obteniendo los datos en userData
  }, []);

  const ctxUser = useContext(UserContext);
  const {authStatus, singleUser} = ctxUser;
  const navigate = useNavigate()

  

	return (
		<div>
			<div className="flex flex-row justify-center items-center">
        <div className="max-w-sm md:max-w-md lg:max-w-lg bg-lime-50 rounded overflow-hidden shadow-lg my-8 text-center">
		<img
            className="w-full"
            src="https://i2.pickpik.com/photos/790/916/941/plant-young-plants-small-plant-seedling-preview.jpg"
            alt="portada"
          />
		  <div className='flex justify-center'>
		  <img
            className="w-80 mt-4 text-center ml-9"
            src={logo3}
            alt="logo"
          />
		  </div>
      {authStatus ? 
<>
        <div className="px-6 py-0">
            <div className="font-bold text-3xl mb-2 text-yellow-900 justify-center mt-8">
            ¡Bienvenid@, {singleUser.nombre}!
            </div>
          </div>

          <div className="px-6 py-0">
            <div className="font-bold text-3xl mb-2 text-yellow-900 justify-center mt-8">
            <button type="submit" onClick={() => {navigate(`../profile/${singleUser._id}`)}}
                  className="my-5 bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  VER TU PERFIL
          </button>
            </div>
          </div>
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