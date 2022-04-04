import React from "react";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CodeIcon from "@mui/icons-material/Code";
import TranslateIcon from "@mui/icons-material/Translate";
import LanguageIcon from "@mui/icons-material/Language";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Skills = ({ responsive, lang }) => {
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
        {lang === "english" ? "Skills" : "Compétences"}
      </Typography>
      <List sx={{ width: "100%" }}>
        <Divider />
        <ListItem disablePadding sx={{ width: "100%" }}>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText>
            <ListItemText primary="C, C++, Java, PHP, HTML-CSS-Javascript, NodeJS" />
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <DeveloperModeIcon />
          </ListItemIcon>
          <ListItemText primary="ReactJS, BabylonJS, React Native, Gatsby, GraphQL, Typeorm, Apollo" />
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="WordPress, Divi Builder, Prestashop" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          {lang === "english" ? (
            <ListItemText primary="English (C1), German (B1), French (native)" />
          ) : (
            <ListItemText primary="Anglais (C1), Allemand (B1), Français (natif)" />
          )}
        </ListItem>
        {responsive && <Divider />}
      </List>
    </div>
  );
};
export default Skills;
