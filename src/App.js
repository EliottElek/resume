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
import { Backdrop, CircularProgress } from "@mui/material";

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
      setLang(language);
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

  return (
    <ThemeProvider theme={outerTheme}>
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "1",
          width: "110px",
          color: "whitesmoke",
          background: "rgba(0,0,0,0.4)",
          borderRadius: "5px",
        }}
      >
        <Select
          sx={{
            color: "whitesmoke",
            border: "none",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #484850",
              borderRadius: "5px 5px 5px 5px"
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
          <MenuItem value="french">
            <img style={styles.img} src={france} alt="france" />
          </MenuItem>
          <MenuItem value="english">
            <img style={styles.img} src={english} alt="english" />
          </MenuItem>
        </Select>
      </div>
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
