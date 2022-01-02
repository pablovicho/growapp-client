import React, { useContext, useEffect } from "react";
import MoodContext from "../../context/Mood/MoodContext";
import { Link, useParams } from "react-router-dom";

export default function SingleMood() {
  const params = useParams();
  const idMood = params.id;

  const ctx = useContext(MoodContext);
  const { getMood, updateMood, deleteMood, singleMood } = ctx;

  const moodArray = ["mal", "triste", "enojado", "normal", "feliz"];

  useEffect(() => {
    getMood(idMood)
  }, []);

  useEffect(() => {
		const {
			moodEntry,
      comment,
      day,
      month
		} = singleMood
  },[])

  console.log(singleMood)

  const toEdit = (event) => {
    event.preventDefault();
    window.location.replace(`../moods/${idMood}/edit`);
  };

  return (
    <div className="bg-lime-100">
      <div className="flex flex-row justify-center items-center">
        <div className="max-w-sm md:max-w-md lg:max-w-lg bg-lime-50 rounded overflow-hidden shadow-lg my-8 text-center">
          <img
            className="w-full"
            src="https://i2.pickpik.com/photos/790/916/941/plant-young-plants-small-plant-seedling-preview.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-semibold text-2xl mb-2 text-yellow-900 justify-center mt-1">
              Día:
            </div>
            <div className=" text-lg mb-2 text-lime-800 justify-center mt-0">
              {singleMood.day} of {singleMood.month}
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-2xl mb-2 text-yellow-900 justify-center mt-1">
              Tu estado de ánimo:
            </div>
            <div className=" text-lg mb-2 text-lime-800 justify-center mt-0">
              {moodArray[singleMood.moodEntry]}
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-2xl mb-2 text-yellow-900 justify-center mt-1">
              Tu comentario:
            </div>
            <div className=" text-lg mb-2 text-lime-800 justify-center mt-0">
              {singleMood.comment}
            </div>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <div className="mt-0 flex md:mt-0">
              <button
                onClick={(event) => {
                  toEdit(event);
                }}
                type="button"
                className="block uppercase mx-auto shadow bg-lime-700 hover:bg-lime-600 shadow-lg focus:shadow-outline focus:outline-none font-lg mb-4 text-white text-sm py-3 px-5 rounded"
              >
                <b>Editar estado de ánimo</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
