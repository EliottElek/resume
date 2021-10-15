import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
const Contact = ({ responsive }) => {
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
        Contact
      </Typography>
      <List sx={{ width: "100%" }}>
        <Divider />
        <ListItem disablePadding sx={{ width: "100%" }}>
          <ListItemButton
            onClick={(e) => {
              window.location = "mailto:eliott.morcillo@gmail.com";
              e.preventDefault();
            }}
          >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>
              <ListItemText primary="eliott.morcillo@gmail.com" />
            </ListItemText>
            {!responsive && 
            <ListItemIcon>
              <TouchAppIcon />
            </ListItemIcon>}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              window.location = "tel:+33621218225";
              e.preventDefault();
            }}
          >
            <ListItemIcon>
              <PhoneInTalkIcon />
            </ListItemIcon>
            <ListItemText primary="+33 6 21 21 82 25" />
            {!responsive && 
            <ListItemIcon>
              <TouchAppIcon />
            </ListItemIcon>}
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              window.location =
                "https://www.linkedin.com/in/eliott-morcillo-4384101b9";
              e.preventDefault();
            }}
          >
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="Eliott Morcillo" />
            {!responsive && 
            <ListItemIcon>
              <TouchAppIcon />
            </ListItemIcon>}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={(e) => {
              window.location = "https://github.com/EliottElek";
              e.preventDefault();
            }}
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="EliottElek" />
            {!responsive && 
            <ListItemIcon>
              <TouchAppIcon />
            </ListItemIcon>}
          </ListItemButton>
        </ListItem>
        </List>
        {responsive && <Divider />}
    </div>
  );
};

export default Contact;
