import React, {useContext, useEffect} from 'react'
import PropTypes from 'prop-types'
import MoodContext from '../../context/Mood/MoodContext'
import moment from 'moment';


import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

moment().format();

// const handleChange = (e) => {
//   e.preventDefault();
//   setMoodData({
//     ...moodData,
//     [e.target.name]: e.target.value,
//   })
// }

const data2 = [{
  time: new Date(),
  value: 1
},
{
  time: new Date(),
  value: 2
},
{
  time: new Date(),
  value: 4
},
{
  time: new Date(),
  value: 3
}

]


export default function Chart () {
  const ctx = useContext(MoodContext)
  const {getMoods, moods} = ctx

  useEffect(() => {
		getMoods()
	}, [])
		

  const data = moods.map(e => {
    return({
    time: e.date,
    value: e.moodEntry
  })
})

  const propTypes = {
    chartData: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string,
        value: PropTypes.number
      })
    ).isRequired
  }

  return (
    <>
    
  <ResponsiveContainer width = '95%' height = {500} >
    <ScatterChart>
      <XAxis
        dataKey = 'time'
        domain = {['auto', 'auto']}
        name = 'Time'
        tickFormatter = {(time) => moment(time).format('DD')}
        type = 'number'
      />
      <YAxis dataKey = 'value' name = 'Value' />

      <Scatter
        data = {data2}
        line = {{ stroke: '#eee' }}
        lineJointType = 'monotoneX'
        lineType = 'joint'
        name = 'Values'
      />

    </ScatterChart>
  </ResponsiveContainer>
  </>
)

}