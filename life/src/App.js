import React, { useState } from "react";
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
import { useMediaQuery } from 'react-responsive'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };

  return (
    <HashRouter>
      <div
        className="App"
        style={{
          textAlign: "center",
        }}
      >
        {!isMobile && <div
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
          </div> }
          {isMobile && 
          <IconButton 
          color="inherit"
            aria-label="open drawer"
            edge="start"
          style={{zIndex: 10, position:'absolute', right: 10, top: 10}} onClick={toggleDrawer()}><MenuIcon /></IconButton> }
      {isMobile && 
    <SwipeableDrawer
      style={{zIndex: 10}}
      anchor={"right"}
      open={drawerOpen}
      onClose={toggleDrawer()}
      onOpen={toggleDrawer()}
    >
      <List>
        {['Home', 'Life', 'AGI', 'Type I Civilization', 'Digital Conciousness'].map((text) => (
          <div>
            {text == 'Home' && <NavLink to="/" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text == 'Life' && <NavLink to="/life" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text == 'AGI' && <NavLink to="/agi" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text == 'Type I Civilization' && <NavLink to="/typeI" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text == 'Digital Conciousness' && <NavLink to="/conciousness" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
          </div>
        ))}
      </List>
      </SwipeableDrawer> }
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
