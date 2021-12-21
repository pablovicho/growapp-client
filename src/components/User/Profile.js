import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/User/UserContext";
import MoodContext from "../../context/Mood/MoodContext";
import feliz from "../../images/Feliz.png";
import enojado from "../../images/Enojado.png";
import normal from "../../images/Normal.png";
import triste from "../../images/Triste.png";
import muerto from "../../images/Muerto.png";
import { Link } from "react-router-dom";

export default function Profile() {
  // estado global: state

  const ctx = useContext(UserContext);
  const ctxMood = useContext(MoodContext);
  const { crearMood } = ctxMood;
  const { singleUser } = ctx;
  const { nombre, _id, email, terapeuta } = singleUser;

  // estado local: context  (apenas se capturan los datos, se utilizan en un action.post)
  const [newMood, setNewMood] = useState({
    moodEntry: "",
    comment: "",
    date: new Date(),
  });


  const handleChange = (e) => {
    e.preventDefault();

    setNewMood({
      ...newMood,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    crearMood(newMood);
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="max-w-sm bg-orange-50 rounded overflow-hidden shadow-lg my-8 text-center">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-yellow-900 justify-center mt-8">
              ¡Hola, {nombre}!
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="mt-4 flex md:mt-0">
              <Link to={`/editar/${_id}`}>
                <button
                  type="button"
                  className="block uppercase mx-auto shadow bg-lime-700 hover:bg-lime-600 shadow-lg focus:shadow-outline focus:outline-none font-lg mb-4 text-white text-sm py-3 px-5 rounded"
                >
                  Editar perfil
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col bg-lime-200 max-w-sm justify-center pr-2 pl-1 justify-self-center shadow-lg my-8 text-center">
          <form onSubmit={(event) => {handleSubmit(event)}}>
          
            <h1 className="text-lg">¿Cómo te encuentras hoy?</h1>
            <div className="flex flex-row justify-center items-center">

              <button name="moodEntry"
                onChange={(e) => {handleChange(e)}}
                value={4} id="happy">
                <img src={feliz} alt="Happy face" className="w-20" />
              </button>

              <button name="moodEntry"
                onChange={(e) => {handleChange(e)}}
                value={3} id="normal">
                <img src={normal} alt="Normal face" className="w-20"/>
              </button>

              <button name="moodEntry"
                onChange={(e) => {handleChange(e)}}
                value={2} id="sad">
                <img src={triste} alt="Sad face" className="w-20" />
              </button>

              <button name="moodEntry"
                onChange={(e) => {handleChange(e)}}
                value={1} id="angry">
                <img src={enojado} alt="Angry face" className="w-20"/>
              </button>
              <button name="moodEntry"
                onChange={(e) => {handleChange(e)}}
                value={0} id="dead">
              <img src={muerto} alt="Dead face" className="w-20" />
              </button>
            </div>

            <div className="flex flex-col justify-center items-center">
            <textarea placeholder="¿Quieres añadir un comentario?" name="comment" className="w-10/12" rows="3"></textarea>
            
            <button type="submit"
                  className="my-3 bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  GUARDAR
                </button>
                </div>
          </form>
        </div>
      </div>
    </>
  );
}
