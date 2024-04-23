import React from "react";
import USAMap from "react-usa-map";
import MapData from "./MapData";

// import "./styles.css";

// const red = "#CC0000";


// 0-100
const stateGreen = ["AK","DE","HI","ID","IA","KS","ME","MS","MT","NE","NH","ND","RI","SD","UT","VT","WV","WY"];

// 100-500
const stateYellow =["AL","AZ","AR","CO","CT","DC","FL","IN","KY","LA","MD","MA","MN","NV","NJ","NM","OK","OR","TN","WA","WI"];

// 500-1000
const stateOrange = ["GA","IL","MI","MO","NY","NC","OH","PA","SC","VA"];

// 1000+
const stateRed = ["CA","TX"];


function makeStatsConfig() {
  const config = {};

  stateGreen.forEach((state) => {
    config[state] = {};
    config[state].fill = "green";
  });
  stateYellow.forEach((state) => {
    config[state] = {};
    config[state].fill = "yellow";
  });
  stateOrange.forEach((state) => {
    config[state] = {};
    config[state].fill = "orange";
  });
  stateRed.forEach((state) => {
    config[state] = {};
    config[state].fill = "red";
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
      <div>
        <h1>Crime Data for the Nation</h1>
        <USAMap customize={statesCustomConfig} tit onClick={mapHandler} />
      </div>
      <div className="mapLegend">
        <p>Legend</p>
      </div>
    </div>
  );
}
