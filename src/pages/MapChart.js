import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const MapChart = () => {
  const [data, setData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    // Load the data from CSV
    csv("/data.csv").then(counties => {
      setData(counties);
    });
  }, []);

  // Define color scale for unemployment rate
  const colorScale = scaleQuantile()
    .domain(data.map(d => d.unemployment_rate))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"
    ]);

  // Function to handle click on geography
  const handleGeographyClick = (geo) => {
    const cur = data.find(s => s.id === geo.id);
    setSelectedPlace(cur);
  };

  return (
    <div style={{ position: "relative" }}>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={colorScale(data.find(s => s.id === geo.id)?.unemployment_rate)}
                onClick={() => handleGeographyClick(geo)}
                style={{ cursor: "pointer" }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {selectedPlace && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "white",
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px",
            zIndex: 9999,
          }}
        >
          <h4>{selectedPlace.name}</h4>
          <p>Unemployment Rate: {selectedPlace.unemployment_rate}%</p>
        </div>
      )}
    </div>
  );
};

export default MapChart;
