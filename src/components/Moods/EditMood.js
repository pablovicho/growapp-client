import React, { useState, useContext, useEffect } from "react";
import MoodContext from "../../context/Mood/MoodContext";
import { useParams } from "react-router-dom";
import logo4 from "../../images/logo4.png"
import UserContext from "../../context/User/UserContext";

//png
import feliz from "../../images/Feliz.png";
import enojado from "../../images/Enojado.png";
import normal from "../../images/Normal.png";
import triste from "../../images/Triste.png";
import muerto from "../../images/Muerto.png";

export default function EditMood() {
  // estado global: state
  const params = useParams();
  const idMood = params.id;

  const ctx = useContext(MoodContext);
  const { getMood, updateMood, deleteMood, singleMood } = ctx;
  const userCtx = useContext(UserContext)
  const {singleUser} = userCtx
  
  // const navigate = useNavigate()
  

  // estado local: context  (apenas se capturan los datos, se utilizan en un action.post)
  const [moodData, setMoodData] = useState({
    moodEntry: 7,
    comment: "",
  });

  // funciones

 // USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL

  useEffect(() => {
    getMood(idMood)
  }, []);

  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
  useEffect(() => {
		const {
	     moodEntry,
         comment,
      
		} = singleMood

		setMoodData({
			moodEntry: moodEntry,
			comment: comment,
		})
	}, [singleMood])  // este single revisa cada que se cambia la variable, y hace entonces y solo entonces el async/await

  const handleChange = (e) => {
    e.preventDefault();
    setMoodData({
      ...moodData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMood(moodData, idMood);
    window.location.replace(`../chart/${singleUser._id}`);
  }

  const handleDelete = (event) => {
    event.preventDefault()
    deleteMood(moodData, idMood)
    window.location.replace(`../chart/${singleUser._id}`);
  }

  return (
    <div className="flex flex-row justify-center items-center">
    <div className="flex flex-col bg-orange-50 rounded w-full max-w-sm md:max-w-md lg:max-w-lg justify-center pr-2 pl-1 justify-self-center shadow-lg my-2 text-center">
     
    <form onSubmit={(event) => {handleSubmit(event)}}> 
        <h1 className="text-2xl text-lime-800 font-semibold mt-5 mb-2">Editar estado de ánimo</h1>
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
        <textarea value={moodData.comment} name="comment" className="w-11/12 border-solid" rows="3" onChange={(e) => {handleChange(e)}}></textarea>

        <button type="submit"
              className="my-5 bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-bold text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500">
              GUARDAR
        </button>
        <button onClick={(event) => {handleDelete(event)}}
                  type="submit"
                  className="bg-red-600 border mt-3 w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  BORRAR
                </button>
      </div>
    </form>
  </div>
</div>

  );
}
