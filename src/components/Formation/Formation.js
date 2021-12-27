import React from "react";
import { Typography } from "@mui/material";
import Divider from "../Divider/Divider";
//french
import formationsFrench from "../../informationsFrench/formations";
import formationsEng from "../../informationsFrench/formations";

const Formation = ({ responsive, lang }) => {
  const formations = lang === "english" ? formationsEng : formationsFrench;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          }}
        >
          Formation
        </Typography>
        <Divider />
        {formations.map((formation, i) => (
          <div key={i}>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                textDecoration: "underline",
              }}
            >
              {formation.title}
            </Typography>
            <Typography variant="caption" color="darkgrey">
              {formation.period}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "0.2em",
                marginBottom: "0.7em",
                color: "gray",
              }}
            >
              {formation.body}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formation;
