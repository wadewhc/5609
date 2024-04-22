import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import dataByYear from './ChartBarData'

const chartSetting = {
  xAxis: [{ label: 'count'}],
  width: 600,
  height: 500,
};


const valueFormatter = (value) => `${value}`;

function ChartBar() {
  const [chartData, setChartData] = useState(dataByYear[2012]);
  const [chartData1, setChartData1] = useState(dataByYear[2012]);
  const [selectedYear, setSelectedYear] = useState('2012');
  const [selectedYear1, setSelectedYear1] = useState('2012');
  const [isCompareChecked, setIsCompareChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsCompareChecked(e.target.checked);
  };

  const handleSelect = (eventKey) => {
    setSelectedYear(eventKey);
    setChartData(dataByYear[eventKey]);
  };
  const handleSelect1 = (eventKey) => {
    setSelectedYear1(eventKey);
    setChartData1(dataByYear[eventKey]);
  };


  return (
    <div>
      <div className="chartTitle">
        <Dropdown className="chartDropdown" style={{ display: 'flex', alignItems: 'center'}} onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="select-dropdown">
              Select a year
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {Object.keys(dataByYear).map((year) => (
              <Dropdown.Item key={year} eventKey={year}>{year}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Form.Check
          type="checkbox"
          label="Compare"
          checked={isCompareChecked}
          onChange={handleCheckboxChange}
          style={{ marginLeft: '100px', paddingTop: '15px' }}
        />

        {isCompareChecked && (
          <Dropdown className="chartDropdown1" style={{ display: 'flex', alignItems: 'center'}} onSelect={handleSelect1}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select a year
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Object.keys(dataByYear).map((year) => (
                <Dropdown.Item key={year} eventKey={year}>{year}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
     
      <div className="barChart">
          <BarChart
            dataset={chartData}
            yAxis={[{ scaleType: 'band', dataKey: 'category' }]}
            series={[{ dataKey: 'count', label: `Weapon Category in ${selectedYear}`, valueFormatter }]}
            layout="horizontal"
            grid={{ vertical: true }}
            {...chartSetting}
          />

        {isCompareChecked && (
          <BarChart
            dataset={chartData1}
            yAxis={[{ scaleType: 'band', dataKey: 'category' }]}
            series={[{ dataKey: 'count', label: `Weapon Category in ${selectedYear1}`, valueFormatter }]}
            layout="horizontal"
            grid={{ vertical: true }}
            {...chartSetting}
          />
        )}
      </div>
    </div>
    
    
  );
}

export default ChartBar;