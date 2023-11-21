// src/pages/about.js

import React from "react"
import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from "../components/layout"
import ActionAreaCard from "../components/card"

const ProjectsPage = () => (
  <Layout>
    <h2>Projects</h2>
    {/* <h3>Explore some of the projects I've worked on.</h3> */}
    {/* <div className="projectsContainer">

      <div className="project-card">
        <h3>Ametek</h3>
        <p>Interned at Amptek summer 2023. Built a full-stack Python app for testing all of the companies circuit boards.</p>
        <p>Libraries used: PySerial, PyUSB, Socket, MatPlotLib, Tkinter</p>
      </div>

      <div className="project-card">
        <h3>Cornell AutoBoat</h3>
        <p>Worked on software for controlling the boat's motors.</p>
        <p>Technologies used: Python, C++, PySerial</p>
      </div>

    </div> */}
    <div className="projectsContainer">

      {/* <Grid container alignItems="stretch" spacing={2}>
      <Grid item component={ActionAreaCard} xs={3}>
      <ActionAreaCard></ActionAreaCard>
      </Grid>
      <Grid item component={ActionAreaCard} xs={3}>
      <ActionAreaCard></ActionAreaCard>
      </Grid>

      <Grid item component={ActionAreaCard} xs={3}>
      <ActionAreaCard></ActionAreaCard>
      </Grid>
      </Grid>
       */}
      <Box>
      <Grid container alignItems="stretch" justifyContent="space-evenly" rowSpacing={3} columnSpacing={5
      }>
        <Grid item xs={6} md={4}>
        <ActionAreaCard></ActionAreaCard>
        </Grid>
        <Grid item xs={6} md={4}>
        <ActionAreaCard></ActionAreaCard>
        </Grid>
        <Grid item xs={6} md={4}>
        <ActionAreaCard></ActionAreaCard>
        </Grid>
        <Grid item xs={6} md={4}>
        <ActionAreaCard></ActionAreaCard>
        </Grid>
      </Grid>
    </Box>
    </div>
    {/* Add more project cards as needed */}
  </Layout>
)

export default ProjectsPage