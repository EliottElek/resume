import React from "react";
import { Typography } from "@mui/material";
import Divider from "../Divider/Divider";
import formations from "../../informations/formations";
const Formation = ({ responsive }) => {
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
          }}
        >
          Formation
        </Typography>
        <Divider />
        {formations.map((formation) => (
          <>
            <Typography
              variant="body1"
              sx={{
                color: "gray",
                textDecoration: "underline",
              }}
            >
              {formation.title}
            </Typography>
            <Typography variant = 'caption' color="darkgrey">{formation.period}</Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop:'8px',
                marginBottom:'22px',
                color: "gray",
              }}
            >
              {formation.body}
            </Typography>
          </>
        ))}
      </div>
    </div>
  );
};

export default Formation;
