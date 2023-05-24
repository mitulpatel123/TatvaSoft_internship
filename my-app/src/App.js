// import logo from './logo.svg';
import './css/App.css';
import { Homepage } from './components/Homepage';
import { Apple } from './components/Apple';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { ThemeProvider } from '@emotion/react';
import {theme} from "./components/style";
import { Register } from  './components/Register';
// import { globalStyles } from './constants';
// import Logo from "./logo.svg"
// import siteLogo from "../public/logo192.png";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      {/* <img src="localhost:3000/logo192.png" alt='Not found'></img> */}
      {/* <img src={`${process.env.REACT_APP_HOSTED_URL}logo192.png`} alt='Not found'></img> */}
      {/* <img src={Logo} alt='Not found'></img> */}
      {/* <img src={siteLogo} alt='Not found'></img> */}
      <BrowserRouter>
        <div className="navbar-style" >
          {/* <div className="navbar-style"   style={{globalStyles.navbar,}}> */}
          {/* <div   style={{
      ...globalStyles.navbar,
      }}
      > */}
          <Link to="/" style={{
            marginLeft: 15,
            padding: 5
          }}>Home</Link>
          <Link to="/apple" style={{
            marginLeft: 15,
            padding: 5
          }}>Apple</Link>
          <Link to="/register" style={{
            marginLeft: 15,
            padding: 5
          }}>Register</Link>
          <Link to="/applet" style={{
            marginLeft: 15,
            padding: 5
          }}>Applet</Link>


          {/* <Homepage></Homepage>
      <Apple></Apple> */}
        </div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/apple' element={<Apple />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);


export default App;