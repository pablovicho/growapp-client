import React from 'react'
import { useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import MoodContext from '../../context/Mood/MoodContext';
import { VictoryChart, VictoryScatter, VictoryAxis } from 'victory';
import logo3 from "./../../images/logo3.png"
import Emoji from '../Emoji';

export default function Scatter() {

  const ctx = useContext(MoodContext);
  const { getMoods, moods } = ctx;
  const params = useParams()
  const userId = params.id

  useEffect(() => {
    getMoods();
  }, []);
  // const navigate = useNavigate()

  const filteredMoods = moods.filter((mood) => {
    return mood.userId === userId
  })
 
      const getIcon = (moodEntry) => {
        if (moodEntry === 0) {return <Emoji symbol="💩" label="poo"/>} //no quiero el mood de moodArray, sino de cada elemento de moodArray
      else if (moodEntry === 1) {return <Emoji symbol="😡" label="angry"/>}
      else if (moodEntry === 2) {return <Emoji symbol="😢" label="sad"/>}
      else if (moodEntry === 3) {return <Emoji symbol="😐" label="meh"/>}
      else if (moodEntry === 4) {return <Emoji symbol="😀" label="happy"/>}
        }   // 😢😭😀😡💩😐

        const moodData = filteredMoods.map((e)=> { 
          return {day:e.day, mood:e.moodEntry+1, icon:getIcon(e.moodEntry)}
        }) 
        console.log(moodData)

  class MoodPoint extends React.Component {
      // const oneMood = datum._y >= 0 ? "😻" : "😹";
      /* <text x={moodArray.day} y={moodArray.mood} fontSize={30}>
          {oneMood}
        </text> */
        render() {
          const {x, y, datum} = this.props
          const emoji = getIcon(datum._y)
      return (
         <text x={x} y={y} fontSize={10}>{emoji}</text>
      );
    }
  }

  const monthArray = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"]

  return (
    <>
    <div className="ml-7 pt-10">
      <div className="font-bold text-3xl mb-2 justify-center mt-8 text-yellow-900">
        <h1 className="text-center text-4x1">Estados de ánimo</h1>
      </div>
        <VictoryChart domainPadding={10}>
           <VictoryAxis
            tickValues={[]}
          />
          <VictoryAxis
            dependentAxis
            tickValues={["💩", "😡", "😢", "😐", "😀"]} //este es el que cambia el texto del data del eje y
          /> 
          <VictoryScatter colorScale={"green"} data={moodData} 
          x={"day"} y={"mood"}>
          </VictoryScatter>
        </VictoryChart>
      </div>

{/* lista de moods */}
      <div className="flex flex-col justify-center py-8 w-auto sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mt-2">
            <ul>
              {filteredMoods.map((e) => {
                return (
                  <Link to={`/moods/${e._id}`}>
                  <li key={e._id}>
                    <div id="container" className="w-full mx-auto">
                      <div className="flex flex-col sm:flex-row ">
                        {/* este es el width del cuadro del mood, está en w-auto, pero habrá que ajustarlo */}
                        <div className="w-full p-2 "> 
                          <div className="flex flex-col bg-green-50 justify-center items-center bg-white rounded w-full max-w-sm md:max-w-md lg:max-w-lg pr-2 pl-10 pr-20 shadow-lg my-1">
                            <h2 className="text-xl font-medium text-yellow-800 text-center">
                              {e.day} de {monthArray[Number(e.month)]}:
                            </h2>
                            <span className="text-lime-700 block mb-5 text-left">
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
      </>
  )
}


