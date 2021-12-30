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
    // const day = e.date.getUTCDate()
    return {day:e.date, mood:e.moodEntry}
  })

  return (
    <div className="bg-gradient-to-r from-lime-600 to-lime-500">
      <div className="ml-7 pt-10">
        <h1 className="text-center text-4x1">Estados de ánimo</h1>
        <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
          <VictoryAxis
            tickValues={["Dec 19", "Dec 20", "Dec 21", "Dec 22", "Dec 23"]}
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
                    <div id="container" className="w-4/5 mx-auto">
                      <div className="flex flex-col sm:flex-row">
                        {/* este es el width del cuadro del mood, está en w-auto, pero habrá que ajustarlo */}
                        <div className="sm:w-auto p-2"> 
                          <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                            <h2 className="text-xl font-medium text-gray-700">
                              {e.date}:
                            </h2>
                            <span className="text-blue-500 block mb-5">
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
