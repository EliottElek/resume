import React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import BuildIcon from "@mui/icons-material/Build";
const Interests = ({responsive}) => {
  return (
    <div style={{ width: "100%" }}>
      <Typography
        align={responsive ? "center" : "left"}
        sx={{
          color: "gray",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Intérêts
      </Typography>
      <List sx={{ width: "100%" }}>
        <Divider />
        <ListItem disablePadding sx={{ width: "100%" }}>
          <ListItemIcon>
            <SportsFootballIcon />
          </ListItemIcon>
          <ListItemText>
            <ListItemText primary="Football américain en compétition (championnat national): 6 ans, quarterback." />
          </ListItemText>
        </ListItem>
        <ListItem disablePadding sx={{ width: "100%" }}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText>
            <ListItemText primary="Usinage conventionnel : modélisation, prototypage et construction de toutes sortes de mécanismes et objets dans des matériaux tels que l’acier, l’aluminium, le laiton, le plastique." />
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="caption" align = 'center' gutterBottom component="div" color="darkgrey">CV réalisé en ReactJS par Eliott Morcillo</Typography>
    </div>
  );
};

export default Interests;
