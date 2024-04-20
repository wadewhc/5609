// Filename - pages/Homepage.js

import React from "react";

const Homepage = () => {
    return (
		<div className="homepage">
			<h1>About</h1>
			<p>
				This website aims to illuminate trends and regional differences in weapon use in U.S. homicides,
				based on the Expanded Homicide Data collected by the FBI from 2010 to 2022.
				By focusing on the specific aspect of weapons used in these crimes, the project seeks to uncover how weapon preferences
				have evolved over the years and how these trends vary across different parts of the United States.
			</p>
			<p>
				Reference:  https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/home 
			</p>
		</div>
    );
};

export default Homepage;
