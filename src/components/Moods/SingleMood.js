import React, {useParams, useContext} from 'react'
import MoodContext from '../../context/Mood/MoodContext';
import { Link } from 'react-router-dom'

export default function SingleMood() {
    const params = useParams();
  const idMood = params.id;

  const ctx = useContext(MoodContext);
  const { getMood, updateMood, deleteMood, singleMood } = ctx;

    return (
        <div>
            
      <div className="flex flex-row justify-center items-center">
        <div className="max-w-sm md:max-w-md lg:max-w-lg bg-orange-50 rounded overflow-hidden shadow-lg my-8 text-center">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2 text-yellow-900 justify-center mt-8">
              Tu estado de ánimo
            </div>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <div className="mt-0 flex md:mt-0">
              <Link to={`/editar/${idMood}`}>
                <button
                  type="button"
                  className="block uppercase mx-auto shadow bg-lime-700 hover:bg-lime-600 shadow-lg focus:shadow-outline focus:outline-none font-lg mb-4 text-white text-sm py-3 px-5 rounded"
                >
                  <b>Editar estado de ánimo</b>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
