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
import { Button } from "@material-ui/core";

function callback() {
  console.log("Snapped");
}

function Life() {
  const containerRef = useRef(null);
  const ai = useRef(null);
  const tech = useRef(null);
  const language = useRef(null);
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
            }}
          >
            Problem Driven <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                color: branding.gray,
              }}
            >
              My Current Projects Guided By Objectives
            </p>
          </p>
          <p
            style={{
              marginRight: isMobile ? "10%" : "20%",
              marginLeft: isMobile ? "10%" : "20%",
              fontSize: isMobile ? 12 : 16,
            }}
          >
            The following three points are the priorities I am working on with a
            destination in mind. Each of these include a well defined problem,
            organized sprints and will require the tools that make the most
            sense in efficiently completing the objective.
          </p>
          Today
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  color="textSecondary"
                  style={{ fontSize: isMobile ? 12 : 16 }}
                >
                  Portfolio
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator style={{ color: branding.green }}>
                <TimelineDot color="inherit" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ display: "flex", alignItems: "left" }}>
                <Typography style={{ fontSize: isMobile ? 12 : 16 }}>
                  UBC Launchpad / Clubs / Projects
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  color="textSecondary"
                  style={{ fontSize: isMobile ? 12 : 16 }}
                >
                  Career
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator style={{ color: branding.green }}>
                <TimelineDot color="inherit" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography style={{ fontSize: isMobile ? 12 : 16 }}>
                  Internships / UBC
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography
                  color="textSecondary"
                  style={{ fontSize: isMobile ? 12 : 16 }}
                >
                  Startup
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator style={{ color: branding.green }}>
                <TimelineDot color="inherit" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ display: "flex", alignItems: "left" }}>
                <Typography style={{ fontSize: isMobile ? 12 : 16 }}>
                  Hungrii Inc.
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          AGI, Human Advancement, Digital Conciousness
        </div>
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              bottom: "5%",
              width: "95%",
              height: "10px",
            }}
          >
            <img
              src={require("../assets/BlackDown.gif")}
              alt="Down"
              style={{
                objectFit: "cover",
                height: "80px",
                width: "80px",
                color: "#ffffff",
              }}
            />
          </div>
        )}
      </div>
      <div
        className={isMobile ? "" : "page second-page"}
        style={{ marginTop: isMobile ? 30 : 0 }}
      >
        <div>
          <p
            style={{
              fontFamily: branding.FontMedium,
              fontSize: isMobile ? 24 : 36,
              cursor: "pointer",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            Learning Driven
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                color: branding.gray,
              }}
            >
              My Current Projects Guided By Curiosity
            </p>
          </p>
          <p
            style={{
              fontSize: isMobile ? 12 : 16,
              textAlign: "left",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            The following are the categories I am focused on in my work for curious exploration: <br />
            <br />
            <Button
              onClick={() => {
                ai.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{
                cursor: "pointer",
                color: "#0055B7",
                padding: 0,
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
              }}
            >
            AI/ML Papers
            </Button>{" "}
            • Top papers From NeurIPS, ICML, ICLR which I am applying. <br />
            <Button
              onClick={() => {
                tech.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{
                cursor: "pointer",
                color: "#0055B7",
                padding: 0,
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
              }}
            >
              General Tech
            </Button>{" "}
            • Top growing GitHub repositories which I am exploring. <br />
            <Button
              onClick={() => {
                language.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{
                cursor: "pointer",
                color: "#0055B7",
                padding: 0,
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
              }}
            >
              Languages
            </Button>{" "}
            • Top mentioned languages on Tesla job postings. <br />
          </p>
        </div>
      </div>
      <div className={isMobile ? "" : "page third-page"} style={{marginTop: isMobile ? 30 : 0}} ref={ai}>
        <div>
          <img
            src={require("../assets/NeurIPS.png")}
            alt="NeurIPS"
            style={{
              objectFit: "cover",
              height: "80px",
              width: "80px",
              color: "#ffffff",
              marginBottom: 29,
            }}
          />
          <p
            style={{
              fontFamily: branding.FontMedium,
              fontSize: isMobile ? 24 : 36,
            }}
          >
            Academic AI/ML Papers
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                cursor: "pointer",
                color: "#0055B7",
              }}
            >
              Papers I am reading:
            </p>
          </p>
          <p
            style={{
              fontSize: isMobile ? 12 : 16,
              textAlign: "left",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            • Language Models are Few-Shot Learners (NeurIPS) <br />
            • Learning Mesh-Based Simulation with Graph Networks (ICLR) <br />
            • Score-Based Generative Modeling through Stochastic Differential Equations (ICLR) <br />
          </p>
        </div>
      </div>
      <div className={isMobile ? "" : "page third-page"} style={{marginTop: isMobile ? 30 : 0}} ref={tech}>
        <div>
          <img
            src={require("../assets/Github.png")}
            alt="Github"
            style={{
              objectFit: "contain",
              height: "80px",
              width: "80px",
              color: "#ffffff",
              marginBottom: 29,
            }}
          />
          <p
            style={{
              fontFamily: branding.FontMedium,
              fontSize: isMobile ? 24 : 36,
            }}
          >
            Trending Repositories
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                cursor: "pointer",
                color: "#0055B7",
              }}
            >
              Repositories I am exploring:
            </p>
          </p>
          <p
            style={{
              fontSize: isMobile ? 12 : 16,
              textAlign: "left",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            • ant-design/ant-design <br />
            • jwasham/coding-interview-university <br />
            • public-apis/public-apis <br />
          </p>
        </div>
      </div>
      <div className={isMobile ? "" : "page third-page"} style={{marginTop: isMobile ? 30 : 0}} ref={language}>
        <div>
          <img
            src={require("../assets/Python.png")}
            alt="Python"
            style={{
              objectFit: "cover",
              height: "80px",
              width: "80px",
              color: "#ffffff",
              marginBottom: 29,
            }}
          />
          <p
            style={{
              fontFamily: branding.FontMedium,
              fontSize: isMobile ? 24 : 36,
            }}
          >
            Programming Languages
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                cursor: "pointer",
                color: "#0055B7",
              }}
            >
              Languages I am mastering:
            </p>
          </p>
          <p
            style={{
              fontSize: isMobile ? 12 : 16,
              textAlign: "left",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            • Python <br />
            • C/C++ <br />
            • SQL <br />
          </p>
        </div>
      </div>
    
    </div>
  );
}

export default Life;
