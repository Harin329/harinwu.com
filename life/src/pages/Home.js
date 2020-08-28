import React, { useState, useEffect, useRef } from "react";
import "../styles/styles.css";
import branding from "../styles/branding";
import ScrollSnap from "scroll-snap";
import Link from "@material-ui/core/Link";
import { Route, NavLink, HashRouter } from "react-router-dom";
import AGI from "../pages/AGI";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CurvedArrow from "react-curved-arrow";
import { db, firestore, auth } from "../services/firebase";
import { v4 as uuidv4 } from "uuid";
import { colors } from "@material-ui/core";

function callback() {
  console.log("Snapped");
}

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = document.getElementById("container");
    const snapObject = new ScrollSnap(element, branding.snapConfig);
    snapObject.bind(callback);
  }, []);

  return (
    <div id="container" ref={containerRef}>
      <div className="page first-page">
        <img
          src={require("../assets/HarinLong.jpg")}
          alt="Harin"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: "5%",
            width: "95%",
            height: "10px",
          }}>
        <img
              src={require("../assets/Down.gif")}
              alt="Down"
              style={{
                objectFit: "cover",
                height: "80px",
                width: "80px",
                color: "#ffffff"
              }}
            />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "10%",
            width: "95%",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
              height: "150px",
              borderRadius: 5,
              backgroundColor: "rgba(0,0,0, 0.7)",
              color: "#ffffff",
              fontFamily: branding.FontMedium,
              padding: 10,
            }}
          >
            <img
              src={require("../assets/Elon.jpg")}
              alt="Musk"
              style={{
                objectFit: "cover",
                height: "100px",
                width: "100px",
                borderRadius: 100,
              }}
            />
            Elon Musk
            <br />
            <br />
            Inspiration for Innovation
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              height: "150px",
              borderRadius: 5,
              backgroundColor: "rgba(0,0,0, 0.7)",
              color: "#ffffff",
              fontFamily: branding.FontMedium,
            }}
          >
            Hi, My name is Hao Wu. You can call me Harin! <br />
            <br />
            This section is purely dedicated toward my future goals and
            aspirations.
            <br />
            My experiences and achievements can be found here!
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
              height: "150px",
              borderRadius: 5,
              backgroundColor: "rgba(0,0,0, 0.7)",
              color: "#ffffff",
              fontFamily: branding.FontMedium,
              padding: 10,
            }}
          >
            Lionel Messi
            <br />
            <br />
            Inspiration for Excellence
            <img
              src={require("../assets/Messi.jpg")}
              alt="Messi"
              style={{
                objectFit: "cover",
                height: "100px",
                width: "100px",
                borderRadius: 100,
              }}
            />
          </div>
        </div>
      </div>
      <div className="page second-page">
        <img
          src={require("../assets/Code.png")}
          alt="Harin"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            bottom: "10%",
            width: "95%",
            height: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
              height: "150px",
              borderRadius: 5,
              backgroundColor: "rgba(0,0,0, 0.7)",
              color: "#ffffff",
              fontFamily: branding.FontMedium,
              padding: 10,
            }}
          >
            <img
              src={require("../assets/Harin.jpg")}
              alt="Harin"
              style={{
                objectFit: "cover",
                height: "100px",
                width: "100px",
                borderRadius: 100,
              }}
            />
            OpenAI
            <br /> 
            <br /> 
            Inspired By
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50%",
              height: "150px",
              borderRadius: 5,
              backgroundColor: "rgba(0,0,0, 0.7)",
              color: "#ffffff",
              fontFamily: branding.FontMedium,
            }}
          >
            Hi, My name is Hao Wu. You can call me Harin! <br />
            <br />
            This section is purely dedicated toward my future goals and
            aspirations.
            <br />
            My experiences and achievements can be found here!
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20%",
              height: "150px",
              borderRadius: 5,
              backgroundColor: "rgba(0,0,0, 0.7)",
              color: "#ffffff",
              fontFamily: branding.FontMedium,
              padding: 10,
            }}
          >
            See My Short Term Goals!
            <img
              src={require("../assets/Harin.jpg")}
              alt="Harin"
              style={{
                objectFit: "cover",
                height: "100px",
                width: "100px",
                borderRadius: 100,
              }}
            />
          </div>
        </div>
      
      </div>
      <div className="page third-page">
        <img
          src={require("../assets/Type1.jpg")}
          alt="Harin"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div style={{ position: "absolute" }}>Type 1</div>
      </div>
      <div className="page fourth-page">
        <img
          src={require("../assets/Infinity.jpg")}
          alt="Harin"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
        <div style={{ position: "absolute" }}>Digital Conciousness</div>
      </div>
    </div>
  );
}

export default Home;
