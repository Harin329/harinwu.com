import React, { useEffect, useRef } from "react";
import "../styles/styles.css";
import branding from "../styles/branding";
import ScrollSnap from "scroll-snap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "react-responsive";

function callback() {
  console.log("Snapped");
}

function Immortal() {
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    if (!isMobile) {
      const element = document.getElementById("container");
      const snapObject = new ScrollSnap(element, branding.snapConfig);
      snapObject.bind(callback);
    }
  }, []);

  return (
    <div id="container" ref={containerRef}>
      <div
        className={isMobile ? "" : "page first-page"}
        style={{ marginTop: isMobile ? 30 : 0 }}
      >
        <div>
          <p
            style={{
              fontFamily: branding.FontMedium,
              fontSize: isMobile ? 24 : 36,
              marginTop: 100,
            }}
          >
            Digital Conciousness
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                color: branding.gray,
                marginLeft: "5%",
                marginRight: "5%",
              }}
            >
              Understanding the Human Brain, Mind Uploading, Digital Immortality
            </p>
          </p>
          <p
            style={{
              marginRight: isMobile ? "10%" : "20%",
              marginLeft: isMobile ? "10%" : "20%",
              fontSize: isMobile ? 12 : 16,
            }}
          >
            Very ambitious, but the ability to digitalize our thoughts and
            perceptions would be an exciting step forward. Currently, our five
            senses allow us to percieve and interact with the world. Each sense
            has inputs 'devices' which send electrical signals to our brain. If
            we were able to map these signals in the brain and control them, we
            would be a step closer to understanding conciousness and simulating
            experiences.
          </p>
          Today
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  color="textSecondary"
                  style={{ fontSize: isMobile ? 12 : 16 }}
                >
                  Backlog
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ display: "flex", alignItems: "left" }}>
                <Typography style={{ fontSize: isMobile ? 12 : 16 }}>
                  Learning Brain Functionality (Sound Emphasis) - EEG Setup For
                  Exploring
                </Typography>
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
                <Typography style={{ fontSize: isMobile ? 12 : 16 }}>
                  Brain Functions For Remaining Senses
                </Typography>
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
              <TimelineContent style={{ display: "flex", alignItems: "left" }}>
                <Typography style={{ fontSize: isMobile ? 12 : 16 }}>
                  Replicating Brain Functions
                </Typography>
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
                <Typography style={{ fontSize: isMobile ? 12 : 16 }}>
                  Exploring Conciousness
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          Digital Conciousness
          <br />
          The Ability to Send a Concious Mind From One Host Body to Another
        </div>
      </div>
    </div>
  );
}

export default Immortal;
