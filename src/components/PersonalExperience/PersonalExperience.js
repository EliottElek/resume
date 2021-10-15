import React from "react";
import { Typography } from "@mui/material";
import Divider from "../Divider/Divider";
import experiences from "../../informations/experiences";
const PersonalExperience = ({ responsive }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        width: "95%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "baseline",
          height: "100%",
          width: "100%",
        }}
      >
        <Typography
          align={responsive ? "center" : "left"}
          variant={responsive ? "h5" : "h6"}
          sx={{
            color: "gray",
            textTransform: "uppercase",
            fontWeight: "bold",
            marginTop:"10px"
          }}
        >
          Expérience professionelle
        </Typography>
        <Divider />
        {experiences.map((experience) => (
          <>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                textDecoration: "underline",
              }}
            >
              {experience.title}
            </Typography>
            <Typography variant="caption" gutterBottom component="div" color="darkgrey">{experience.period}</Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop:'8px',
                marginBottom:'22px',
                color: "gray",
              }}
            >
              {experience.body}
            </Typography>
          </>
        ))}
      </div>
    </div>
  );
};

export default PersonalExperience;
