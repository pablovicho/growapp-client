//importaciones
import React, { useState, useContext, useEffect } from "react";
import MoodContext from '../../context/Mood/MoodContext';
import { Chart, registerables, TimeScale, TimeSeriesScale, LinearScale } from 'chart.js'
Chart.register(...registerables)




export default function Chart1 () {
//contexto global
    const ctx = useContext(MoodContext)
    const {getMoods} = ctx
    const moodArray = getMoods()
    const chartCtx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {})
      
      const config = {
      type: 'line',
      data: moodArray,
      options: {
        plugins: {
          title: {
            text: 'Chart.js Time Scale',
            display: true
          }
        },
        scales: {
          x: {
            type: 'time',
            time: {
              // Luxon format string
              tooltipFormat: 'DD T'
            },
            title: {
              display: true,
              text: 'Date'
            }
          },
          y: {
            title: {
              display: true,
              text: 'value'
            }
          }
        }
      }
    }

    const DATA_COUNT = moodArray.length
    const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100}
    
    const data = {
      labels: [ // Date Objects
        Utils.newDate(0),
        Utils.newDate(1),
        Utils.newDate(2),
        Utils.newDate(3),
        Utils.newDate(4),
        Utils.newDate(5),
        Utils.newDate(6)
      ],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        borderColor: Utils.CHART_COLORS.red,
        fill: false,
        data: Utils.numbers(NUMBER_CFG),
      }, {
        label: 'My Second dataset',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        borderColor: Utils.CHART_COLORS.blue,
        fill: false,
        data: Utils.numbers(NUMBER_CFG),
      }, {
        label: 'Dataset with point data',
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
        borderColor: Utils.CHART_COLORS.green,
        fill: false,
        data: [{
          x: Utils.newDateString(0),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(5),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(7),
          y: Utils.rand(0, 100)
        }, {
          x: Utils.newDateString(15),
          y: Utils.rand(0, 100)
        }],
      }]
    };

  return (
    <div>
      <div>
        <canvas id="myChart" width={400} height={400}></canvas>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </div>
  );
};
