import React from "react";
import { Typography } from "@mui/material";
import Divider from "../Divider/Divider";
import Logo from '../Logo/Logo';
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
          Expérience professionnelle
        </Typography>
        <Divider />
        {experiences.map((experience) => (
          <>
          <div style ={{display:'flex', justifyContent:"center", alignItems:"center"}}>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                textDecoration: "underline",
              }}
            >
              {experience.title}
            </Typography>
            <Logo logoUrl = {experience.logoUrl}/>
            </div>
            <Typography variant="caption" gutterBottom component="div" color="darkgrey">{experience.period}</Typography>
            {experience.body.map((point)=>(
 <Typography
              variant="body1"
              sx={{
                marginTop:'2px',
                marginBottom:'8px',
                color: "gray",
              }}
            >
              <li>{point.point}</li>
            </Typography>
            ))}
           
          </>
        ))}
      </div>
    </div>
  );
};

export default PersonalExperience;
