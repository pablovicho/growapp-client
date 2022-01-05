import React from "react";
import { VictoryChart, VictoryScatter } from "victory";
import Emoji from "../Emoji";

class CatPoint extends React.Component {
  render() {
    const {x, y, datum} = this.props; // VictoryScatter supplies x, y and datum
    const cat = datum._y >= 0 ? "😀" : "😭"; 
    // 😢😭😀😡💩😐
    return (
      <text x={x} y={y} fontSize={30}>
        {cat}
      </text>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <VictoryChart>
        <VictoryScatter
          dataComponent={<CatPoint/>}
          y={(d) => Math.sin(2 * Math.PI * d.x)}
          samples={15}
        />
      </VictoryChart>
    );
  }
}


export default App