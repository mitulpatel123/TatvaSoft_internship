// import logo from './logo.svg';
import "./App.css";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";

import { Homepage } from "./Homepage";
import { Apple } from "./Apple";
import { NotFound } from "./NotFound";

const App = () => (
  <BrowserRouter>
    <div>
      <Link to="/"
      style={{marginLeft:5,}}
      >Home</Link>
      <Link to="/apple"
      style={{marginLeft:10,}}
      >Apple</Link>
      <Link to="/applet"
      style={{marginLeft:15,}}
      >Applet</Link>
    </div>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/apple" element={<Apple/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
