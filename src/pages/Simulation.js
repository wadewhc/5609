import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    FormControl,
    // FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
  } from '@mui/material';
import MapData from "./MapData";




const Simulation = () => {
	const [selectedState, setSelectedState] = useState("Select a State");

	const handleSelect = (eventKey) => {
		setSelectedState(eventKey);
	};
	

	return (
		<div className="simulation">
			<h1>Situation Simulations</h1>
			<div style={{ display: "flex" }}>
				<p>State: </p>
				<Dropdown style={{ marginLeft: "50px" }} onSelect={handleSelect}>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						{selectedState}
					</Dropdown.Toggle>

					<Dropdown.Menu style={{ maxHeight: "300px", overflowY: "auto" }}>
						{Object.keys(MapData).map((state) => (
							<Dropdown.Item key={state} eventKey={state}>{state}</Dropdown.Item>
						))}
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<div style={{ display: "flex" }}>
				<p>Age: </p>
				<FormControl >
					<RadioGroup
						row
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="Handguns"
						name="radio-buttons-group"
						style={{ marginLeft: "50px", marginTop: "10px" }}
						// onChange={}
					>
						<FormControlLabel value="<16" control={<Radio />} label="<16" />
						<FormControlLabel value="17-30" control={<Radio />} label="17-30" />
						<FormControlLabel value="30-45" control={<Radio />} label="30-45" />
						<FormControlLabel value="Over 45" control={<Radio />} label="Over 45" />
					</RadioGroup>
				</FormControl>
			</div>
		</div>
	);
};

export default Simulation;