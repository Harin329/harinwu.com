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
import Elon from "./pages/Legacy/Elon";
import { useMediaQuery } from 'react-responsive'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from "@material-ui/core";

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
    <HashRouter hashType="noslash">
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
            style={{ flex: 1 }}
            href="/goals"
          >
            <Typography style={{ fontFamily: branding.FontMedium, color:branding.black }}>
            Harin (Hao) Wu
            </Typography>
          </Link>
          <div
            style={{
              display: "flex",
              flex: 5,
              justifyContent: "center",
            }}
          >
              <NavLink to="/life" ><Typography style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>Life</Typography></NavLink>
              <NavLink to="/agi"><Typography style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>AGI</Typography></NavLink>
              <NavLink to="/typeI"><Typography style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>Type I Civilization</Typography></NavLink>
              <NavLink to="/conciousness" ><Typography style={{ fontFamily: branding.FontMedium, marginRight: 30, color:branding.black }}>Digital Conciousness</Typography></NavLink>
          </div>
          <Link
            style={{ fontFamily: branding.FontMedium, flex: 1, color:branding.black }}
            href="/"
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
          <div key={text}>
            {text === 'Home' && <Link href="/goals" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</Link>}
            {text === 'Life' && <NavLink to="/life" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'AGI' && <NavLink to="/agi" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'Type I Civilization' && <NavLink to="/typeI" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'Digital Conciousness' && <NavLink to="/conciousness" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</NavLink>}
            {text === 'Resume' && <a href="/" onClick={toggleDrawer()} style={branding.drawerButton}>{text}</a>}
          </div>
        ))}
      </List>
      </SwipeableDrawer> }
        <Route exact path="/" component={Home}/>
        <Route path="/life" component={Life}/>
        <Route path="/agi" component={AGI}/>
        <Route path="/typeI" component={TypeI}/>
        <Route path="/conciousness" component={Immortal}/>
        <Route path="/elon" component={Elon}/>
      </div>
    </HashRouter>
  );
}

export default App;
