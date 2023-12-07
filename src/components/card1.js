import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import boatImage from "../images/boat1.png";
import Dashboard1 from '../pages/dashboard1';

export default function ActionAreaCard1() {
  return (
    // sx={{ maxHeight: 545 }}
    <Card>
        <CardMedia
          component="img"
          // sx={{ height: 200 }}
          sx={{ height: 200, padding: "0em 0em 0 0em"}}
          image={boatImage}
          alt="boat"
        />
        <CardContent>
          <Typography className="font-hedvig"  gutterBottom variant="h5" component="div">
            Cornell AutoBoat
          </Typography>
          <Typography className="font-hedvig"  gutterBottom variant="h7" component="div">
            Software Controls Lead
          </Typography>
          <Typography className="font-hedvig"  variant="body2" color="text.secondary">
            <p>The AutoBoat project team builds an autonomous boat each year for competition. On the software team, I work on path execution algorithms and code for microcontrollers.</p>
            <br></br>
            <p>Technologies used: Python, C++, PySerial</p>
          </Typography>
        </CardContent>
      <CardActions>
        <Dashboard1></Dashboard1>
        </CardActions>
    </Card>
  );
}