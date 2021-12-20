import React, {useState, useContext, useEffect} from 'react'
import UserContext from '../../context/User/UserContext'
import feliz from '../../images/Feliz.png'
import enojado from '../../images/Enojado.png'
import normal from  '../../images/Normal.png'
import triste from '../../images/Triste.png'
import muerto from '../../images/Muerto.png'
import { Link } from 'react-router-dom'

export default function Profile() {
    const ctx = useContext(UserContext)
    const  {currentUser} = ctx
    const {nombre, _id, email, terapeuta} = currentUser
    


    return (
        <> 
        <div className="flex flex-row justify-center items-center">
           <div className="max-w-sm bg-orange-50 rounded overflow-hidden shadow-lg my-8 text-center">
  <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-yellow-900 justify-center mt-8">¡Hola, {nombre}!</div>
  </div>
  <div className="px-6 py-4">
  <div className="mt-4 flex md:mt-0">
        <Link to={`/editar/${_id}`}>
          <button
            type="button"
            className="block uppercase mx-auto shadow bg-lime-700 hover:bg-lime-600 shadow-lg focus:shadow-outline focus:outline-none font-lg mb-4 text-white text-sm py-3 px-5 rounded">Editar perfil
          </button>
        </Link>
      </div>
  </div>
</div>
</div>

<div className="flex flex-row justify-center items-center">
<div className="flex flex-col bg-lime-200 max-w-sm justify-center pr-2 pl-1 justify-self-center shadow-lg my-8 text-center">
<h1 className="text-lg">¿Cómo te encuentras hoy?</h1>
<div className="flex flex-row justify-center items-center">
<img src={feliz} alt="Happy face" className="w-20"/>
<img src={normal} alt="Normal face" className="w-20"/>
<img src={triste} alt="Sad face" className="w-20"/>
<img src={enojado} alt="Angry face" className="w-20"/>
<img src={muerto} alt="Dead face" className="w-20"/>
</div>
</div>
</div>

        </>
    )
}
