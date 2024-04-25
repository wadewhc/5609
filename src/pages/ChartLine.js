// import * as React from 'react';
import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import normalizedChartLineData from './ChartLineData';
import Form from 'react-bootstrap/Form';
  

const xLabels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

function ChartLine() {
    const [checkboxState, setCheckboxState] = useState({
        "Handguns": true,
        "Firearms, type not stated": false,
        "Knives or cutting instruments": false,
        "Other weapons or weapons not stated": false,
        "Personal weapons (hands/fists/feet/etc.)": false,
        "Blunt objects (clubs/hammers/etc.)": false,
        "Rifles": false,
        "Shotgun": false,
        "Other guns": false,
        "Narcotics": false,
        "Asphyxiation": false,
        "Fire": false,
        "Strangulation": false,
        "Poison": false,
        "Drowning": false,
        "Explosives": false,
    });

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        setCheckboxState(prevState => ({
          ...prevState,
          [id]: checked
        }));
    };

    const series = Object.entries(checkboxState).reduce((acc, [key, value]) => {
        if (value) {  // Only add to the series if the checkbox is checked
            acc.push({
                data: normalizedChartLineData[key],
                label: key
            });
        }
        return acc;
    }, []);

    return (
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ flex: 1, marginLeft: '250px', marginTop: '50px' }}>
                <Form>
                    {Object.keys(checkboxState).map((weapon) => (
                        <Form.Check 
                        key={weapon}
                        type="checkbox"
                        id={weapon}
                        label={`${weapon}`}
                        checked={checkboxState[weapon]}
                        onChange={handleCheckboxChange}
                        />
                    ))}
                </Form>

            </div>
            <div style={{ flex: 2 }}>
                <LineChart
                    width={800}
                    height={480}
                    series={series}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                />
            </div>
                
        </div>
        
    );
}

export default ChartLine;