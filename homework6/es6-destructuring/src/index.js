import React from "react";
import ReactDOM from "react-dom";

import cars from "./practice";



const [honda, tesla] = cars;
const teslaTopSpeed = tesla.speedStats.topSpeed;
const teslaTopColour = tesla.coloursByPopularity[0];
const hondaTopColour = honda.coloursByPopularity[0];
const hondaTopSpeed = honda.speedStats.topSpeed;


ReactDOM.render(
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>,
    document.getElementById("root")
  );
