import React from "react";
import { Grid, Typography } from "@mui/material";
import background from "../images/background.jpg";
import Avatar from "./Avatar/Avatar";
const Header = ({ responsive }) => {
  return (
    <div
      className="headerContainer"
      style={{
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={0}
        direction={responsive ? "row" : "column"}
        alignItems="center"
        justifyContent="center"
        style={{
          backgroundImage: "url('" + background + "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: 'grayscale(30%)',

        }}
        sx={{ height: "100%" }}
      >
        <Grid
          item
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          xs={12}
          md={4}
          lg={4}
        >
          <Avatar responsive={responsive} />
        </Grid>
        <Grid
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          md={8}
          lg={8}
        >
          <Typography
            className="title"
            variant={!responsive ? "h4" : "h3"}
            align="center"
            sx={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
              textShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
            }}
          >
            Eliott Morcillo
          </Typography>
          <Typography
            align="center"
            sx={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Etudiant en ingénierie chez ECE Paris
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
