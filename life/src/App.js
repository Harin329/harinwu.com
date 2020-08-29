import React from "react";
import "./styles/styles.css";
import branding from "./styles/branding";
import Link from "@material-ui/core/Link";
import { Route, NavLink, HashRouter } from "react-router-dom";
import AGI from "./pages/AGI";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import TypeI from "./pages/TypeI";
import Immortal from "./pages/Immortal";
import Life from "./pages/Life";

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
            justifyContent: 'center',
            width: "100%",
            height: "100px",
            backgroundColor: "#0000",
            position: "absolute",
            zIndex: 5,
          }}
        >
          <Link
            style={{ fontFamily: branding.FontMedium, flex: 1, color:branding.black }}
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
              <NavLink to="/life" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>Life</NavLink>
              <NavLink to="/agi" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>AGI</NavLink>
              <NavLink to="/typeI" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>Type I Civilization</NavLink>
              <NavLink to="/conciousness" style={{ fontFamily: branding.FontMedium, color:branding.black }}>Digital Conciousness</NavLink>
          </div>
          <Link
            style={{ fontFamily: branding.FontMedium, flex: 1, color:branding.black }}
            href="www.harinwu.com"
          >
            Resume
          </Link>
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/life" component={Life}/>
        <Route path="/agi" component={AGI}/>
        <Route path="/typeI" component={TypeI}/>
        <Route path="/conciousness" component={Immortal}/>
      </div>
    </HashRouter>
  );
}

export default App;
