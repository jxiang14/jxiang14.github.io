import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import boatImage from "../images/boat1.png";

export default function ActionAreaCard() {
  return (
    // sx={{ maxHeight: 545 }}
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          // sx={{ height: 200 }}
          sx={{ height: 200, padding: "0em 0em 0 0em"}}
          image={boatImage}
          alt="boat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Boat
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Worked on software for controlling the boat's motors.</p>
            <p>Technologies used: Python, C++, PySerial</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}