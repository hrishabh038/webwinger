import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// the fray shade /* background-color: #9eb2b0; */
import "./ApplicationStyling/App.css";
import "./ApplicationStyling/Tag.css";
import "./ApplicationStyling/SClass.css";
// navbar
import Nav from "./components/Navbar/Nav";
import Snav from "./components/Navbar/SNav/Snav";
//pages
import Contact from "./pages/Contact/Contact";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // we use the useEffect hook to listen to the window resize event
  useEffect(() => {
    window.onresize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  }, []);
  const [sidenavVisibility, setSidenavVisivility] = useState(true);
  return (
    <div className="app">
      <BrowserRouter>
        <Nav
          onSideNavButtonClick={setSidenavVisivility}
          sidenavVisibility={sidenavVisibility}
        />
        <div className="app-sections">
          <Snav visibility={sidenavVisibility} />

          <main
            style={
              sidenavVisibility
                ? windowSize.width <= 800
                  ? { marginLeft: "0px" }
                  : { marginLeft: "300px" }
                : { marginLeft: "0px" }
            }
          >
          <div className="app-section-banner"></div>
            <Routes>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
