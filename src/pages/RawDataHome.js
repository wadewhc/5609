import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate   } from 'react-router-dom';


const RawDataHome = () => {
    const navigate  = useNavigate ();

    const handleSelect = (eventKey) => {
        navigate(eventKey); // Use the event key as the path to navigate
    };
      
	return (
		<Dropdown style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} onSelect={handleSelect}>
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
	);
};

export default RawDataHome;