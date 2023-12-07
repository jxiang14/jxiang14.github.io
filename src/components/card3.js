import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import dogImage from "../images/dog.png";
import Dashboard3 from '../pages/dashboard3';

export default function ActionAreaCard1() {
  return (
    // sx={{ maxHeight: 545 }}
    <Card>
        <CardMedia
          component="img"
          // sx={{ height: 200 }}
          sx={{ height: 200, padding: "0em 0em 0 0em"}}
          image={dogImage}
          alt="boat"
        />
        <CardContent>
          <Typography className="font-hedvig"  gutterBottom variant="h5" component="div">
            Dog Leg Prediction Model
          </Typography>
          <Typography className="font-hedvig"  gutterBottom variant="h7" component="div">
            Class Project (Machine Learning)
          </Typography>
          <Typography className="font-hedvig"  variant="body2" color="text.secondary">
            <p>In a team of 2, I cleaned data from the Vet School and used it to generate a model for predicting whether a dog's legs are lame or not.</p>
            <br></br>
            <p>Technologies used: Python, SkLearn, Numpy, Pandas</p>
          </Typography>
        </CardContent>
      <CardActions>
        <Dashboard3></Dashboard3>
        </CardActions>
    </Card>
  );
}