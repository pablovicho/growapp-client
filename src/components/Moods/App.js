import React, {useEffect, useContext, useState} from 'react'
import MoodContext from '../../context/Mood/MoodContext'
import Chart from './Chart'

export default function App() {

  const ctx = useContext(MoodContext)
  const {getMoods, moods} = ctx

  const [moodData, setMoodData] = useState({
		time: "",
		value: 7,
    comment:"",
	})

    useEffect(() => {
      getMoods()
    }, [])
      console.log(moods)

      useEffect(() => {

        const {
          time,
          value,
          comment
        } = moods
    
        setMoodData({
          time: time,
          value: value,
          comment: comment,
        })
      }, [moods])

  return (
    <>
    <Chart chartData={moods}></Chart>
    </>
  )
}
