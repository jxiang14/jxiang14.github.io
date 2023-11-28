import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ametekImage from "../images/ametek.png";
import Dashboard from '../pages/dashboard';

export default function ActionAreaCard1() {
  return (
    // sx={{ maxHeight: 545 }}
    <Card>
        <CardMedia
          component="img"
          // sx={{ height: 200 }}
          sx={{ height: 200, padding: "0em 0em 0 0em"}}
          image={ametekImage}
          alt="boat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Ametek
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Software Engineering Intern
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>I interned at Ametek summer 2023. I built a full-stack Python app for testing each of my location's circuit boards.</p>
          <br></br>
        <p>Technologies used: Python, PySerial, PyUSB, Socket, MatPlotLib, Tkinter</p>
          </Typography>
        </CardContent>
      <CardActions>
        <Dashboard></Dashboard>
        </CardActions>
    </Card>
  );
}