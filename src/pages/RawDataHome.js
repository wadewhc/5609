import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate   } from 'react-router-dom';


const RawDataHome = () => {
    const navigate  = useNavigate ();

    const handleSelect = (eventKey) => {
        navigate(eventKey); // Use the event key as the path to navigate
    };
      
	return (
        <div className="rawdata">
			<h1>Raw Data</h1>
            <p>
                The raw data page allows users to select any year between 2012 and 2022 to view detailed statistics on various weapons used in homicide incidents.
			</p>
		<Dropdown style={{ display: 'flex', justifyContent: 'center'}} onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select a year
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2012">2012</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2013">2013</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2014">2014</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2015">2015</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2016">2016</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2017">2017</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2018">2018</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2019">2019</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2020">2020</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2021">2021</Dropdown.Item>
                <Dropdown.Item eventKey="/trend-analysis/raw-data-table-2022">2022</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
	);
};

export default RawDataHome;