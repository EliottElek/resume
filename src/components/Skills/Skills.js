import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
const Skills = () => {
  return (
    <div style={{ width: "100%" }}>
      <Typography
        align="center"
        sx={{
          color: "gray",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Skills
      </Typography>
      <List sx={{ width: "100%" }}>
        <Divider />
        <ListItem disablePadding sx={{ width: "100%" }}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>
              <ListItemText primary="eliott.morcillo@gmail.com" />
            </ListItemText>
        </ListItem>
        <ListItem disablePadding>
            <ListItemIcon>
              <PhoneInTalkIcon />
            </ListItemIcon>
            <ListItemText primary="+33 6 21 21 82 25" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="Eliott Morcillo" />
        </ListItem>
        <ListItem disablePadding>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="EliottElek" />
        </ListItem>
        </List>
    </div>
  );
};
export default Skills;
