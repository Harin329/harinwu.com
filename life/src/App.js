import React, { useState } from "react";
import "./styles/styles.css";
import branding from "./styles/branding";
import Link from "@material-ui/core/Link";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
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
            href="/goals"
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
              <NavLink to="/goals/life" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>Life</NavLink>
              <NavLink to="/goals/agi" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>AGI</NavLink>
              <NavLink to="/goals/typeI" style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>Type I Civilization</NavLink>
              <NavLink to="/goals/conciousness" style={{ fontFamily: branding.FontMedium, color:branding.black }}>Digital Conciousness</NavLink>
          </div>
          <Link
            style={{ fontFamily: branding.FontMedium, flex: 1, color:branding.black }}
            href="https://harinwu.com"
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
        {['Home', 'Life', 'AGI', 'Type I Civilization', 'Digital Conciousness', 'Resume'].map((text) => (
          <div>
            {text === 'Home' && <NavLink to="/goals" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'Life' && <NavLink to="/goals/life" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'AGI' && <NavLink to="/goals/agi" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'Type I Civilization' && <NavLink to="/goals/typeI" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'Digital Conciousness' && <NavLink to="/goals/conciousness" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'Resume' && <a href="https://harinwu.com" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</a>}
          </div>
        ))}
      </List>
      </SwipeableDrawer> }
        <Route exact path="/goals" component={Home}/>
        <Route path="/goals/life" component={Life}/>
        <Route path="/goals/agi" component={AGI}/>
        <Route path="/goals/typeI" component={TypeI}/>
        <Route path="/goals/conciousness" component={Immortal}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
