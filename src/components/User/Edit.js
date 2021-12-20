import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/User/UserContext";
import { useParams } from "react-router-dom";

export default function Edit() {
  // estado global: state
  const ctx = useContext(UserContext);
  const { userSubmitForm, getUser, updateUser } = ctx;
  const { nombre, email, password, terapeuta } = ctx.currentUser;
  const params = useParams();
  const idUser = params.id;

  // estado local: context  (apenas se capturan los datos, se utilizan en un action.post)
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    password: "",
    terapeuta: "",
  });

  // funciones

  //actualización
  useEffect(() => {
    const updateLocalState = async () => {
      //descargar los datos de la página
      await getUser(idUser);
      //cambiar el estado con los nuevos cambios del global al local
      setUserData({
        nombre,
        email,
        password,
        terapeuta,
      });
      //return y cerramos
      return;
    };
    updateLocalState();
  }, []);

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

                  {/* <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contraseña
                    </label>
                    <input
                      value={userData.password}
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="password"
                      name="password"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div> */}

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
                <button
                  type="submit"
                  className="bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  GUARDAR
                </button>
                <button
                  type="submit"
                  className="bg-red-600 border mt-3 w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  BORRAR TU CUENTA
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
