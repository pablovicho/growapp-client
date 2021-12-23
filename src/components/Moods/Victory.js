import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const moodData = [
  {day: 1, mood: 2},
  {day: 2, mood: 1},
  {day: 3, mood: 3},
  {day: 4, mood: 2},
  {day: 5, mood: 4},
];


export default function Victory() {
  return (
    <div>
      <div className="ml-7 mt-10">
        <h1 className='text-center text-4x1'>Estados de ánimo</h1>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={["Dec 19", "Dec 20", "Dec 21", "Dec 22", "Dec 23"]}
          />
          <VictoryAxis
            dependentAxis
            tickValues={["Mal", "Molesto", "Triste", "Normal", "Bien"]} //este es el que cambia el texto del data del eje y
          />
          <VictoryStack
            colorScale={"green"}
          >
            <VictoryBar
              data={moodData}
              x={"day"}
              y={"mood"}
            />
            
          </VictoryStack>
        </VictoryChart>
      </div>
    </div>
  )
}