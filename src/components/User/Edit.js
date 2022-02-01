import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/User/UserContext";
import { useParams } from "react-router-dom";
import logo4 from "../../images/logo4.png"

import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function Edit() {
  // estado global: state
  const params = useParams();
  const navigate = useNavigate();
  const idUser = params.id;

  const ctx = useContext(UserContext);
  const { getUser, updateUser, deleteUser, singleUser } = ctx;
  
  // estado local: context  (apenas se capturan los datos, se utilizan en un action.post)
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
  });

  // funciones

 // USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL

  useEffect(() => {
    getUser(idUser)
  }, []);

  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
  useEffect(() => {
		const {
			nombre,
      email,
		} = singleUser

		setUserData({
			nombre: nombre,
			email: email,
		})
	}, [singleUser])  // este single revisa cada que se cambia la variable, y hace entonces y solo entonces el async/await

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userData, idUser);
  }

  return (
    <div className="">
      <form
            onSubmit={(event) => {
              handleSubmit(event)
            }}
          >
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-sm bg-lime-50 rounded overflow-hidden shadow-lg my-8 text-center">
        <div className="flex justify-center mt-2">
        <img src={logo4} alt="logo"/>
        </div>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="flex flex-col py-6 px-4 bg-lime-50 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Editar usuario
                  </h3>
                </div>

                <div className="flex flex-col">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nombre
                    </label>
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="nombre"
                      value={userData.nombre}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <br />

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Correo electrónico
                    </label>
                    <input
                      value={userData.email}
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="email"
                      name="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <br/>
                  <div className="">
                  
                    <label className="text-base font-medium text-gray-900">
                      Tipo de usuario
                    </label>
                    <fieldset className="mt-4">
                      <legend htmlFor="usuario" className="sr-only">
                        Usuario
                      </legend>
                      <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                       
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-4 pt-5 pb-3 bg-lime-50 text-center items-center sm:px-6">

                <button onClick={() => {navigate(`/profile/${idUser}`)}}
                  type="submit" className="bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2"
                >GUARDAR
                </button>

                {/* <Link to={`/`}>
                <button onClick={deleteUser()}
                  type="submit"
                  className="bg-red-600 border mt-3 w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  BORRAR TU CUENTA
                </button>
                </Link> */}
              </div>
            </div>
          
        </div>
      </div>
      </form>
    </div>
  );
}
