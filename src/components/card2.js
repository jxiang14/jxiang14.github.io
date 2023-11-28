import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import goFishImage from "../images/goFishCards.png";
import Dashboard2 from '../pages/dashboard2';

export default function ActionAreaCard1() {
  return (
    // sx={{ maxHeight: 545 }}
    <Card>
        <CardMedia
          component="img"
          // sx={{ height: 200 }}
          sx={{ height: 200, padding: "0em 0em 0 0em"}}
          image={goFishImage}
          alt="boat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Go Fish
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            Class Project (Functional Programming)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>In a team of 3, I worked on a terminal-based Go Fish game, incorporating information sharing mimicking an in-person game.</p>
            <br></br>
            <p>Technologies used: OCaml</p>
          </Typography>
        </CardContent>
      <CardActions>
        <Dashboard2></Dashboard2>
        </CardActions>
    </Card>
  );
}