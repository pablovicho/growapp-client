//importaciones
import React, { useState, useContext, useEffect } from "react";
import { Params } from "react-router-dom";
import UserContext from "../../context/User/UserContext";
import MoodContext from "../../context/Mood/MoodContext";
import { Link, Outlet } from "react-router-dom";
import moment from "moment"
//png
import feliz from "../../images/Feliz.png";
import enojado from "../../images/Enojado.png";
import normal from "../../images/Normal.png";
import triste from "../../images/Triste.png";
import muerto from "../../images/Muerto.png";


export default function Profile() {
  // estado global: state
  const ctxUser = useContext(UserContext);
  const ctxMood = useContext(MoodContext);
  const { crearMood } = ctxMood;
  const { singleUser } = ctxUser;
  const { nombre, _id, email, terapeuta } = singleUser;

  // estado local: context  (apenas se capturan los datos, se utilizan en un action.post)
  const [newMood, setNewMood] = useState({
    moodEntry: 7,
    comment: "",
    date: moment().format('L'),
    userId: _id
  });

  

  const handleChange = (e) => {
    e.preventDefault();

    setNewMood({
      ...newMood,
      [e.target.name]: e.target.value,
    });
    console.log("hola, esto es el handleChange cambiando", newMood.date)
  };

  const handleSubmit = (event) => {
    // console.log(newMood)
    event.preventDefault();
    crearMood(newMood);
    verMapa(event)
  };

  const verMapa = (event) => {
    event.preventDefault();
    window.location.replace(`../moods/chart/${_id}`);
  }

  return (
    <div className="bg-gradient-to-tl from-lime-700 to-lime-600">
    {/* tarjeta de perfil */}
   
      <div className="flex flex-row justify-center items-center">
        <div className="max-w-sm md:max-w-md lg:max-w-lg bg-orange-50 rounded overflow-hidden shadow-lg my-8 text-center">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-yellow-900 justify-center mt-8">
              ¡Hola, {nombre}!
            </div>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <div className="mt-0 flex md:mt-0">
              <Link to={`/editar/${_id}`}>
                <button
                  type="button"
                  className="block uppercase mx-auto shadow bg-lime-600 hover:bg-lime-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500 font-lg mb-4 text-white text-sm py-3 px-5 rounded"
                >
                  <b>Editar perfil</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
{/* forma para guardar moods */}
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col bg-orange-50 rounded w-full max-w-sm md:max-w-md lg:max-w-lg justify-center pr-2 pl-1 justify-self-center shadow-lg my-2 text-center">
         
        <form onSubmit={(event) => {handleSubmit(event)}}> 
            <h1 className="text-2xl text-lime-800 font-semibold mt-5 mb-2">¿Cómo te encuentras hoy?</h1>
            <div className="flex flex-row justify-center items-center">

              <input name="moodEntry" type="image" src={feliz} alt="Happy face" className="w-20"
                onClick={(e) => {handleChange(e)}}
                value={4} id="happy">
              </input>

             <input name="moodEntry" type="image" src={normal} alt="Normal face" className="w-20"
                onClick={(e) => {handleChange(e)}}
                value={3} id="normal">
              </input>

              <input name="moodEntry" type="image" src={triste} alt="Sad face" className="w-20"
                onClick={(e) => {handleChange(e)}}
                value={2} id="sad">
              </input>

              <input name="moodEntry" type="image" src={enojado} alt="Angry face" className="w-20"
                onClick={(e) => {handleChange(e)}}
                value={1} id="angry">
              </input>
              
              <input name="moodEntry" type="image" src={muerto} alt="Dead face" className="w-20"
                onClick={(e) => {handleChange(e)}}
                value={0} id="dead">
              </input>
            </div>

           
            <div className="flex flex-col justify-center items-center mt-3  ">
            <textarea placeholder="¿Quieres añadir un comentario?" name="comment" className="w-11/12 border-solid" rows="3" onChange={(e) => {handleChange(e)}}></textarea>

            <button type="submit"
                  className="my-5 bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-bold text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
                  GUARDAR
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-orange-50 rounded max-w-sm md:max-w-md w-full lg:max-w-lg pr-2 pl-20 pr-20 shadow-lg my-8 text-center">
          <button type="submit" onClick={(e) => {verMapa(e)}}
                  className="my-5 bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-bold text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
                  VER MÁS
          </button>
        </div>
    </div>

    </div>
  );
}
