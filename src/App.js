import * as React from "react";
import Container from "./components/Container/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import profile from "./components/images/profilePic.jpg";
import { useCookies } from "react-cookie";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import english from "./components/images/english.png";
import france from "./components/images/france.png";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { saveAs } from "file-saver";
import pdfFrance from "./components/assets/EliottMorcillo.pdf";
import pdfEng from "./components/assets/EliottMorcilloEng.pdf";

const styles = {
  img: {
    height: "30px",
    width: "50px",
  },
};
const favicon = document.getElementById("favicon");
favicon.href = profile;
function App() {
  const [cookies, setCookie] = useCookies();
  const [lang, setLang] = React.useState(cookies.lang ? cookies.lang : "");
  const [openBack, setOpenBack] = React.useState(false);
  const handleChangeLang = (language) => {
    setOpenBack(true);
    setTimeout(() => {
      const title = document.getElementById("title");
      title.innerHTML = "Eliott Morcillo - " + language;
      setCookie("lang", language);
      setLang("english");
      setOpenBack(false);
    }, 700);
  };
  const [responsive, setResponsive] = React.useState(false);
  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setResponsive(false)
        : setResponsive(true);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  const outerTheme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });

  const Doc = () => {
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "auto!important",
        }}
      >
        <Container
          lang={lang}
          setLang={setLang}
          handleChangeLang={handleChangeLang}
          responsive={responsive}
        />
      </div>
    );
  };
  const saveFile = () => {
    const path = lang === "english" ? pdfEng : pdfFrance;
    saveAs(path, "EliottMorcillo.pdf");
  };
  return (
    <ThemeProvider theme={outerTheme}>
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          width: "110px",
          color: "whitesmoke",
          background: "rgba(0,0,0,0.4)",
          borderRadius: "5px",
        }}
      >
        <Select
          sx={{
            color: "whitesmoke",
            height: "50px",
            border: "none",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderRadius: "5px 5px 5px 5px",
            },
          }}
          fullWidth
          value={lang}
          onChange={(e) => handleChangeLang(e.target.value)}
          displayEmpty
          inputProps={{
            "aria-label": "Without label",
          }}
        >
          <MenuItem value="french" style={{ margin: "3px" }}>
            <img style={styles.img} src={france} alt="france" />
          </MenuItem>
          <MenuItem value="english">
            <img style={styles.img} src={english} alt="english" />
          </MenuItem>
        </Select>
        <Button
          sx={{ color: "#fff" }}
          style={{
            fontSize: "1rem!important",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
          onClick={saveFile}
        >
          <DownloadIcon />
          PDF
        </Button>
      </div>
      <Doc />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBack}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </ThemeProvider>
  );
}

export default App;
