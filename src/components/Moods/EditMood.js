import React, { useState, useContext, useEffect } from "react";
import MoodContext from "../../context/Mood/MoodContext";
import { useParams } from "react-router-dom";
import logo4 from "../../images/logo4.png"

export default function EditMood() {
  // estado global: state
  const params = useParams();
  const idMood = params.id;

  const ctx = useContext(MoodContext);
  const { getMood, updateMood, deleteMood, singleMood } = ctx;
  
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
  }

  const handleDelete = (event) => {
    event.preventDefault()
    deleteMood(moodData, idMood)
  }

  return (
    <>
      <form
            onSubmit={(event) => {
              handleSubmit(event)
            }}
          >
      <div className="flex flex-column  justify-center items-center">
        <div className="max-w-sm bg-orange-50 rounded overflow-hidden shadow-lg my-8 text-center">
        <div className="flex justify-center mt-2">
        <img src={logo4} alt="logo"/>
        </div>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 bg-orange-50 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Editar estado de ánimo
                  </h3>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="moodEntry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Estado de ánimo
                    </label>
                    <input
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      type="text"
                      name="moodEntry"
                      value={moodData.moodEntry}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <br />

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      comentario
                    </label>
                    
                      
                      <textarea
                      type="textarea"
                      name="comment"
                      rows="3"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={moodData.comment}
                      onChange={(event) => {
                        handleChange(event);
                      }}
                      >{singleMood.comment}</textarea>
                    
                  </div>

                  <br/>
                  
                </div>
              </div>
              <div className="flex flex-col px-4 py-3 bg-orange-50 text-center items-center sm:px-6">

                <button
                  type="submit" className="bg-lime-600 border w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2"
                >GUARDAR
                </button>

                <button onClick={(event) => {handleDelete(event)}}
                  type="submit"
                  className="bg-red-600 border mt-3 w-40 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  BORRAR
                </button>
              </div>
            </div>
          
        </div>
      </div>
      </form>
    </>
  );
}
