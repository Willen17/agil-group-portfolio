import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import "../CSS/Nav.css";

export default function Navigation() {
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "1rem",
            color: "#DD6F6A",
            background: "none",
          },
        },
      },
    },
  });

  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 790px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));
  }, []);
  return (
    <div>
      {!isMobile ? (
        <div className="container-fluid">
          <ThemeProvider theme={theme}>
            <ul className="dotnav dotnav-vertical dotnav-right nav">
              <Tooltip placement="right-end" title="Top">
                <li className="tooltiptext">
                  <a href="#start"> </a>
                </li>
              </Tooltip>
              <Tooltip placement="right-end" title="About">
                <li className="nav-tooltip">
                  <a href="#about"> </a>
                </li>
              </Tooltip>
              <Tooltip placement="right-end" title="Competences">
                <li className="nav-tooltip">
                  <a href="#competences"> </a>
                </li>
              </Tooltip>
              <Tooltip placement="right-end" title="Contact">
                <li className="nav-tooltip">
                  <a href="#contact"> </a>
                </li>
              </Tooltip>
            </ul>
          </ThemeProvider>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
