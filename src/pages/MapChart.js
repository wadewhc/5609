import React from "react";
import USAMap from "react-usa-map";
import MapData from "./MapData";

// import "./styles.css";

// const red = "#CC0000";

const USState = [
  "AZ","NY","CT","MD","WA","OR","NV","NM","DC","DE","MA","MN","WI","IL","VT","RI","NJ","CO","CA","PA","VA","GA","ME","NH","HI","ID","MT",
  "IN","TE","AK","KY","NC","WV","WY","ND","SD","NE","UT","TN","KS","OK","TX","IO","MO","AR","AL","MS","LA","MI","LA","FL","SC","OH","IA",
];


function makeStatsConfig() {
  const config = {};

  USState.forEach((state) => {
    config[state] = {};
    config[state].fill = "black";
  });

  return config;
}

export default function App() {
  const statesCustomConfig = makeStatsConfig();

  console.log("data come her", statesCustomConfig);

  const mapHandler = (event) => {
    for(let usState in MapData){
      if (event.target.dataset.name === usState){
        alert(JSON.stringify(usState) + "\n" + JSON.stringify(MapData[usState], null, 2));
      }
    }
    
  };

  return (
    <div className="mapTitle">
      <h1>Crime Data for the Nation</h1>
      <USAMap customize={statesCustomConfig} tit onClick={mapHandler} />
    </div>
  );
}
