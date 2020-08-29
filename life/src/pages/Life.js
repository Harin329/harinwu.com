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

function callback() {
  console.log("Snapped");
}

function Life() {
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
              Life <br />
              <p
                style={{
                  fontFamily: branding.FontRegular,
                  fontSize: 16,
                  color: branding.gray,
                }}
              >
                My Current Side Goal for Life
              </p>
            </p>
          <p style={{ marginRight: "20%", marginLeft: "20%" }}>
            Tesla's vision paired with Elon Musk's first principle reasoning is changing the world and the way companies operate. From the lack of
            advertisements to simple internal communications, the company was able to overcome doubt within a challenging industry. Furthermore, Elon Musk is an
            inspirational innovator with relentless work ethic. His decisions are based off of logic and fundamental laws, rather than tradition and convention.
            I strive to follow his way of thinking and believe that immersing myself in the environment of him and other similar individuals will be mutually beneficial.
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
              <TimelineContent style={{ display: "flex", alignItems: "left" }}>
                <Typography>Create Startup and Deliver Revenue Generating Product</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">Current</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>Full Coverage of Skills On Job Postings</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">Current</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ display: "flex", alignItems: "right" }}>
                <Typography>Practice, Apply and Get Interview at Tesla</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          Work at Tesla and Meet Elon Musk
        </div>
      </div>
    </div>
  );
}

export default Life;
