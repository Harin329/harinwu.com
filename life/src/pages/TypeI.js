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

function TypeI() {
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
            Type 1 Civilization
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
              Becoming a Planetary Civilization, Controlling All Energy on Earth
            </p>
          </p>
          <p
            style={{
              marginRight: isMobile ? "10%" : "20%",
              marginLeft: isMobile ? "10%" : "20%",
              fontSize: isMobile ? 12 : 16,
            }}
          >
            The Kardashev scale has been a widely accepted measurement of a
            civilization's level of technology. Being amazed by the sheer force
            of ocean waves, storms and natural disasters, there is so much
            potential energy out around us waiting to be used. It is said that
            money makes the world spin, but really it is energy that makes the
            world spin, literally and figuratively. I would love to see our
            civilization accelerate the progress to become a type I civilization
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
                  Learning about Solar - Building My Own Solar Panel to Power
                  iPhone
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
                  Building Battery for Storing Solar
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
                  Energy From Natural Disasters
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
                  Fully Renewable Planet
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          Type I Civilization <br />
          Humanity Classified as a Type I Civilization on the Kardashev Scale
        </div>
      </div>
    </div>
  );
}

export default TypeI;
