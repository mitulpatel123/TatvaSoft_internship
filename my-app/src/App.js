// import logo from './logo.svg';
import "./css/App.css";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
// import { globalstyles } from "./constant";
import appStyle from "./css/AppStyle.module.css";
import { Homepage } from "./components/Homepage";
import { Apple } from "./components/Apple";

import { NotFound } from "./components/NotFound";
// import Logo from "./images/logo.svg";
// import siteLogo from "../public/logo192.png";
import {ThemeProvider} from "@emotion/react";
import {theme} from "./components/style";
const App = () => (
  <>
    <ThemeProvider theme={theme}>
      
    
    {/* <img src={Logo} alt="app logo"/> */}
    {/* <img src="http://localhost:3000/logo192.png" alt="app logo"/> */}
    {/* <img
      src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`}
      alt="app logo"
    /> */}
    <BrowserRouter>
      <div
        className={appStyle.navbarStyle}
        //</BrowserRouter>style={{
        // ...globalstyles.navbar-style,
        // }}
      >
        <Link to="/" style={{ marginLeft: 5 }}>
          Home
        </Link>
        <Link to="/apple" style={{ marginLeft: 10 }}>
          Apple
        </Link>
        <Link to="/applet" style={{ marginLeft: 15 }}>
          Applet
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/apple" element={<Apple />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
