import "../CSS/Nav.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";

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
    <div style={{ zIndex: "1" }}>
      {!isMobile ? (
        <div className="container-fluid">
          <ThemeProvider theme={theme}>
            <ul className="dotnav dotnav-vertical dotnav-right nav">
              <Tooltip placement="right-end" title="Top">
                <li className="tooltiptext" title="Top">
                  <a href="#start"></a>
                </li>
              </Tooltip>
              <Tooltip placement="right-end" title="About">
                <li className="nav-tooltip" title="About">
                  <a href="#about"></a>
                </li>
              </Tooltip>
              <Tooltip placement="right-end" title="Competences">
                <li className="nav-tooltip" title="Competences">
                  <a href="#competences"></a>
                </li>
              </Tooltip>
              <Tooltip placement="right-end" title="Contact">
                <li className="nav-tooltip" title="Contact">
                  <a href="#contact"></a>
                </li>
              </Tooltip>
            </ul>
          </ThemeProvider>
        </div>
      ) : (
        <div>
          {/* <ThemeProvider theme={theme}>
          <ul className="dotnav-mobile dotnav-vertical-mobile dotnav-mobile nav">
            <Tooltip placement="bottom" title="Top">
              <li className="tooltiptext" title="Top">
                <a href="#start"></a>
              </li>
            </Tooltip>
            <Tooltip placement="bottom" title="About">
              <li className="nav-tooltip" title="About">
                <a href="#about"></a>
              </li>
            </Tooltip>
            <Tooltip placement="bottom" title="Competences">
              <li className="nav-tooltip" title="Competences">
                <a href="#competences"></a>
              </li>
            </Tooltip>
            <Tooltip placement="bottom" title="Contact">
              <li className="nav-tooltip" title="Contact">
                <a href="#contact"></a>
              </li>
            </Tooltip>
          </ul>
        </ThemeProvider> */}
        </div>
      )}
    </div>
  );
}
