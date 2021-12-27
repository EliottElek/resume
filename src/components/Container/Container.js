import React from "react";
import { Paper, Grid, Modal } from "@mui/material";
import Header from "../Header/Header";

//english
import PersonalExperience from "../PersonalExperience/PersonalExperience";
import Formation from "../Formation/Formation";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Interests from "../Interests/Interests";

import { useCookies } from "react-cookie";

import english from "../images/english.png";
import france from "../images/france.png";

import { Box } from "@mui/system";

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    width: "99%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    outline: "none",
  },
  img: {
    height: "100%",
    width: "140px",
    marginRight: "15%",
    borderRadius: "7px",
  },
  button: {
    fontSize: "20px",
    fontWeight: "900",
    margin: "12px",
    height: "90px",
    width: "90%",
    maxWidth: "500px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "7px",
    border: "none",
    outline: "none",
    background: "rgba(0,0,0,0.8)",
    color: "whitesmoke",
  },
};
const Container = ({ responsive, handleChangeLang, lang }) => {
  const [cookies, setCookie] = useCookies();
  const [openModal, setOpenModal] = React.useState(cookies.lang ? false : true);

  const handleChangeLanguage = (lang) => {
    setCookie("lang", lang);
    handleChangeLang(lang);
    setOpenModal(false);
  };
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          margin: { sx: 0, md: 2 },
          maxWidth: "950px",
          width: "100%",
          bordeRadius: "5px",
          height: "auto!important",
        }}
      >
        <Header responsive={responsive} />
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            item
            sx={{
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "whitesmoke",
            }}
            xs={12}
            md={4}
            lg={4}
          >
            <Contact responsive={responsive} lang={lang} />
            {responsive && (
              <>
                <Skills responsive={responsive} lang={lang} />
                <Interests responsive={responsive} lang={lang} />
              </>
            )}
          </Grid>
          <Grid
            item
            sx={{
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            xs={12}
            md={8}
            lg={8}
          >
            <PersonalExperience lang={lang} responsive={responsive} />
            <Formation responsive={responsive} lang={lang} />
            {!responsive && (
              <>
                <Skills responsive={responsive} lang={lang} />
                <Interests responsive={responsive} lang={lang} />
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
      <Modal open={openModal} style={{ background: "rgba(0,0,0,0.85)" }}>
        <Box style={styles.modal}>
          <button
            style={styles.button}
            onClick={() => handleChangeLanguage("english")}
          >
            <img style={styles.img} src={english} alt="english" />
            English
          </button>
          <button
            style={styles.button}
            onClick={() => handleChangeLanguage("french")}
          >
            <img style={styles.img} src={france} alt="french" />
            Français
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default Container;
