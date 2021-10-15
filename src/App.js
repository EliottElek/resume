import * as React from 'react';
import Container from "./components/Container/Container";
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
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        height:"auto!important"

      }}
    >
      <Container responsive={responsive}/>
    </div>
  );
}

export default App;
