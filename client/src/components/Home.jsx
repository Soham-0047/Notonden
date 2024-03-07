import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Grid container spacing={5} rowGap={5} p={6}>
        <Grid item xs={12} md={7} mt={"10%"}>
          <Typography variant="h3">
            Take Attendance to the Next Level
          </Typography>
          <Typography variant="h6" pt={"3%"}>
            Empower your organization with efficient attendance tracking
            solutions.Unlock productivity with our intuitive
            attendance management system. <br/>Experience hassle-free attendance
            tracking for smoother operations.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px", marginTop: "2rem" }}
          >
            <Link to="records" style={{ textDecoration: "none" }}>
              Create Record
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src="https://img.freepik.com/free-vector/businessman-planning-events-deadlines-agenda_74855-6274.jpg"
            alt="My Team"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
