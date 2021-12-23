import React, { useContext, useEffect } from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
} from "victory";
import MoodContext from "../../context/Mood/MoodContext";
import logo3 from "../../images/logo3.png";

const moodData = [
  { day: 1, mood: 2 },
  { day: 2, mood: 1 },
  { day: 3, mood: 3 },
  { day: 4, mood: 2 },
  { day: 5, mood: 4 },
];

export default function Victory() {
  const ctx = useContext(MoodContext);
  const { getMoods, moods } = ctx;

  useEffect(() => {
    getMoods();
  }, []);

  return (
    <div>
      <div className="ml-7 mt-10">
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

      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mt-2">
            <ul>
              {moods.map((e) => {
                return (
                  <li>
                    <div id="container" class="w-4/5 mx-auto">
                      <div class="flex flex-col sm:flex-row">
                        <div class="sm:w-1/4 p-2">
                          <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                            <h2 class="text-xl font-medium text-gray-700">
                              {e.date}:
                            </h2>
                            <span class="text-blue-500 block mb-5">
                              {e.comment}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
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
