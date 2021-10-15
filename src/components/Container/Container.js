import React from "react";
import { Paper, Grid } from "@mui/material";
import Header from "../Header/Header";
import PersonalExperience from "../PersonalExperience/PersonalExperience";
import Formation from "../Formation/Formation";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Interests from "../Interests/Interests";
const Container = ({ responsive }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: "842px",
        width: "100%",
        height: "auto!important",
      }}
    >
      <Header responsive={responsive} />
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Grid
          item
          sx={{
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "whitesmoke",
          }}
          xs={12}
          md={4}
          lg={4}
        >
          <Contact responsive={responsive} />
          {responsive && (
            <>
              <Skills responsive={responsive} />
              <Interests responsive={responsive} />
            </>
          )}
        </Grid>
        <Grid
          item
          sx={{
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          xs={12}
          md={8}
          lg={8}
        >
          <PersonalExperience responsive={responsive} />
          <Formation responsive={responsive} />
          {!responsive && (
            <>
              <Skills responsive={responsive} />
              <Interests responsive={responsive} />
            </>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Container;
