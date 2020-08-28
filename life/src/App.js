import React from "react";
import "./styles/styles.css";
import branding from "./styles/branding";
import Link from "@material-ui/core/Link";
import { Route, NavLink, HashRouter } from "react-router-dom";
import AGI from "./pages/AGI";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Type1 from "./pages/Type1";
import Immortal from "./pages/Immortal";

function App() {
  return (
    <HashRouter>
      <div
        className="App"
        style={{
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100px",
            backgroundColor: "#0000",
            position: "absolute",
            zIndex: 5,
          }}
        >
          <Link
            style={{ fontFamily: branding.FontMedium, flex: 1 }}
            color="inherit"
            href="/"
          >
            Harin (Hao) Wu
          </Link>
          <div
            style={{
              display: "flex",
              fontFamily: branding.FontMedium,
              flex: 5,
              justifyContent: "center",
            }}
          >
              <NavLink to="/agi" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:"#000000" }}>AGI</NavLink>
              <NavLink to="/type1" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:"#000000" }}>Type 1 Civilization</NavLink>
              <NavLink to="/conciousness" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:"#000000" }}>Digital Conciousness</NavLink>
          </div>
          <Link
            style={{ fontFamily: branding.FontMedium, flex: 1 }}
            color="inherit"
            href="#"
            onClick={() => {
              console.log("click");
            }}
          >
            Resume
          </Link>
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/agi" component={AGI}/>
        <Route path="/type1" component={Type1}/>
        <Route path="/conciousness" component={Immortal}/>
      </div>
    </HashRouter>
  );
}

export default App;
