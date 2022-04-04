import React from "react";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import BuildIcon from "@mui/icons-material/Build";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";

const Interests = ({ responsive, lang }) => {
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
        {lang === "english" ? "Interests" : "Intérêts"}
      </Typography>
      <List sx={{ width: "100%" }}>
        <Divider />
        <ListItem disablePadding sx={{ width: "100%" }}>
          <ListItemIcon>
            <SportsFootballIcon />
          </ListItemIcon>
          <ListItemText>
            {lang === "english" ? (
              <ListItemText primary="American football in competition (national championship) : 6 years, quarterback." />
            ) : (
              <ListItemText primary="Football américain en compétition (championnat national) : 6 ans, quarterback." />
            )}
          </ListItemText>
        </ListItem>
        <ListItem disablePadding sx={{ width: "100%" }}>
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          {lang === "english" ? (
            <ListItemText primary="Conventionnal machining : 3D modeling, prototyping and building of all kind of mechanisms from materials like steel, aluminium, brass, platic..." />
          ) : (
            <ListItemText>
              <ListItemText primary="Usinage conventionnel : modélisation, prototypage et construction de toutes sortes de mécanismes et objets dans des matériaux tels que l’acier, l’aluminium, le laiton, le plastique..." />
            </ListItemText>
          )}
        </ListItem>
        <ListItem disablePadding sx={{ width: "100%" }}>
          <ListItemIcon>
            <ImportantDevicesIcon />
          </ListItemIcon>
          {lang === "english" ? (
            <ListItemText primary="Web development : deep interest in web development, in particular using NodeJS and ReactJS. Creation of multiple web applications linked to APIs, and using different librairies like BabylonJS. Making of a UI librairy for react components, lightweight and fully customizable, for personnal use. " />
          ) : (
            <ListItemText>
              <ListItemText primary="Programmation web : passion pour le développement web notamment en ReactJS et NodeJS. Création de nombreuses applications liées à des APIs, et utilisation de librairies Javascript telles que BabylonJS. Création d'une librairie grqphique en React, légère et complètement stylisable, pour utilisation personnelle." />
            </ListItemText>
          )}
        </ListItem>
        <Typography
          variant="caption"
          align="center"
          gutterBottom
          component="div"
          color="darkgrey"
        >
          <a target="blank" href="https://simple-materials.netlify.app/">
            https://simple-materials.netlify.app/
          </a>
        </Typography>
      </List>
      <Typography
        variant="caption"
        align="center"
        gutterBottom
        component="div"
        color="darkgrey"
      >
        {lang === "english"
          ? "Resume created with ReactJS by Eliott Morcillo"
          : "CV réalisé en ReactJS par Eliott Morcillo"}
      </Typography>
      <Typography
        variant="caption"
        align="center"
        gutterBottom
        component="div"
        color="darkgrey"
      >
        <Link href="https://eliottmorcillo.netlify.app">
          https://eliottmorcillo.netlify.app/
        </Link>{" "}
      </Typography>
    </div>
  );
};

export default Interests;
