import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";
import MoodContext from "../../context/Mood/MoodContext";
import logo3 from "../../images/logo3.png";

// const filter = (mood) => {
// return mood.
// }

export default function Victory() {
  const ctx = useContext(MoodContext);
  const { getMoods, moods } = ctx;
  const params = useParams()
  const userId = params.id

  useEffect(() => {
    getMoods();
  }, []);

  const filteredMoods = moods.filter((mood) => {
    return mood.userId === userId
  })
  console.log(filteredMoods)

  const moodData = filteredMoods.map((e)=> {
     const day = e.day
    return {day:day, mood:e.moodEntry}
  })

  return (
    <div className="bg-gradient-to-r from-lime-600 to-lime-500">
      <div className="ml-7 pt-10">
        <h1 className="text-center text-4x1">Estados de ánimo</h1>
        <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={[]}
          />
          <VictoryAxis
            dependentAxis
            tickValues={["Mal", "Molesto", "Triste", "Normal", "Bien"]} //este es el que cambia el texto del data del eje y
          />
          <VictoryStack colorScale={"green"}>
            <VictoryBar data={moodData} x={"day"} y={"mood"} />
          </VictoryStack>
        </VictoryChart>
      </div>

      <div className="flex flex-col justify-center py-8 w-auto sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mt-2">
            <ul>
              {filteredMoods.map((e) => {
                return (
                  <Link to={`/moods/${e._id}`}>
                  <li>
                    <div id="container" className="w-full mx-auto">
                      <div className="flex flex-col sm:flex-row">
                        {/* este es el width del cuadro del mood, está en w-auto, pero habrá que ajustarlo */}
                        <div className="w-full p-2"> 
                          <div className="flex flex-col justify-center items-center bg-white rounded w-full max-w-sm md:max-w-md lg:max-w-lg pr-2 pl-10 pr-20 shadow-lg my-1">
                            <h2 className="text-xl font-medium text-gray-700 text-center">
                              {e.day} del {e.month}:
                            </h2>
                            <span className="text-slate-500 block mb-5 text-left">
                              {e.comment}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="flex justify-center">
          <img src={logo3} alt="logo" className="max-w-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
