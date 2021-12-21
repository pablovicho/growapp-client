import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/User/UserContext";
import { useParams } from "react-router-dom";

import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export default function Edit() {
  // estado global: state
  const params = useParams();
  const idUser = params.id;

  const ctx = useContext(UserContext);
  const { getUser, updateUser, deleteUser, singleUser, currentUser } = ctx;
  
  // const navigate = useNavigate()
  

  // estado local: context  (apenas se capturan los datos, se utilizan en un action.post)
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    terapeuta: "",
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
      terapeuta,
		} = ctx.singleUser

		setUserData({
      
			nombre: nombre,
			email: email,
			terapeuta: terapeuta,
		})
	}, [ctx.singleUser])  // este single revisa cada que se cambia la variable, y hace entonces y solo entonces el async/await

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(userData, idUser);
  };

  return (
    <>
      <div className="flex flex-column justify-center items-center">
        <div className="max-w-sm bg-orange-50 rounded overflow-hidden shadow-lg my-8 text-center">
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Editar usuario
                  </h3>
                </div>

                <div className="grid grid-cols-6 gap-6">
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
                        <div className="flex items-center">
                          <input
                            name="terapeuta"
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            type="radio"
                            value="false"
                            id="usuario"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="email"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Principal
                          </label>
                        </div>

                        <div className="flex items-center">
                          <input
                            onChange={(e) => {
                              handleChange(e);
                            }}
                            name="terapeuta"
                            type="radio"
                            id="terapeuta"
                            value="true"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="sms"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Acompañante
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-4 py-3 bg-gray-50 text-center items-center sm:px-6">
              {/* <form afterSubmit={() => navigate('/profile')}> */}
{/* <Link to={`/profile`}> */}
                <button
                  type="submit"
                  className="bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  GUARDAR
                </button>
                {/* </Link> */}
                {/* </form> */}

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
          </form>
        </div>
      </div>
    </>
  );
}
