import React, { useState, useEffect, useRef } from "react";
import "../styles/styles.css";
import branding from "../styles/branding";
import ScrollSnap from "scroll-snap";
import Link from "@material-ui/core/Link";
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
import { db, firestore, auth } from "../services/firebase";
import { v4 as uuidv4 } from "uuid";
import { colors } from "@material-ui/core";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

function callback() {
  console.log("Snapped");
}

function AGI() {
  const containerRef = useRef(null);

  useEffect(() => {
    const element = document.getElementById("container");
    const snapObject = new ScrollSnap(element, branding.snapConfig);
    snapObject.bind(callback);
  }, []);

  return (
     <div id="container" ref={containerRef}>
        <div className="page first-page">
        <div>
        <p style={{ fontFamily: branding.FontMedium, fontSize: 36, marginTop: 50}}>
              Artificial General Intelligence<br />
              <p
                style={{
                  fontFamily: branding.FontRegular,
                  fontSize: 16,
                  color: branding.gray,
                }}
              >
                The Final Invention of Humanity
              </p>
            </p>
          <p style={{marginRight: '20%', marginLeft: '20%'}}>
            As a devoted football fan, I watched Messi create seemingly impossible goals as my jaws dropped. Identically, I felt the same about the breakthroughs in the 
            AI community, with new applications imagined and limits consistently broken.
            Yet, the topic still has so much uncertainty, being simultaneously underestimated and overestimated. Even less is known of
          the singularity point, the point in time where we create a strong AI. The technology already influences our world, from self driving cars and writing code to
          optimization and prediction. I see it as an exciting opportunity to take humanity to the next level, but there is much to learn, and every step
          must be carefully taken. 
            </p>
            Today
        <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Current</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography  style={{ display:'flex', alignItems:"left"}}>Reinforcement Learning Based Chatbot</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>3D Printed Autonomous Following Drone</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary"></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent  style={{ display:'flex', alignItems:"left"}}>
            <Typography>Sound Driven AI Program</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      Artificial General Intelligence
      <br/>
      Consistently Passing the Turing Test, Indistinguishable from Human
      </div>
        </div>
      </div>
  );
}

export default AGI;
