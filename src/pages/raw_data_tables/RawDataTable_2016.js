import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function createData(category, count) {
  return { category, count };
}

function calculatePercentage(count, max) {
    return (count / max) * 100;
}

const allRows = [
  createData('Handguns', 6767),
  createData('Firearms, type not stated', 2892),
  createData('Other weapons or weapons not stated', 1848),
  createData('Knives or cutting instruments', 1559),
  createData('Personal weapons (hands/fists/feet/etc.)', 663),
  createData('Blunt objects (clubs/hammers/etc.)', 464),
  createData('Rifles', 300),
  createData('Shotgun', 247),
  createData('Other guns', 172),
  createData('Narcotics', 118),
  createData('Strangulation', 97),
  createData('Asphyxiation', 92),
  createData('Fire', 78),
  createData('Poison', 12),
  createData('Drowning', 9),
  createData('Explosives', 1),
];

function RawDataTable2016() {
  const navigate = useNavigate();

  const [rowsToShow, setRowsToShow] = useState(5);
  const [showAll, setShowAll] = useState(false);

  const backToHome = () => {
    navigate("/trend-analysis/raw-data-home");
  };

  const handleToggleRows = () => {
    setShowAll(!showAll);
    setRowsToShow(showAll ? 5 : allRows.length);
  };
  const displayRows = allRows.slice(0, rowsToShow);

  const totalCount = allRows.reduce((sum, row) => sum + row.count, 0);

  return (
    <TableContainer  sx={{ width: "80.5vw" }} className="raw_data_table" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: "black", color: "white" }}>Weapon Category 2016</TableCell>
            <TableCell sx={{ backgroundColor: "black", color: "white" }}>Count</TableCell>
            <TableCell sx={{ backgroundColor: "black", color: "white" }}>Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayRows.map((row) => (
            <TableRow
              key={row.category}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell align="right">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" value={calculatePercentage(row.count, totalCount)} />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="textSecondary">
                      {`${Math.round(calculatePercentage(row.count, totalCount))}%`}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>
        <Button style={{ backgroundColor: "lightgray" }} onClick={backToHome}>
          Back
        </Button>
        <Button style={{marginLeft: 'auto', backgroundColor: "lightgray"}} onClick={handleToggleRows}>
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </TableContainer>
  );
}

export default RawDataTable2016;