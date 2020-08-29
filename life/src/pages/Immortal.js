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

function Immortal() {
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
              Digital Conciousness<br />
              <p
                style={{
                  fontFamily: branding.FontRegular,
                  fontSize: 16,
                  color: branding.gray,
                }}
              >
                Understanding the Human Brain, Mind Uploading, Digital Immortality
              </p>
            </p>
            <p style={{marginRight: '20%', marginLeft: '20%'}}>Very ambitious, but the ability to digitalize our thoughts and perceptions would be an exciting step forward.
              Currently, our five senses allow us to percieve and interact with the world. Each sense has inputs 'devices' which send electrical signals to our brain.
              If we were able to map these signals in the brain and control them, we would be a step closer to understanding conciousness and simulating experiences.
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
            <Typography>Learning Brain Functionality (Sound Emphasis) - EEG Setup For Exploring</Typography>
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
            <Typography>Brain Functions For Remaining Senses</Typography>
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
            <Typography>Replicating Brain Functions</Typography>
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
            <Typography>Exploring Conciousness</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      Digital Conciousness
      <br/>
      The Ability to Send a Concious Mind From One Host Body to Another
      </div>
        </div>
        
         </div>
  );
}

export default Immortal;
