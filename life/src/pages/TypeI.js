import React, { useEffect, useRef } from "react";
import "../styles/styles.css";
import branding from "../styles/branding";
import ScrollSnap from "scroll-snap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from "@material-ui/core/Typography";

function callback() {
  console.log("Snapped");
}

function TypeI() {
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
          <p style={{ fontFamily: branding.FontMedium, fontSize: 36 }}>
              Type 1 Civilization<br />
              <p
                style={{
                  fontFamily: branding.FontRegular,
                  fontSize: 16,
                  color: branding.gray,
                }}
              >
                Becoming a Planetary Civilization, Controlling All Energy on Earth
              </p>
            </p>
          <p style={{marginRight: '20%', marginLeft: '20%'}}>The Kardashev scale has been a widely accepted measurement of a civilization's level of technology.
          Being amazed by the sheer force of ocean waves, storms and natural disasters, there is so much potential energy out around us waiting to be used.
          It is said that money makes the world spin, but really it is energy that makes the world spin, literally and figuratively. I would love to see our civilization
          accelerate the progress to become a type I civilization
            </p>
            Today
        <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Backlog</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{ display:'flex', alignItems:"left"}}>
            <Typography>Learning about Solar - Building My Own Solar Panel to Power iPhone</Typography>
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
            <Typography>Building Battery for Storing Solar</Typography>
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
          <TimelineContent style={{ display:'flex', alignItems:"left"}}>
            <Typography>Energy From Natural Disasters</Typography>
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
            <Typography>Fully Renewable Planet</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      Type I Civilization <br/>
      Humanity Classified as a Type I Civilization on the Kardashev Scale
      </div>
        </div>
        
        </div>
  );
}

export default TypeI;
