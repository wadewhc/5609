// import * as React from 'react';
import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import ChartLineData from './ChartLineData';
import {
    FormControl,
    // FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
  } from '@mui/material';
  

const xLabels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

function ChartLine() {
    const [selectedWeapon, setSelectedWeapon] = useState('Handguns');
    const handleRadioChange = (event) => {
        setSelectedWeapon(event.target.value);
    };

  return (
    
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ flex: 1, marginLeft: '250px' }}>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Handguns"
                    name="radio-buttons-group"
                    onChange={handleRadioChange}
                >
                    <FormControlLabel value="Handguns" control={<Radio />} label="Handguns" />
                    <FormControlLabel value="Firearms, type not stated" control={<Radio />} label="Firearms, type not stated" />
                    <FormControlLabel value="Knives or cutting instruments" control={<Radio />} label="Knives or cutting instruments" />
                    <FormControlLabel value="Other weapons or weapons not stated" control={<Radio />} label="Other weapons or weapons not stated" />
                    <FormControlLabel value="Personal weapons (hands/fists/feet/etc.)" control={<Radio />} label="Personal weapons (hands/fists/feet/etc.)" />
                    <FormControlLabel value="Rifles" control={<Radio />} label="Rifles" />
                    <FormControlLabel value="Other guns" control={<Radio />} label="Other guns" />
                    <FormControlLabel value="Blunt objects (clubs/hammers/etc.)" control={<Radio />} label="Blunt objects (clubs/hammers/etc.)" />
                    <FormControlLabel value="Narcotics" control={<Radio />} label="Narcotics" />
                    <FormControlLabel value="Shotgun" control={<Radio />} label="Shotgun" />
                    <FormControlLabel value="Asphyxiation" control={<Radio />} label="Asphyxiation" />
                    <FormControlLabel value="Fire" control={<Radio />} label="Fire" />
                    <FormControlLabel value="Strangulation" control={<Radio />} label="Strangulation" />
                    <FormControlLabel value="Poison" control={<Radio />} label="Poison" />
                    <FormControlLabel value="Drowning" control={<Radio />} label="Drowning" />
                    <FormControlLabel value="Explosives" control={<Radio />} label="Explosives" />
                </RadioGroup>
            </FormControl>
        </div>
        <div style={{ flex: 2 }}>
            <LineChart
                width={1000}
                height={600}
                series={[
                    { data: ChartLineData[selectedWeapon], label: `${selectedWeapon}` },

                ]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
        </div>
            
    </div>
    
  );
}

export default ChartLine;