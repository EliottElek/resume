import * as React from "react";
import Container from "./components/Container/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import profile from './components/images/profilePic.jpg'
const title = document.getElementById("title");
title.innerHTML = "Eliott Morcillo - FR";
const favicon = document.getElementById("favicon");
favicon.href = profile;
function App() {
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
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "auto!important",
        }}
      >
        <Container responsive={responsive} />
      </div>
    </ThemeProvider>
  );
}

export default App;
