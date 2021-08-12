import React, { useEffect, useRef } from "react";
import "../../styles/styles.css";
import branding from "../../styles/branding";
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

function Elon() {
  const containerRef = useRef(null);
  const tastebuds = useRef(null);
  const ubc = useRef(null);
  const protogo = useRef(null);
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
      <div className={isMobile ? "" : "page first-page"} style={{marginTop: isMobile ? 30 : 0}}>
        <div>
          <p
            style={{
              fontFamily: branding.FontMedium,
              fontSize: isMobile ? 24 : 36,
            }}
          >
            Life <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                color: branding.gray,
              }}
            >
              My Current Side Goal for Life
            </p>
          </p>
          <p
            style={{
              marginRight: isMobile ? "10%" : "20%",
              marginLeft: isMobile ? "10%" : "20%",
              fontSize: isMobile ? 12 : 16,
            }}
          >
            Tesla's vision paired with Elon Musk's first principle reasoning is
            changing the world and the way companies operate. From the lack of
            advertisements to simple internal communications, the company was
            able to overcome doubt within a challenging industry. Furthermore,
            Elon Musk is an inspirational innovator with relentless work ethic.
            His decisions are based off of logic and fundamental laws, rather
            than tradition and convention. I strive to follow his way of
            thinking and believe that immersing myself in the environment of him
            and other similar individuals will be mutually beneficial.
          </p>
          Today
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{fontSize: isMobile ? 12 : 16,}}>Current</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator style={{color:branding.green}}>
                <TimelineDot color="inherit"/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent style={{ display: "flex", alignItems: "left" }}>
                <Typography style={{fontSize: isMobile ? 12 : 16,}}>Full Coverage of Job Posting Skills</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{fontSize: isMobile ? 12 : 16,}}>Current</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator style={{color:branding.green}}>
                <TimelineDot color="inherit"/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography style={{fontSize: isMobile ? 12 : 16,}}>
                  Practice, Apply and Get Interview at Tesla
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          Work at Tesla and Meet Elon Musk
        </div>
        {!isMobile && <div
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
            src={require("../../assets/BlackDown.gif")}
            alt="Down"
            style={{
              objectFit: "cover",
              height: "80px",
              width: "80px",
              color: "#ffffff",
            }}
          />
        </div>}
      </div>
      <div className={isMobile ? "" : "page second-page"} style={{marginTop: isMobile ? 30 : 0}}>
        <div>
          <p
            style={{
              fontFamily: branding.FontMedium,
              fontSize: isMobile ? 24 : 36,
              cursor: "pointer",
              marginLeft: "5%",
                marginRight: "5%",
            }}
            onClick={() => {
              window.location =
                "https://www.tesla.com/en_CA/careers/job/software-mobileengineeringinternshipspring2021and-orsummer2021-69087";
            }}
          >
            Software - Mobile Engineering Internship - ID 69087
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                color: branding.gray,
              }}
            >
              Set the bar for what vehicle mobile user experience can be.
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
            Tesla is seeking the following: <br />
            <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Highly motivated mobile engineering intern <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Create exceptional user experiences <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Strong software engineering skills <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Excellent interpersonal communication <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Collaborate with our top-notch design team and back end developers{" "}
            <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Design, code, and maintain mobile user experiences <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Code for performance, stability and maintainability <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Work with a cross-functional team of hardware engineers,
            application/UI software engineers, QA/Validation, and designers{" "}
            <br />
            <Button
              onClick={() => {
                ubc.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Currently working towards a BS, MS, or advanced degree in a
            relevant engineering program such as Computer Science <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Familiar with Objective-C or Android, JavaScript. Experience with
            React/React Native is preferred <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Excellent grasp of fundamental computer science concepts, good at
            solving complex technical problems <br />
            <Button
              onClick={() => {
                tastebuds.current.scrollIntoView(false, { behavior: "smooth" });
              }}
              style={{ cursor: "pointer", color: "#0055B7", padding: 0, fontFamily:branding.FontRegular, fontSize: isMobile ? 12 : 16,}}
            >
              See Latest
            </Button>{" "}
            • Experience using common design patterns. High standards for code
            quality, maintainability, and performance <br />
          </p>
        </div>
      </div>
      <div className={isMobile ? "" : "page third-page"} style={{marginTop: isMobile ? 30 : 0}} ref={tastebuds}>
        <div>
          <img
            src={require("../../assets/TasteBuds.png")}
            alt="Tastebuds"
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
            Tastebuds
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                cursor: "pointer",
                color: "#0055B7",
              }}
              onClick={() => {
                window.location = "https://harinwu.com/works/Tastebuds.html";
              }}
            >
              Full Details
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
            • Highly motivated, leading mobile engineering and general
            development with majority of spare time. <br />
            • Creating exceptional user experiences, ensuring simple and
            effective interfaces. <br />
            • Strong software engineering skills, planning system architecture
            and creating many internal tools. <br />
            • Excellent interpersonal communication, communicating with team
            members and potential restaurant partners. <br />
            • Collaborating with a skilled team of 10, including designers, back
            end developers, web developers and business members. <br />
            • Designing, coding, and maintaining mobile user experiences for
            1500+ users. <br />
            • Coding for performance, stability and maintainability, allowed
            transition from native iOS/Android to cross platform. <br />
            • Working with a cross-functional team of application/UI software
            engineers, QA/Validation, and designers daily. <br />
            • Proficient with React, React Native, Android and JavaScript.
            Familiar with Objective-C. Bonus proficiency with Swift and Kotlin.{" "}
            <br />
            • Excellent grasp of fundamental computer science concepts, good at
            solving complex technical problems including,
            <br /> recommendation algorithms, search indexing and location
            queries. In house solutions saving thousands of dollars annually.{" "}
            <br />
            • Experience using common design patterns. High standards for code
            quality, maintainability, and performance. <br />
          </p>
        </div>
      </div>
      <div className={isMobile ? "" : "page third-page"} style={{marginTop: isMobile ? 30 : 0}} ref={ubc}>
        <div>
          <img
            src={require("../../assets/UBC.jpg")}
            alt="UBC"
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
            UBC
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                cursor: "pointer",
                color: "#0055B7",
              }}
              onClick={() => {
                window.location = "https://harinwu.com/works/UBC.html";
              }}
            >
              Full Details
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
            • Coursework on coding for performance, stability and
            maintainability. <br />
            • Currently working towards a Bachelor of Science in Computer
            Science. <br />
            • Excellent grasp of fundamental computer science concepts, GPA of
            3.85 on related courses. <br />
            • Challenging myself with difficult course like Honours Physics and
            multiple new languages, GPA of 3.5 overall. <br />
            • Experience using common design patterns. High standards for code
            quality, maintainability, and performance. <br />
          </p>
        </div>
      </div>
      <div className={isMobile ? "" : "page third-page"} style={{marginTop: isMobile ? 30 : 0}} ref={protogo}>
        <div>
          <img
            src={require("../../assets/ProToGo.png")}
            alt="ProToGo"
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
            ProToGo
            <br />
            <p
              style={{
                fontFamily: branding.FontRegular,
                fontSize: isMobile ? 12 : 16,
                cursor: "pointer",
                color: "#0055B7",
              }}
              onClick={() => {
                window.location = "https://harinwu.com/works/ProToGo.html";
              }}
            >
              Full Details
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
            • Highly committed Android developer, passionate and met all
            deadlines. <br />
            • Created exceptional user experiences through Android Studio XML
            and storyboards. <br />
            • Strong software engineering skills, crafting reliable
            time-tracking and location-tracking software for construction
            workers.
            <br />
            • Excellent interpersonal communication, amongst team members and
            business partners. <br />
            • Collaborated with a global design team. <br />
            • Designed, coded, and maintained mobile user experiences.
            <br />
            • Familiarized with Android and JavaScript. <br />
            • Solved complex technical problems regarding location tracking.{" "}
            <br />
            • Used common design patterns, object oriented programming. <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Elon;
